"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "./ui/button";
import { Slot } from "@radix-ui/react-slot";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggler";

const navLinks = [
  { label: "Home", path: "/" },
  // { label: "About", path: "/about" },
  // { label: "Pricing", path: "/pricing" },
  // { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(""); // Use empty string as default
  const pathname = usePathname();

  // Use `useEffect` to set the current path after hydration
  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between container mx-auto max-w-screen-lg p-4 pt-7">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer ">
          {/* <Image
            src="/GogencyLogo.svg"
            alt="Logo Gogency"
            width={25}
            height={25}
          /> */}
          <h4 className="font-bold text-primary">Smart Fiber</h4>
          {/* <div className="h-full">
            <span className="text-lg h-full font-bold">Gogency</span>
          </div> */}
        </Link>

        {/* Desktop Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-2 hidden md:flex">
            {navLinks.map(({ label, path }) => (
              <NavigationMenuItem key={path}>
                <Link href={path} passHref>
                  <span
                    className={`px-3 py-2 rounded-sm ${
                      currentPath === path
                        ? "bg-primary/10 dark:bg-primary/10"
                        : "hover:bg-primary/10 dark:hover:bg-primary/10"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" onClick={() => setIsOpen(true)}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <SheetHeader>
                <SheetTitle className="px-3">Menu</SheetTitle>
              </SheetHeader>
              <div className="w-full mt-4">
                <div className="flex gap-2 flex-col w-full">
                  {navLinks.map(({ label, path }) => (
                    <nav key={path} className="w-full">
                      <Link href={path} passHref>
                        <span
                          className={`block px-3 py-2 rounded-sm ${
                            currentPath === path
                              ? "bg-primary/10 dark:bg-primary/10"
                              : "hover:bg-primary/10 dark:hover:bg-primary/10"
                          }`}
                          onClick={handleClose}
                        >
                          {label}
                        </span>
                      </Link>
                    </nav>
                  ))}
                  <Button className="mt-2">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Button className="hidden md:block">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
