import { db, type PendingSale } from "./db";

export async function enqueueSale(payload: Record<string, unknown>) {
  const id = crypto.randomUUID();
  const item: PendingSale = {
    id,
    createdAt: Date.now(),
    payload,
    status: "pending",
    attempts: 0,
  };
  await db.pendingSales.add(item);
  return id;
}

export async function syncPendingSales() {
  const pendings = await db.pendingSales.where("status").equals("pending").toArray();

  for (const sale of pendings) {
    try {
      await db.pendingSales.update(sale.id, { status: "syncing" });

      const res = await fetch("/api/ventas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // idempotencyKey evita duplicados si reintenta
        body: JSON.stringify({ ...sale.payload, idempotencyKey: sale.id }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      await db.pendingSales.delete(sale.id);
    } catch {
      const attempts = (sale.attempts ?? 0) + 1;

      // si quieres marcar como failed después de N intentos:
      // const status = attempts >= 5 ? "failed" : "pending";

      await db.pendingSales.update(sale.id, { status: "pending", attempts });
    }
  }
}
