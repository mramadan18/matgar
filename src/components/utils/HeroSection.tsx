import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface propsValues {
  head: string;
  subHead: string;
  img: string | StaticImport;
}
const HeroSection = (props: propsValues) => {
  return (
    <div className="content-container p-0">
      <div className="flex items-center flex-col justify-center">
        <div className="title title--hero w-full center mb-8">
          <h2
            className="hero-anime-item opacity-0"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            {props.head}{" "}
          </h2>
          <p
            className="hero-anime-item opacity-0 !text-primary"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            {props.subHead}
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full mb-12">
          <a
            href="https://s.salla.sa/register"
            target="_blank"
            aria-label="أنشئ متجرك مجاناَ"
            className="btn btn--primary  hero-anime-item opacity-0"
            rel="nofollow noopener"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span>أنشئ متجرك مجاناَ </span>
          </a>
        </div>
        <div
          className="gfx-wrapper hero-anime-item opacity-0 w-full"
          style={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <Image
            src={props.img}
            alt={`${props.img}`}
            className="block mx-auto hero-anime-item opacity-0"
            decoding="async"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
