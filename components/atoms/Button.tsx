import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-violet-700 text-white hover:bg-violet-800",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
    ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
  }[variant];

  return <button className={cn(base, variants, className)} {...props} />;
}
