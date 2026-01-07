import { Input } from "@/components/atoms/Input";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export function Field({ label, name, type = "text", placeholder }: Props) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-neutral-700">
        {label}
      </span>
      <Input name={name} type={type} placeholder={placeholder} />
    </label>
  );
}
