"use client";

import { useEffect } from "react";

import AOS from "aos";
import Footer from "@/components/ui/footer";
import "aos/dist/aos.css";



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col mt">{children}</main>


       <Footer />
    </>
  );
}
