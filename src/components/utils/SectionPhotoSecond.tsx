import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
  ul: string[];
}

const SectionPhotoSecond = ({ img, head, subHead, ul }: PropsValue) => {
  return (
    <div className="anime-block home-block feature-block px-6 bg-grayer-100 dark:bg-darker-250 mb-[25px] rounded mt-36">
      <div className="content-container">
        <div className="feature-block__wrapper">
          <div className="flex items-center justify-end max992:justify-start flex-1">
            <article className="article article--features flex items-start flex-col text-right">
              <div className="mb-8">
                <div className="title title--hero sm">
                  <h2
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    {head}{" "}
                  </h2>
                  <p
                    className="anime-text opacity-0"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      width: "100%",
                    }}
                  >
                    {subHead}
                  </p>
                </div>

                <ul
                  className="list list--flat list--bullets mt-7 opacity-70"
                  style={{ lineHeight: "30px" }}
                >
                  {ul?.map((e) => (
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      {e}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </article>{" "}
          </div>
          <div
            className="anime-item opacity-0"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <Image decoding="async" className="block" src={img} alt="wallet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPhotoSecond;
