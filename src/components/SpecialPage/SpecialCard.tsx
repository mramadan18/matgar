import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
}

const SpecialCard = ({ img, head, subHead }: PropsValue) => {
  return (
    <div
      data-aos="zoom-out-up"
      className="card-entry card-entry--relaxed vertical dark anime-item !bg-primary !text-white"
      style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
      }}
    >
      <span className="anime-item ard-entry__icon">
        <i className="sicon-store">
          <Image src={img} alt={`${img}`} />
        </i>
      </span>
      <article className="text-center">
        <h2 className="mb-3">{head}</h2>
        <p>{subHead} </p>
      </article>
    </div>
  );
};

export default SpecialCard;
