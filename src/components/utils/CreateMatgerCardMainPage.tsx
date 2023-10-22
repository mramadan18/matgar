import Link from "next/link";
import React from "react";

interface propsValues {
  head: string;
  btn: string;
  bg: string;
  p: string;
  txtColor: string;
  btnBg: string;
  btnTxtColor: string;
}
const CreateMatgerCardMainPage = (props: propsValues) => {
  return (
    <div id="call-to-action" className="anime-block call-to-action mb-10">
      <div className="content-container">
        <div
          className="rounded-xl subscribe-widget anime-item flex md:flex-row flex-col"
          style={{ backgroundColor: props.bg }}
        >
          <article className="flex flex-col justify-center items-end text-right">
            <h2
              className="w-full mb-4"
              style={{
                color: props.txtColor,
              }}
            >
              {props.head}
            </h2>
            <p
              className="w-full"
              style={{
                color: props.txtColor,
              }}
            >
              {props.p}
            </p>
          </article>
          <Link
            href="https://s.salla.sa/register"
            target="_blank"
            className="rounded-xl w-44 h-14 flex justify-center items-center"
            style={{ backgroundColor: props.btnBg, color: props.btnTxtColor }}
            rel="nofollow noopener"
          >
            <span>{props.btn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMatgerCardMainPage;
