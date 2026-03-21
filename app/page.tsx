import DotGlobeHeroDemo from "@/components/ui/globe-hero-demo";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function Home() {
  return (
    <>
      <DotGlobeHeroDemo />
      <section id="learn-more" className="relative mx-auto grid max-w-3xl px-4 py-24 bg-gradient-to-br from-orange-200 to-pink-200">
        <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
          Companies we{" "}
          <span className="font-semibold text-primary">collaborate</span> with.
        </h2>
        <LogoCloud />
      </section>
    </>
  );
}
