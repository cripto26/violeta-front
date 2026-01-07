import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  label: string;
  tone?: "light" | "dark";
};

export function NavItem({ href, label, tone = "light" }: Props) {
  const cls =
    tone === "light"
      ? "text-white/90 hover:text-white"
      : "text-neutral-800 hover:text-neutral-950";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition",
        cls
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
