import { propsValues } from "@/interface/sectionRowPhoto";
import Image from "next/image";

const SpecialCard = (props: propsValues) => {
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
          <Image src={props.img} alt={`${props.img}`} />
        </i>
      </span>
      <article className="text-center">
        <h2 className="mb-3">{props.head}</h2>
        <p>{props.subHead} </p>
      </article>
    </div>
  );
};

export default SpecialCard;
