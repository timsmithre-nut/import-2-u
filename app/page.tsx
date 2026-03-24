import DotGlobeHeroDemo from "@/components/ui/globe-hero-demo";
import { ImportHeader } from "@/components/ui/import-header";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { Testimonials } from "@/components/ui/testimonials-columns-1";

const logos = [
  { src: "https://cdn.prod.website-files.com/67e519042689e393c5d4e3ce/67e519042689e393c5d4e422_globus_logo.png", alt: "Globus Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_Manor.svg/960px-Logo_Manor.svg.png",   alt: "Manor Logo" },
  { src: "https://cdn.prod.website-files.com/67e519042689e393c5d4e3ce/67e519042689e393c5d4e422_globus_logo.png", alt: "Globus Logo 2" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_Manor.svg/960px-Logo_Manor.svg.png",   alt: "Manor Logo 2" },
  { src: "https://cdn.prod.website-files.com/67e519042689e393c5d4e3ce/67e519042689e393c5d4e422_globus_logo.png", alt: "Globus Logo 3" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_Manor.svg/960px-Logo_Manor.svg.png",   alt: "Manor Logo 3" },
  { src: "https://cdn.prod.website-files.com/67e519042689e393c5d4e3ce/67e519042689e393c5d4e422_globus_logo.png", alt: "Globus Logo 4" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_Manor.svg/960px-Logo_Manor.svg.png",   alt: "Manor Logo 4" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-red-100 to-red-400">
      <ImportHeader />
      <DotGlobeHeroDemo />

      <section id="learn-more" className="relative mx-auto max-w-3xl px-4 py-24">
        <h2 className="mb-5 text-center font-semibold text-gray-800 text-xl tracking-tight md:text-3xl">
          Our partners
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-gray-400/40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={logos} />
        <div className="mt-5 h-px bg-gray-400/40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>

      <Testimonials />
    </div>
  );
}
