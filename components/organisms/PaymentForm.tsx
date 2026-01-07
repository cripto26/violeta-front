"use client";

import { Field } from "@/components/molecules/Field";
import { Button } from "@/components/atoms/Button";

export function PaymentForm() {
  return (
    <form className="mx-auto w-full max-w-md space-y-4">
      <Field label="Email" name="email" type="email" placeholder="example@yahoo.com" />

      <div className="space-y-2">
        <p className="text-xs font-semibold text-neutral-700">Card information</p>

        <input
          className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
          placeholder="4242 4242 4242 4242"
          inputMode="numeric"
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            placeholder="12/34"
            inputMode="numeric"
          />
          <input
            className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            placeholder="567"
            inputMode="numeric"
          />
        </div>
      </div>

      <Field label="Name on card" name="name" placeholder="Fulano Angulo" />

      <label className="block">
        <span className="mb-1 block text-xs font-semibold text-neutral-700">
          Country or region
        </span>
        <select className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200">
          <option>Colombia</option>
          <option>México</option>
          <option>Chile</option>
          <option>Perú</option>
        </select>
      </label>

      <Button type="submit" className="w-full" disabled>
        Pagar
      </Button>
    </form>
  );
}
