"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImportHeader } from "@/components/ui/import-header";
import Image from "next/image";
import { Check } from "lucide-react";

const STEPS = ["URL", "Price", "Info", "Import"] as const;
type StepIndex = 0 | 1 | 2 | 3;

const PAYMENT_METHODS = [
  { label: "PayPal",      bg: "bg-[#003087]", text: "text-[#009cde]", font: "font-extrabold italic" },
  { label: "Mastercard",  bg: "bg-[#eb001b]", text: "text-white",      font: "font-bold" },
  { label: "Visa",        bg: "bg-[#1a1f71]", text: "text-white",      font: "font-extrabold italic" },
  { label: "Maestro",     bg: "bg-[#0099df]", text: "text-white",      font: "font-bold" },
  { label: "Apple Pay",   bg: "bg-black",      text: "text-white",      font: "font-semibold" },
  { label: "Amazon Pay",  bg: "bg-[#ff9900]", text: "text-[#232f3e]",  font: "font-bold" },
  { label: "Google Pay",  bg: "bg-white",      text: "text-gray-700",   font: "font-semibold" },
  { label: "Stripe",      bg: "bg-[#635bff]", text: "text-white",      font: "font-bold" },
];

function Stepper({ current }: { current: StepIndex }) {
  return (
    <div className="flex items-center w-full px-2 mb-6">
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
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                  done   ? "bg-purple-500 text-white"                     : "",
                  active ? "border-2 border-purple-500 text-purple-600 bg-white/60" : "",
                  !done && !active ? "border-2 border-gray-300 text-gray-400 bg-white/40" : "",
                ].join(" ")}
              >
                {done ? <Check className="w-4 h-4 stroke-[3]" /> : <span>{i + 1}</span>}
              </div>
              <span
                className={[
                  "text-[11px] font-medium leading-none",
                  active ? "text-purple-600" : done ? "text-purple-400" : "text-gray-400",
                ].join(" ")}
              >
                {label}
              </span>
            </div>

            {/* connector line */}
            {!last && (
              <div className="flex-1 mx-2 mb-4">
                <div className={["h-0.5 w-full rounded-full transition-colors", i < current ? "bg-purple-400" : "bg-gray-200"].join(" ")} />
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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 flex flex-col">
      <ImportHeader />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">

          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={64}
            className="h-14 w-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />

          {/* single card */}
          <div className="w-full bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl overflow-hidden">

            {/* card body */}
            <div className="px-6 pt-6 pb-0">
              <Stepper current={step} />
            </div>

            {/* ── Step 1: URL ── */}
            {step === 0 && (
              <div className="px-6 pb-6 flex flex-col gap-4">
                <h2 className="text-gray-800 font-semibold text-base">Enter the product URL</h2>

                <div className="flex gap-2">
                  <Input
                    type="url"
                    placeholder="https://example.com/product"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && url.trim() && setStep(1)}
                    className="flex-1 bg-white/70 border-white/60 rounded-xl h-11 px-4 text-sm placeholder:text-gray-400 focus-visible:ring-purple-400"
                  />
                  <Button
                    onClick={() => url.trim() && setStep(1)}
                    className="h-11 px-5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    Continue
                  </Button>
                </div>

                <div className="bg-white/30 rounded-xl px-4 py-3 text-sm text-gray-600 leading-relaxed">
                  ⚠️ <span className="font-medium text-gray-700">Disclaimer:</span> You need to enter a valid product page. This webpage needs to be from a partner company.
                </div>
              </div>
            )}

            {/* ── Step 2: Price ── */}
            {step === 1 && (
              <div className="px-6 pb-6 flex flex-col gap-4">
                <h2 className="text-gray-800 font-semibold text-base text-center">Our Offer</h2>

                <div className="flex flex-col gap-3 bg-white/30 rounded-xl px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Original Price</span>
                    <span className="text-gray-800 font-bold">CHF {originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Our fee (15%)</span>
                    <span className="text-gray-800 font-bold">CHF {fee.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-white/60" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm font-semibold">Total</span>
                    <span className="text-gray-900 font-bold text-base">CHF {total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Accept
                </Button>
              </div>
            )}

            {/* ── Step 3: Info ── */}
            {step === 2 && (
              <div className="px-6 pb-6 flex flex-col gap-4">
                <h2 className="text-gray-800 font-semibold text-base">Your details</h2>

                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-xs font-medium">First Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="Jane" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-xs font-medium">Last Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 text-xs font-medium">Email</label>
                    <Input type="email" className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="jane@example.com" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 w-28">
                      <label className="text-gray-700 text-xs font-medium">Postcode</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="SW1A 1AA" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-xs font-medium">Country</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="United Kingdom" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 text-xs font-medium">Address</label>
                    <Input className="bg-white/70 border-white/60 rounded-lg h-10 text-sm focus-visible:ring-purple-400" placeholder="123 Example Street" />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(3)}
                  className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Confirm
                </Button>
              </div>
            )}

            {/* ── Step 4: Import ── */}
            {step === 3 && (
              <div className="flex flex-col">
                <div className="px-6 pb-5 flex flex-col gap-4">
                  <h2 className="text-gray-800 font-semibold text-base text-center">Add payment method</h2>

                  <div className="grid grid-cols-4 gap-2">
                    {PAYMENT_METHODS.map(({ label, bg, text, font }) => (
                      <button
                        key={label}
                        className={`${bg} ${text} ${font} rounded-xl h-14 flex items-center justify-center text-[11px] text-center px-1 leading-tight shadow-sm hover:opacity-90 active:scale-95 transition-all`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <Button className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 text-white">
                    Pay
                  </Button>
                </div>

                <div className="bg-red-600 py-3 px-5 text-white text-sm font-medium text-center">
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
