import { TopNav } from "@/components/organisms/TopNav";
import { SyncOnOnline } from "@/components/organisms/SyncOnOnline";

export function Shell({
  children,
  showHome,
}: {
  children: React.ReactNode;
  showHome?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-neutral-950">
      <div className="min-h-dvh bg-white">
        <SyncOnOnline />
        <TopNav showHome={showHome} />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="py-6 text-center text-xs text-neutral-500">
          ©{new Date().getFullYear()} Violeta - PWA de Inventario y Ventas
        </footer>
      </div>
    </div>
  );
}
