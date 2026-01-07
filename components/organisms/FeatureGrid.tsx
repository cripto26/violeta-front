import { FeatureCard } from "@/components/molecules/FeatureCard";

export function FeatureGrid() {
  return (
    <div className="rounded-lg bg-neutral-100 p-4">
      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard
          title="Gestión de inventario"
          description="Administra tus productos y stock en tiempo real."
        />
        <FeatureCard
          title="Punto de venta (POS)"
          description="Registra ventas y controla los métodos de pago."
        />
        <FeatureCard
          title="Reporte y arqueos"
          description="Consulta reportes contables y operativos."
        />
      </div>
    </div>
  );
}
