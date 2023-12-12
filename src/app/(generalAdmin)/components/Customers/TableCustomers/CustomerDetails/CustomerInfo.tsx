import Image from "next/image";

type Props = {
  image: any;
  value: string;
};

const CustomerInfo = ({ value, image }: Props) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8">
        <Image src={image} alt={value} />
      </div>
      <p>{value}</p>
    </div>
  );
};

export default CustomerInfo;
