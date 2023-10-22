import { propsValues } from "@/interface/sectionRowPhoto";
import Image from "next/image";
import React from "react";

const SectionPhotoFirst = (props: propsValues) => {
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
              src={props.img}
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
                    {props.head}{" "}
                  </h2>
                  <p
                    className="anime-text opacity-0"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      width: "100%",
                    }}
                  >
                    {props.subHead}
                  </p>
                  <ul
                    className="list list--flat list--bullets mt-7 opacity-70"
                    style={{ lineHeight: "40px" }}
                  >
                    {props.ul?.map((e) => (
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
