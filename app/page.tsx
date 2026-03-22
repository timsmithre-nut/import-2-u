import DotGlobeHeroDemo from "@/components/ui/globe-hero-demo";
import { ImportHeader } from "@/components/ui/import-header";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg",       alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg",     alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg",       alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg",        alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg",             alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg",       alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg",        alt: "Clerk Logo" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-red-100 to-red-400">
      <ImportHeader />
      <DotGlobeHeroDemo />

      <section id="learn-more" className="relative mx-auto max-w-3xl px-4 py-24">
        <h2 className="mb-5 text-center font-medium text-gray-700 text-xl tracking-tight md:text-3xl">
          <span className="text-gray-500">Trusted by experts.</span>
          <br />
          <span className="font-semibold text-gray-800">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-gray-400/40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={logos} />
        <div className="mt-5 h-px bg-gray-400/40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}
