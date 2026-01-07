"use client";

import { Field } from "@/components/molecules/Field";
import { Button } from "@/components/atoms/Button";

export function LoginForm() {
  return (
    <form className="mx-auto w-full max-w-sm space-y-4">
      <Field label="Ingresa tu email" name="email" type="email" placeholder="example@yahoo.com" />
      <Field label="Contraseña" name="password" type="password" placeholder="************" />

      <Button type="submit" className="w-full">
        Ingresar
      </Button>

      <Button type="button" variant="secondary" className="w-full">
        Ingresar con Google
      </Button>
    </form>
  );
}
