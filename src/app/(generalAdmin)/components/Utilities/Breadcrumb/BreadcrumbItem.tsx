import Link from "next/link";

type Props = { link: string; title: string; separator?: string };

const BreadcrumbItem = ({ link, title, separator }: Props) => {
  return (
    <>
      <Link href={link}>{title}</Link>
      <span>{separator}</span>
    </>
  );
};

export default BreadcrumbItem;
