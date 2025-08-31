"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MoveRight, X } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "./logo";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const navigationItems = [
    { title: "Home", href: "/", description: "" },
    {
      title: "Services",
      description: "Managing a small business today is already tough.",
      items: [
        { title: "Data Analysis", href: "/reports" },
        { title: "Cloud Solutions", href: "/statistics" },
        { title: "Web Development", href: "/dashboards" },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        { title: "About us", href: "/about" },
        { title: "Blog", href: "/fundraising" },
        { title: "Contact us", href: "/contact" },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);

  // Close on Esc & lock scroll when menu is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ThemeProvider>
      <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
<div
  className="relative flex h-14 items-center justify-between gap-3
             rounded-lg g px-3
             before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent
             before:[background:linear-gradient(to_right,var(--citadel-orange),var(--color-rose-700),var(--color-rose-800))_border-box]
             before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
             after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs"
>
            {/* Left: branding + desktop nav */}
            <div className="flex flex-1 items-center">
              {/* Desktop (lg+) */}
              <div className="hidden lg:flex items-center gap-4">
                <Logo />
                <NavigationMenu className="flex items-center">
                  <NavigationMenuList>
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.href ? (
                          <NavigationMenuLink asChild>
                            <Link href={item.href}>
                              <Button variant="ghost">{item.title}</Button>
                            </Link>
                          </NavigationMenuLink>
                        ) : (
                          <>
                            <NavigationMenuTrigger className="font-medium text-sm bg-transparent">
                              {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="!w-[450px] p-4">
                              <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                <div className="flex flex-col h-full justify-between">
                                  <div className="flex flex-col">
                                    <p className="text-base">{item.title}</p>
                                    <p className="text-muted-foreground text-sm">
                                      {item.description}
                                    </p>
                                  </div>
                                  <Button size="sm" className="mt-10">
                                    Book a call today
                                  </Button>
                                </div>
                                <div className="flex flex-col text-sm h-full justify-end">
                                  {item.items?.map((sub) => (
                                    <NavigationMenuLink
                                      asChild
                                      key={sub.title}
                                    >
                                      <Link
                                        href={sub.href}
                                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                      >
                                        <span>{sub.title}</span>
                                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                                      </Link>
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

              {/* Mobile: menu button */}
              <div className="lg:hidden ml-auto">
                <Button
                  variant="ghost"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Right actions */}
            <div className="hidden md:flex justify-end w-full gap-4">
              <Button variant="ghost">Get in touch</Button>
              <div className="border-r" />
              <Button>Login</Button>
            </div>

            {/* Mobile floating menu (overlay + card) */}
            {isOpen && (
              <>
                {/* Overlay */}
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />

                {/* Card */}
                <div
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                className="fixed z-50 lg:hidden left-4 right-4 top-20
          rounded-2xl border bg-background shadow-xl
             ring-1 ring-border/50 overflow-hidden"
                >
                  <div
                    className="flex flex-col gap-6 p-6
                               animate-in fade-in zoom-in-95 duration-150
                               [--tw-enter-opacity:0] [--tw-enter-scale:0.98]"
                  >
                    {navigationItems.map((item) => (
                      <div key={item.title} className="space-y-2">
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between text-lg"
                          >
                            <span>{item.title}</span>
                            <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                          </Link>
                        ) : (
                          <p className="text-lg">{item.title}</p>
                        )}

                        {item.items?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-muted"
                          >
                            <span className="text-muted-foreground">{sub.title}</span>
                            <MoveRight className="h-4 w-4 stroke-1" />
                          </Link>
                        ))}
                      </div>
                    ))}

                    {/* Mobile-only actions */}
                    <div className="mt-2 flex gap-3">
                      <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
                        Get in touch
                      </Button>
                      <Button className="flex-1" onClick={() => setOpen(false)}>
                        Login
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
};
