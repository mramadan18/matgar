import Image from "next/image";
import stars from "#/admin_images/icons/stars.svg";

type Props = {
  image: any;
  count: string;
  title: string;
  rating?: boolean;
  active: boolean;
  handleClick: any;
};

const ChooseContent = ({
  image,
  count,
  title,
  rating,
  active,
  handleClick,
}: Props) => {
  return (
    <div
      className={`p-10 cursor-pointer ${
        active ? "bg-primary-900 text-white" : "bg-admin_bg"
      } flex items-center gap-4 w-96`}
      onClick={handleClick}
    >
      <div className="w-20 h-20 bg-primary-900 rounded-full flex justify-center items-center">
        <Image src={image} alt="users" />
      </div>
      <div>
        <h5>{count}</h5>
        <p className="mb-2">{title}</p>
        {rating && <Image src={stars} alt="Stars" />}
      </div>
    </div>
  );
};

export default ChooseContent;
