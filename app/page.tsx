import DotGlobeHeroDemo from "@/components/ui/globe-hero-demo";
import { ImportHeader } from "@/components/ui/import-header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-red-100 to-red-400">
      <ImportHeader />
      <DotGlobeHeroDemo />
    </div>
  );
}
