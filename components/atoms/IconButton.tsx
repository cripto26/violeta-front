import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ className, ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md",
        "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30",
        className
      )}
      {...props}
    />
  );
}
