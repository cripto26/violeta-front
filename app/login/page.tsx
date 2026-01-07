import { Centered } from "@/components/templates/Centered";
import { LoginForm } from "@/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <Centered title="Elige una opción para ingresar" showHome>
      <LoginForm />
    </Centered>
  );
}
