"use client";
import React, { useEffect, useState } from "react";
import { createSpring, utils, createTimeline, waapi, animate, svg } from "animejs";
import SVGLogo from "./c19svg";

const Hero: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // md breakpoint
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // do nothing on mobile

    utils.set([".security-icon"], { opacity: 1 });

    const symbolAnimation = waapi.animate(".security-icon", { x: 380, reversed: true });
    const traceFont = animate(svg.createDrawable(".line"), {
      draw: ["0 0", "0 1"],
      ease: "inOutQuad",
      forward: true,
      duration: 3000,
      background: "#FF4B4B",
    });
    const logoText = waapi.animate(".logo-text", {
      color: "#fff",
      duration: 1000,
      ease: "inOutQuad",
      fillOpacity: 1,
      strokeOpacity: [1, 0],
    });

    const tl = createTimeline({});
    tl.add(".security-icon", {
      translateY: { to: [-280, 0], ease: createSpring({ stiffness: 200 }), duration: 4000 },
      ease: "inOutQuad",
    })
      .sync(symbolAnimation, 315)
      .sync(traceFont, 1000)
      .sync(logoText, 2000);
  }, [isDesktop]);

  if (!isDesktop) return null; // hide component entirely on mobile

  return (
    <section className="md:block" style={{ padding: "2rem" }}>
      <div>
        <SVGLogo />
      </div>
    </section>
  );
};

export default Hero;
