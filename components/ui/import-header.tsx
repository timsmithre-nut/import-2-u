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

function ImportHeader() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white/30 backdrop-blur-md border-b border-white/20">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">

        {/* Left: nav links */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.title === "Home" ? (
                    <NavigationMenuLink href={item.href!}>
                      <Button variant="ghost" className="text-gray-800 hover:bg-white/30">{item.title}</Button>
                    </NavigationMenuLink>
                  ) : item.href ? (
                    <Button variant="ghost" disabled className="text-gray-400 cursor-default opacity-50">{item.title}</Button>
                  ) : (
                    <Button variant="ghost" disabled className="text-gray-400 cursor-default opacity-50">{item.title}</Button>
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
          <Button variant="outline" disabled className="hidden md:inline-flex bg-white/40 border-white/50 text-gray-400 opacity-50 cursor-default">
            Sign up
          </Button>
          <Button disabled className="text-white opacity-50 cursor-default" style={{backgroundColor:"#f01e2c"}}>
            Account
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t border-white/20 flex flex-col w-full right-0 bg-white/80 backdrop-blur-md shadow-lg py-4 container gap-6">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.title === "Home" ? (
                      <Link
                        href={item.href!}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg text-gray-800">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg text-gray-400 opacity-50">{item.title}</p>
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
