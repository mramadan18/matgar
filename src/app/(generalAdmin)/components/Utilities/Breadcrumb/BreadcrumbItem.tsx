import Link from "next/link";

type Props = { link: string; title: string; separator?: string };

const BreadcrumbItem = ({ link, title, separator }: Props) => {
  return (
    <>
      <Link href={link} className="text-[#7B7B7B]">
        {title}
      </Link>
      <span className="text-[#7B7B7B]">{separator}</span>
    </>
  );
};

export default BreadcrumbItem;
