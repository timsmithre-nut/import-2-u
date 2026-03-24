"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImportHeader } from "@/components/ui/import-header";
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
  const [originalPrice]   = useState(() => parseFloat((Math.random() * 480 + 20).toFixed(2)));

  const fee   = parseFloat((originalPrice * 0.15).toFixed(2));
  const total = parseFloat((originalPrice + fee).toFixed(2));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-red-100 to-red-400 flex flex-col">
      <ImportHeader />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-6">
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">

          {/* single card */}
          <div className="w-full bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl overflow-hidden">

            {/* card body */}
            <div className="px-10 pt-10 pb-0">
              <Stepper current={step} />
            </div>

            {/* ── Step 1: URL ── */}
            {step === 0 && (
              <div className="px-10 pb-10 flex flex-col gap-5">
                <h2 className="text-gray-800 font-semibold text-lg">Enter the product URL</h2>

                <div className="flex gap-3">
                  <Input
                    type="url"
                    placeholder="https://example.com/product"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && url.trim() && setStep(1)}
                    className="flex-1 bg-white/70 border-white/60 rounded-xl h-12 px-4 text-base placeholder:text-gray-400 focus-visible:ring-[#f01e2c]"
                  />
                  <Button
                    onClick={() => url.trim() && setStep(1)}
                    className="h-12 px-6 rounded-xl bg-[#f01e2c] hover:bg-[#c8121f] text-white text-base"
                  >
                    Continue
                  </Button>
                </div>

                <div className="bg-white/30 rounded-xl px-5 py-4 text-base text-gray-600 leading-relaxed">
                  ⚠️ <span className="font-medium text-gray-700">Disclaimer:</span> You need to enter a valid product page. This webpage needs to be from a partner company.
                </div>
              </div>
            )}

            {/* ── Step 2: Price ── */}
            {step === 1 && (
              <div className="px-10 pb-10 flex flex-col gap-5">
                <h2 className="text-gray-800 font-semibold text-xl text-center">Our Offer</h2>

                <div className="flex flex-col gap-4 bg-white/30 rounded-xl px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-base">Original Price</span>
                    <span className="text-gray-800 font-bold text-base">CHF {originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-base">Our fee (15%)</span>
                    <span className="text-gray-800 font-bold text-base">CHF {fee.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-base font-semibold">Total</span>
                    <span className="text-gray-900 font-bold text-lg">CHF {total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full h-12 rounded-xl bg-[#f01e2c] hover:bg-[#c8121f] text-white text-base"
                >
                  Accept
                </Button>
              </div>
            )}

            {/* ── Step 3: Info ── */}
            {step === 2 && (
              <div className="px-10 pb-10 flex flex-col gap-5">
                <h2 className="text-gray-800 font-semibold text-lg">Your details</h2>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">First Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="Jane" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Last Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium">Email</label>
                    <Input type="email" className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="jane@example.com" />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 w-36">
                      <label className="text-gray-700 text-sm font-medium">Postcode</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="SW1A 1AA" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Country</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="United Kingdom" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium">Address</label>
                    <Input className="bg-white/70 border-white/60 rounded-lg h-11 text-base focus-visible:ring-[#f01e2c]" placeholder="123 Example Street" />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(3)}
                  className="w-full h-12 rounded-xl bg-[#f01e2c] hover:bg-[#c8121f] text-white text-base"
                >
                  Confirm
                </Button>
              </div>
            )}

            {/* ── Step 4: Import ── */}
            {step === 3 && (
              <div className="flex flex-col">
                <div className="px-10 pb-6 flex flex-col gap-5">
                  <h2 className="text-gray-800 font-semibold text-lg text-center">Add payment method</h2>

                  <div className="grid grid-cols-4 gap-3">
                    {PAYMENT_METHODS.map(({ label, bg, src }) => (
                      <button
                        key={label}
                        className={`${bg} rounded-xl h-16 flex items-center justify-center px-2 shadow-sm hover:opacity-90 active:scale-95 transition-all`}
                      >
                        <img src={src} alt={label} className="h-8 w-auto object-contain" />
                      </button>
                    ))}
                  </div>

                  <Button className="w-full h-12 rounded-xl bg-[#f01e2c] hover:bg-[#c8121f] text-white text-base">
                    Pay
                  </Button>
                </div>

                <div className="bg-red-600 py-4 px-5 text-white text-base font-medium text-center">
                  We do not offer Refunds
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
