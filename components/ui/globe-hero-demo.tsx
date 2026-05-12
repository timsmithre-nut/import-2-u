"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";
export default function DotGlobeHeroDemo() {
  const router = useRouter();
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="relative overflow-hidden bg-transparent"
    >

      <div className="relative z-10 mx-auto max-w-[1200px] space-y-10 px-6 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-black tracking-normal leading-[0.9] text-white select-none drop-shadow-2xl"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="block text-[clamp(2.25rem,4vw,4.75rem)] font-medium text-white/85">
                They don&apos;t ship to Switzerland.
              </span>
              <span className="relative my-5 block h-[10px] md:my-7">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "min(70vw, 1100px)" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 h-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#f01e2c] via-[#f01e2c]/80 to-transparent shadow-lg shadow-black/30"
                />
              </span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-[clamp(4rem,8vw,8rem)] font-black text-transparent">
                  WE DO.
                </span>
                <div className="absolute inset-0 scale-105 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-[clamp(4rem,8vw,8rem)] font-black text-transparent opacity-50 blur-2xl"
                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  WE DO.
                </div>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-[clamp(1.1rem,1.6vw,1.75rem)] text-white/85 leading-relaxed font-medium drop-shadow-lg"
               style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Your Favourite Gym Clothes, Delivered to your Swiss address, all duties included, no surprises.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
        >
          <motion.button
            onClick={() => router.push("/import")}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 25px hsl(var(--primary) / 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary via-primary to-primary/90 px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-xl transition-all duration-500 hover:shadow-primary/30 md:px-8 md:py-4 md:text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 tracking-wide">Start Importing</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>

          <motion.button
            onClick={() =>
              document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{
              scale: 1.03,
              backgroundColor: "hsl(var(--accent))",
              borderColor: "hsl(var(--primary))",
              boxShadow: "0 15px 30px rgba(0,0,0,0.1), 0 0 15px hsl(var(--primary) / 0.1)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border-2 border-border/40 bg-background/60 px-6 py-3.5 text-base font-semibold shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-background/90 md:px-8 md:py-4 md:text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="relative z-10 tracking-wide">Learn More</span>
          </motion.button>
        </motion.div>
      </div>
    </DotGlobeHero>
  );
}
