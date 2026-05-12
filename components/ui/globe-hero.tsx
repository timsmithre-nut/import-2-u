"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface DotGlobeHeroProps {
  rotationSpeed?: number;
  globeRadius?: number;
  className?: string;
  children?: React.ReactNode;
}

const heroImages = [
  "/hero-carousel/photo-1.jpg",
  "/hero-carousel/photo-2.jpg",
  "/hero-carousel/photo-3.jpg",
  "/hero-carousel/photo-4.jpg",
  "/hero-carousel/photo-5.jpg",
  "/hero-carousel/photo-6.jpg",
];

const columnImageSets = [
  [...heroImages, ...heroImages],
  [...heroImages.slice(3), ...heroImages.slice(0, 3), ...heroImages],
  [...heroImages.slice(1), ...heroImages.slice(0, 1), ...heroImages],
  [...heroImages.slice(4), ...heroImages.slice(0, 4), ...heroImages],
];

function HeroCarouselColumn({
  images,
  direction,
  className,
}: {
  images: string[];
  direction: "up" | "down";
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <div
        className={cn(
          "flex flex-col gap-5",
          direction === "up" ? "hero-carousel-up" : "hero-carousel-down"
        )}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 shadow-xl shadow-black/20"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-top"
              sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const DotGlobeHero = React.forwardRef<
  HTMLDivElement,
  DotGlobeHeroProps
>(({
  rotationSpeed,
  globeRadius,
  className,
  children,
  ...props
}, ref) => {
  void rotationSpeed;
  void globeRadius;

  return (
    <div
      ref={ref}
      className={cn(
        "relative mt-20 min-h-[calc(100svh-5rem)] w-full overflow-hidden bg-background",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-24 grid grid-cols-2 gap-4 px-4 opacity-90 sm:grid-cols-3 md:-top-32 md:gap-6 md:px-8 lg:grid-cols-4">
          {columnImageSets.map((images, index) => (
            <HeroCarouselColumn
              key={index}
              images={images}
              direction={index % 2 === 0 ? "up" : "down"}
              className={cn(index === 3 && "hidden lg:block", index === 2 && "hidden sm:block")}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.38)_68%)]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
});
DotGlobeHero.displayName = "DotGlobeHero";
export { DotGlobeHero, type DotGlobeHeroProps };
