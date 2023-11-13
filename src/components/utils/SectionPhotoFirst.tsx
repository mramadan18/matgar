import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
  ul?: string[];
}

const SectionPhotoFirst = ({ img, head, subHead, ul }: PropsValue) => {
  return (
    <div className="anime-block home-block feature-block bg-white dark:bg-darker-200 end my-[25px]">
      <div className="content-container">
        <div className="feature-block__wrapper second">
          <div
            className="anime-item opacity-0"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <Image
              decoding="async"
              className="block"
              src={img}
              alt="marketing"
            />
          </div>
          <div className="flex items-center justify-start flex-1">
            <article className="article article--features flex items-start flex-col text-right justify-start">
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
                  <ul
                    className="list list--flat list--bullets mt-7 opacity-70"
                    style={{ lineHeight: "40px" }}
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
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPhotoFirst;
