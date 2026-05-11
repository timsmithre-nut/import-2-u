"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigationItems = [
  {
    title: "Home",
    href: "/",
    description: "",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "",
  },
  {
    title: "Company",
    description: "Learn more about who we are and what we do.",
    items: [
      { title: "About us", href: "/about" },
      { title: "Investors", href: "/investors" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];

function ImportHeader({ variant = "cinematic" }: { variant?: "cinematic" | "soft" }) {
  const [isOpen, setOpen] = useState(false);
  const isSoft = variant === "soft";
  const headerClass =
    isSoft
      ? "w-full z-40 fixed top-0 left-0 border-b border-white/[0.35] bg-white/[0.72] shadow-[0_12px_34px_rgba(154,38,50,0.08)] backdrop-blur-[16px]"
      : "w-full z-40 fixed top-0 left-0 border-b border-white/[0.06] bg-[rgba(15,15,15,0.75)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[14px]";
  const activeLinkClass = isSoft
    ? "text-gray-900 transition-colors hover:bg-white/60 hover:text-[#f01e2c]"
    : "text-[#F5F5F5] transition-colors hover:bg-white/10 hover:text-white";
  const mutedLinkClass = isSoft
    ? "text-sm font-medium text-gray-500 opacity-80 px-4 py-2 pointer-events-none select-none"
    : "text-sm font-medium text-[#A1A1AA] opacity-70 px-4 py-2 pointer-events-none select-none";
  const signUpClass = isSoft
    ? "hidden md:inline-flex items-center px-4 py-2 rounded-md border border-white/70 bg-white/45 text-gray-600 text-sm font-medium opacity-90 pointer-events-none select-none shadow-sm"
    : "hidden md:inline-flex items-center px-4 py-2 rounded-md border border-white/12 bg-white/[0.06] text-[#A1A1AA] text-sm font-medium opacity-80 pointer-events-none select-none";
  const menuButtonClass = isSoft
    ? "text-gray-900 hover:bg-white/60 hover:text-[#f01e2c]"
    : "text-[#F5F5F5] hover:bg-white/10 hover:text-white";
  const mobileMenuClass = isSoft
    ? "absolute top-20 border-t border-white/[0.35] flex flex-col w-full right-0 bg-white/[0.86] shadow-lg backdrop-blur-[16px] py-4 container gap-6"
    : "absolute top-20 border-t border-white/[0.06] flex flex-col w-full right-0 bg-[rgba(15,15,15,0.92)] shadow-lg backdrop-blur-[14px] py-4 container gap-6";
  const mobileActiveClass = isSoft ? "text-lg text-gray-900" : "text-lg text-[#F5F5F5]";
  const mobileMutedClass = isSoft ? "text-lg text-gray-500 opacity-80" : "text-lg text-[#A1A1AA] opacity-70";
  const mobileIconClass = isSoft ? "w-4 h-4 stroke-1 text-gray-500" : "w-4 h-4 stroke-1 text-[#A1A1AA]";

  return (
    <header className={headerClass}>
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">

        {/* Left: nav links */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.title === "Home" ? (
                    <NavigationMenuLink href={item.href!}>
                      <Button variant="ghost" className={activeLinkClass}>{item.title}</Button>
                    </NavigationMenuLink>
                  ) : (
                    <span className={mutedLinkClass}>{item.title}</span>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center: logo */}
        <div className="flex lg:justify-center">
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={500}
              height={200}
              className="h-13 w-auto object-contain"
              priority
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </Link>
        </div>

        {/* Right: Sign up + Account */}
        <div className="flex justify-end w-full gap-3">
          <span className={signUpClass}>
            Sign up
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-md text-white text-sm font-medium opacity-90 pointer-events-none select-none shadow-[0_8px_24px_rgba(240,30,44,0.28)]" style={{backgroundColor:"#f01e2c"}}>
            Account
          </span>
        </div>

        {/* Mobile hamburger */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} className={menuButtonClass}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className={mobileMenuClass}>
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.title === "Home" ? (
                      <Link
                        href={item.href!}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className={mobileActiveClass}>{item.title}</span>
                        <MoveRight className={mobileIconClass} />
                      </Link>
                    ) : (
                      <p className={mobileMutedClass}>{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export { ImportHeader };
