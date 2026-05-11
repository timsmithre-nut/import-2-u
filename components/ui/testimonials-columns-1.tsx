"use client";
import React from "react";
import { motion } from "motion/react";
const testimonials = [
  {
    text: "I'd been trying to order Gymshark for months. Every time I checked out it either blocked Switzerland or hit me with a massive customs bill. Import2Me just handled everything.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Lea Müller",
    role: "Gym-goer, Zurich",
  },
  {
    text: "YoungLA doesn't ship to Switzerland at all. Found Import2Me, placed my order, and it arrived in 6 days. All-in price shown upfront — no surprise at the door.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Fabian Sutter",
    role: "Fitness Enthusiast, Basel",
  },
  {
    text: "I used to ask my cousin in Germany to order Alphalete for me. Now I just paste the link into Import2Me and it shows up at my apartment in St. Gallen.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Nina Keller",
    role: "Pilates Instructor, St. Gallen",
  },
  {
    text: "The price shown is the price you pay. VAT, customs, everything included. I was so used to getting hit with extra fees — this was a completely different experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "Marco Bernasconi",
    role: "Personal Trainer, Bern",
  },
  {
    text: "Gymshark Switzerland charges CHF 85 for leggings that are €55 on the EU store. Import2Me got them to me for less. Actual no-brainer.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    name: "Sara Zimmermann",
    role: "CrossFit Athlete, Geneva",
  },
  {
    text: "Ordered a full Alphalete haul — three items — and the total with Import2Me was still cheaper than buying two of them locally. Wild.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    name: "Luca Fontana",
    role: "Weightlifter, Lausanne",
  },
  {
    text: "I follow YoungLA on Instagram and always felt like Switzerland was just excluded. Import2Me fixed that. I finally feel like I can shop like everyone else.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Anja Meier",
    role: "Gym Member, Winterthur",
  },
  {
    text: "Tried to forward a package myself using a German address once. It was a nightmare. Import2Me does in one click what took me two hours to figure out.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    name: "David Brunner",
    role: "Runner, Lucerne",
  },
  {
    text: "My Gymshark order came in five days, already cleared through customs, zero extra charges. I've already told everyone at my gym about it.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    name: "Timo Baumann",
    role: "Gym Regular, Zug",
  },
];
export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
