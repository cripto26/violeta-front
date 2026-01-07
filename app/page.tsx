import { Shell } from "@/components/templates/Shell";
import { FeatureGrid } from "@/components/organisms/FeatureGrid";

export default function HomePage() {
  return (
    <Shell>
      <h1 className="mb-6 text-center text-4xl font-black">Bienvenido a Violeta</h1>
      <FeatureGrid />
    </Shell>
  );
}
