"use client";

import { Button } from "@/components/atoms/Button";

type Props = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: Props) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-3 h-8 w-8 rounded-md bg-violet-100" />
      <h3 className="text-sm font-extrabold">{title}</h3>
      <p className="mt-2 text-xs text-neutral-600">{description}</p>
      <Button className="mt-4 w-full">Ir a la información</Button>
    </div>
  );
}
