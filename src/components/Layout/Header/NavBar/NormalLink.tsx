import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NormalLinkProps {
  linkName: string;
  linkPath: string;
}

const NormalLink = (props: NormalLinkProps) => {
  const pathname = usePathname();
  return (
    <li className="opacity-100 cursor-pointer justify-center relative">
      <Link
        className="font-bold gap-3 px-2 py-4 whitespace-nowrap"
        href={props.linkPath}
        style={pathname === "/special" ? { color: "#fff" } : { color: "#000" }}
      >
        {props.linkName}
      </Link>
    </li>
  );
};

export default NormalLink;
