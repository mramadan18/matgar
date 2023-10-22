import { propsValues } from "@/interface/sectionRowPhoto";
import Image from "next/image";

const SpecailCard2 = (props: propsValues) => {
  return (
    <a
      href="#"
      className="grid grid-cols-[60px_1fr] gap-4 p-4"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,.2)",
      }}
    >
      <span className="border border-primary h-20 md:h-14">
        <Image src={props.img} alt="store-photo" className="w-full h-full " />
      </span>
      <article>
        <h2> {props.head}</h2>
        <p>{props.subHead}</p>
      </article>
    </a>
  );
};

export default SpecailCard2;
