"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
}

export default function HeroImage({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
}: ModalVideoProps) {

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail */}

        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="opacity-50 grayscale"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        {/* Play icon */}

   
      {/* End: Video thumbnail */}

    </div>
  );
}