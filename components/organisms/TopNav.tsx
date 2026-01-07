import { Logo } from "@/components/atoms/Logo";
import { NavItem } from "@/components/molecules/NavItem";
import { topNavLinks, NAV } from "@/lib/nav";

type Props = {
  showHome?: boolean;
};

export function TopNav({ showHome }: Props) {
  return (
    <header className="w-full bg-gradient-to-r from-violet-800 to-violet-600">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="flex items-center gap-2">
          {showHome ? <NavItem href={NAV.home} label="Inicio" /> : null}
          {topNavLinks.map((l) => (
            <NavItem key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
