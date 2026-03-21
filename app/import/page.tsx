"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImportHeader } from "@/components/ui/import-header";
import Image from "next/image";

type Step = "url" | 1 | 2 | 3;

export default function ImportPage() {
  const [step, setStep] = useState<Step>("url");
  const [url, setUrl] = useState("");

  function handleUrlSubmit() {
    if (url.trim()) setStep(1);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 flex flex-col">
      <ImportHeader />

      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-20">
        <div className="flex flex-col items-center gap-8 w-full max-w-md">

          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={64}
            className="h-16 w-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />

          {step === "url" && (
            <>
              <div className="flex w-full gap-2">
                <Input
                  type="url"
                  placeholder="Enter product URL..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                  className="flex-1 bg-white/70 backdrop-blur-sm border-white/50 shadow-lg placeholder:text-gray-400 text-gray-800 rounded-xl h-12 px-4 text-base focus-visible:ring-purple-400"
                />
                <Button
                  onClick={handleUrlSubmit}
                  className="h-12 px-5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg"
                >
                  Continue
                </Button>
              </div>

              <Card className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-xl">
                <CardContent className="py-4 px-5 text-sm text-gray-700 leading-relaxed">
                  ⚠️ <span className="font-medium">Disclaimer:</span> You need to enter a valid product page. This webpage needs to be from a partner company.
                </CardContent>
              </Card>
            </>
          )}

          {step === 1 && (
            <Card className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-xl">
              <CardContent className="py-6 px-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-800 font-semibold text-lg">Your details</h2>
                  <span className="text-sm text-gray-500 font-medium">1 of 3</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-sm font-medium">First Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="Jane" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Last Name</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 text-sm font-medium">Email</label>
                    <Input type="email" className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="jane@example.com" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 w-28">
                      <label className="text-gray-700 text-sm font-medium">Postcode</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="SW1A 1AA" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-gray-700 text-sm font-medium">Country</label>
                      <Input className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="United Kingdom" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 text-sm font-medium">Address</label>
                    <Input className="bg-white/70 border-white/60 rounded-lg focus-visible:ring-purple-400" placeholder="123 Example Street" />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 text-white mt-1"
                >
                  Confirm
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-xl">
              <CardContent className="py-6 px-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-800 font-semibold text-lg">Step 2</h2>
                  <span className="text-sm text-gray-500 font-medium">2 of 3</span>
                </div>
                <p className="text-gray-600 text-sm">Step 2 content coming soon.</p>
                <Button onClick={() => setStep(3)} className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 text-white">
                  Continue
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-xl">
              <CardContent className="py-6 px-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-800 font-semibold text-lg">Step 3</h2>
                  <span className="text-sm text-gray-500 font-medium">3 of 3</span>
                </div>
                <p className="text-gray-600 text-sm">Step 3 content coming soon.</p>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
}
