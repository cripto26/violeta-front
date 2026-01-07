import { Shell } from "@/components/templates/Shell";

export function Centered({
  title,
  children,
  showHome,
}: {
  title: string;
  children: React.ReactNode;
  showHome?: boolean;
}) {
  return (
    <Shell showHome={showHome}>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-black">{title}</h1>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </div>
    </Shell>
  );
}
