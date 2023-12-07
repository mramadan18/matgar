import Image from "next/image";

type Props = {
  icon: any;
  value: string;
  title: string;
};

const InfoBarItem = ({ icon, value, title }: Props) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="bg-primary-900 w-14 h-14 rounded-full flex justify-center items-center py-2">
        <Image src={icon} alt={title} className="w-full h-full" />
      </div>
      <div>
        <h3 className="font-extrabold">{value}</h3>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default InfoBarItem;
