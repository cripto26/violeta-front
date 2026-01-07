import { cn } from "@/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none",
        "placeholder:text-neutral-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200",
        className
      )}
      {...props}
    />
  );
}
