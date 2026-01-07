import Dexie, { type Table } from "dexie";

export type PendingSale = {
  id: string;
  createdAt: number;
  payload: Record<string, unknown>;
  status: "pending" | "syncing" | "failed";
  attempts: number;
};

class VioletaDB extends Dexie {
  pendingSales!: Table<PendingSale, string>;

  constructor() {
    super("violeta_db");
    this.version(1).stores({
      pendingSales: "id, createdAt, status",
    });
  }
}

export const db = new VioletaDB();

