import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  icon: any;
  title: string;
};

const LinkItem = ({ link, icon, title }: Props) => {
  return (
    <li>
      <Link
        href={link}
        className="flex justify-start items-center gap-6 text-xl bg-white py-4 pr-10 transition-all duration-500 hover:bg-primary-900 hover:text-white group"
      >
        <Image
          src={icon}
          alt={title}
          className="transition-all duration-500 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert group-hover:sepia-0 group-hover:hue-rotate-[27deg] group-hover:contrast-[111%]"
        />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default LinkItem;
