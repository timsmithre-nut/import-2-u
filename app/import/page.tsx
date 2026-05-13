"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImportHeader } from "@/components/ui/import-header";
import { Testimonials } from "@/components/ui/testimonials-columns-1";
import { Check } from "lucide-react";

const STEPS = ["URL", "Price", "Info", "Import"] as const;
type StepIndex = 0 | 1 | 2 | 3;

const PAYMENT_METHODS = [
  { label: "PayPal",      bg: "bg-[#003087]", src: "/paypal-svgrepo-com.svg" },
  { label: "Mastercard",  bg: "bg-[#eb001b]", src: "/mastercard-full-svgrepo-com.svg" },
  { label: "Visa",        bg: "bg-[#1a1f71]", src: "/visa-3-svgrepo-com.svg" },
  { label: "Maestro",     bg: "bg-[#0099df]", src: "/maestro-svgrepo-com.svg" },
  { label: "Apple Pay",   bg: "bg-black",      src: "/apple-pay-svgrepo-com.svg" },
  { label: "Amazon Pay",  bg: "bg-[#ff9900]", src: "/amazon-pay-svgrepo-com.svg" },
  { label: "Google Pay",  bg: "bg-white",      src: "/google-pay-svgrepo-com.svg" },
  { label: "Stripe",      bg: "bg-[#635bff]", src: "/stripe-svgrepo-com.svg" },
];

function Stepper({ current }: { current: StepIndex }) {
  return (
    <div className="flex items-center w-full px-2 mb-8">
      {STEPS.map((label, i) => {
        const done    = i < current;
        const active  = i === current;
        const last    = i === STEPS.length - 1;

        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            {/* circle */}
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <div
                className={[
                  "w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold transition-colors",
                  done   ? "bg-[#f01e2c] text-white"                     : "",
                  active ? "border-2 border-[#f01e2c] text-[#f01e2c] bg-white/60" : "",
                  !done && !active ? "border-2 border-gray-300 text-gray-400 bg-white/40" : "",
                ].join(" ")}
              >
                {done ? <Check className="w-5 h-5 stroke-[3]" /> : <span>{i + 1}</span>}
              </div>
              <span
                className={[
                  "text-xs font-medium leading-none",
                  active ? "text-[#f01e2c]" : done ? "text-[#f01e2c]/70" : "text-gray-400",
                ].join(" ")}
              >
                {label}
              </span>
            </div>

            {/* connector line */}
            {!last && (
              <div className="flex-1 mx-2 mb-4">
                <div className={["h-0.5 w-full rounded-full transition-colors", i < current ? "bg-[#f01e2c]/70" : "bg-gray-200"].join(" ")} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ImportPage() {
  const [step, setStep]   = useState<StepIndex>(0);
  const [url,  setUrl]    = useState("");

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#FFF7F7]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,247,247,0.9)_34%,rgba(255,223,228,0.42)_68%,rgba(240,30,44,0.1)_100%)]" />
      <div className="import-ambient-gradient pointer-events-none absolute -inset-x-24 top-0 h-[62vh] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(240,30,44,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.72),rgba(255,255,255,0.18)_42%,rgba(255,255,255,0.52))]" />
      <ImportHeader variant="soft" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-28 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">

          {/* single card */}
          <div className="w-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_28px_90px_rgba(154,38,50,0.16)] backdrop-blur-xl ring-1 ring-white/45">

            {/* card body */}
            <div className="px-5 pt-8 pb-0 sm:px-10 sm:pt-10">
              <Stepper current={step} />
            </div>

            {/* ── Step 1: URL ── */}
            {step === 0 && (
              <div className="flex flex-col gap-5 px-5 pb-8 sm:px-10 sm:pb-10">
                <h2 className="text-gray-800 font-semibold text-lg">Enter the product URL</h2>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="url"
                    placeholder="https://example.com/product"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && url.trim() && setStep(1)}
                    className="h-12 flex-1 rounded-xl border-white/70 bg-white/80 px-4 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus-visible:ring-[#f01e2c]"
                  />
                  <Button
                    onClick={() => url.trim() && setStep(1)}
                    className="h-12 w-full rounded-xl bg-[#f01e2c] px-6 text-base text-white shadow-lg shadow-[#f01e2c]/20 hover:bg-[#c8121f] sm:w-auto"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 2: Price ── */}
            {step === 1 && (
              <div className="flex flex-col gap-5 px-5 pb-8 sm:px-10 sm:pb-10">
                <h2 className="text-gray-800 font-semibold text-xl text-center">Our Offer</h2>

                <div className="flex flex-col gap-4 rounded-xl border border-white/60 bg-white/55 px-6 py-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-base line-through">Do it yourself (MyUS + customs + stress)</span>
                    <span className="text-gray-800 font-bold text-base line-through">CHF 185.00</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-base">Our offer</span>
                    <span className="text-gray-800 font-bold text-base">CHF 135.70</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-base font-semibold">You save</span>
                    <span className="text-gray-900 font-bold text-lg">CHF 49.30</span>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="h-12 w-full rounded-xl bg-[#f01e2c] text-base text-white shadow-lg shadow-[#f01e2c]/20 hover:bg-[#c8121f]"
                >
                  Accept
                </Button>
              </div>
            )}

            {/* ── Step 3: Info ── */}
            {step === 2 && (
              <div className="flex flex-col gap-5 px-5 pb-8 sm:px-10 sm:pb-10">
                <h2 className="text-gray-800 font-semibold text-lg">Your details</h2>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">First Name</label>
                      <Input className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="Jane" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Last Name</label>
                      <Input className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium">Email</label>
                    <Input type="email" className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="jane@example.com" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-col gap-2 sm:w-36">
                      <label className="text-gray-700 text-sm font-medium">Postcode</label>
                      <Input className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="SW1A 1AA" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Country</label>
                      <Input className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="United Kingdom" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium">Address</label>
                    <Input className="h-11 rounded-lg border-white/70 bg-white/80 text-base text-gray-900 shadow-sm focus-visible:ring-[#f01e2c]" placeholder="123 Example Street" />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(3)}
                  className="h-12 w-full rounded-xl bg-[#f01e2c] text-base text-white shadow-lg shadow-[#f01e2c]/20 hover:bg-[#c8121f]"
                >
                  Confirm
                </Button>
              </div>
            )}

            {/* ── Step 4: Import ── */}
            {step === 3 && (
              <div className="flex flex-col">
                <div className="flex flex-col gap-5 px-5 pb-6 sm:px-10">
                  <h2 className="text-gray-800 font-semibold text-lg text-center">Add payment method</h2>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {PAYMENT_METHODS.map(({ label, bg, src }) => (
                      <button
                        key={label}
                        className={`${bg} rounded-xl h-16 flex items-center justify-center px-2 shadow-sm hover:opacity-90 active:scale-95 transition-all`}
                      >
                        <img src={src} alt={label} className="h-8 w-auto object-contain" />
                      </button>
                    ))}
                  </div>

                  <Button className="h-12 w-full rounded-xl bg-[#f01e2c] text-base text-white shadow-lg shadow-[#f01e2c]/20 hover:bg-[#c8121f]">
                    Pay
                  </Button>
                </div>

                <div className="bg-[#f01e2c] py-4 px-5 text-white text-base font-medium text-center">
                  Thank you for your order!
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-8 pb-16">
        <Testimonials />
      </div>
    </div>
  );
}
