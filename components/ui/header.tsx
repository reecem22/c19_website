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
import { ThemeProvider } from "@/components/theme-provider";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <ThemeProvider>
      <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="relative flex h-14 items-center justify-between gap-3 rounded-lg px-3
  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent
  before:[background:linear-gradient(to_right,var(--citadel-orange),var(--color-rose-700),var(--color-rose-800))_border-box]
  before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
  after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs"
          >
            {/* Site branding */}

            <div className="flex flex-1 items-center">
              <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                <Logo />
                <NavigationMenu className="flex justify-start items-start">
                  <NavigationMenuList className="flex justify-start gap-4 flex-row">
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.href ? (
                          <>
                            <NavigationMenuLink>
                              <Button variant="ghost">{item.title}</Button>
                            </NavigationMenuLink>
                          </>
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

              <div className="flex w-12 shrink lg:hidden items-end justify-end">
                <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
                {isOpen && (
                  <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-8 container gap-8">
                    {navigationItems.map((item) => (
                      <div key={item.title}>
                        <div className="flex flex-col gap-2">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="flex justify-between items-center"
                            >
                              <span className="text-lg">{item.title}</span>
                              <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                            </Link>
                          ) : (
                            <p className="text-lg mx-2">{item.title}</p>
                          )}
                          {item.items &&
                            item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex justify-between items-center mx-2"
                              >
                                <span className="text-muted-foreground">
                                  {subItem.title}
                                </span>
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
            <div className="flex justify-end w-full gap-4">
              <Button variant="ghost" className="hidden md:inline">
                Get in touch
              </Button>
              <div className="border-r hidden md:inline"></div>
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex h-14 items-center justify-stretch rounded-2xl">
 
            <div className="flex lg:justify-center">
              <p className="font-semibold">CITADEL 19 logo</p>
            </div>
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
              <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                <NavigationMenu className="flex justify-start items-start">
                  <NavigationMenuList className="flex justify-start gap-4 flex-row">
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.href ? (
                          <>
                            <NavigationMenuLink>
                              <Button variant="ghost">{item.title}</Button>
                            </NavigationMenuLink>
                          </>
                        ) : (
                          <>
                            <NavigationMenuTrigger className="font-medium text-sm">
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

              <div className="flex justify-end w-full gap-4">
                <Button variant="ghost" className="hidden md:inline">
                  Get in touch
                </Button>
                <div className="border-r hidden md:inline"></div>
                <Button>Get started</Button>
              </div>
              <div className="flex w-12 shrink lg:hidden items-end justify-end">
                <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
                {isOpen && (
                  <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                    {navigationItems.map((item) => (
                      <div key={item.title}>
                        <div className="flex flex-col gap-2">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="flex justify-between items-center"
                            >
                              <span className="text-lg">{item.title}</span>
                              <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                            </Link>
                          ) : (
                            <p className="text-lg">{item.title}</p>
                          )}
                          {item.items &&
                            item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex justify-between items-center"
                              >
                                <span className="text-muted-foreground">
                                  {subItem.title}
                                </span>
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
          </div>
        </div>
      </header> */}
    </ThemeProvider>
  );
};
