import { Centered } from "@/components/templates/Centered";
import { PaymentForm } from "@/components/organisms/PaymentForm";

export default function PagoPage() {
  return (
    <Centered title="Formulario" showHome>
      <PaymentForm />
    </Centered>
  );
}
