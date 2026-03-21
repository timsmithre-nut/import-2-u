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
                  {item.href ? (
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost" className="text-gray-800 hover:bg-white/30">{item.title}</Button>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm text-gray-800 bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[320px] p-4">
                        <div className="flex flex-col gap-2">
                          <p className="text-base font-medium">{item.title}</p>
                          <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                          <div className="flex flex-col text-sm">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
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
              src="/logo.svg"
              alt="Logo"
              width={160}
              height={52}
              className="h-13 w-auto object-contain"
              priority
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </Link>
        </div>

        {/* Right: Sign up + Account */}
        <div className="flex justify-end w-full gap-3">
          <Button variant="outline" className="hidden md:inline-flex bg-white/40 border-white/50 text-gray-800 hover:bg-white/60">
            Sign up
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
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
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg text-gray-800">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg text-gray-800">{item.title}</p>
                    )}
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-muted-foreground">{subItem.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1" />
                      </Link>
                    ))}
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
