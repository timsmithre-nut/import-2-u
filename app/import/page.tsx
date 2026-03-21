"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ImportPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 w-full max-w-md">

        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />

        <Input
          type="url"
          placeholder="Enter product URL..."
          className="w-full bg-white/70 backdrop-blur-sm border-white/50 shadow-lg placeholder:text-gray-400 text-gray-800 rounded-xl h-12 px-4 text-base focus-visible:ring-purple-400"
        />

        <Card className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-xl">
          <CardContent className="py-4 px-5 text-sm text-gray-700 leading-relaxed">
            ⚠️ <span className="font-medium">Disclaimer:</span> You need to enter a valid product page. This webpage needs to be from a partner company.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
