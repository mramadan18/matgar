import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
}

const SpecailCard2 = ({ img, head, subHead }: PropsValue) => {
  return (
    <a
      href="#"
      className="grid grid-cols-[60px_1fr] gap-4 p-4"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,.2)",
      }}
    >
      <span className="border border-primary h-20 md:h-14">
        <Image src={img} alt="store-photo" className="w-full h-full " />
      </span>
      <article>
        <h2> {head}</h2>
        <p>{subHead}</p>
      </article>
    </a>
  );
};

export default SpecailCard2;
