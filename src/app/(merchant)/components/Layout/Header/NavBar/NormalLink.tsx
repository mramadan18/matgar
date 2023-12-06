import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NormalLinkProps {
  linkName: string;
  linkPath: string;
}

const NormalLink = (props: NormalLinkProps) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className="font-bold"
        href={props.linkPath}
        style={pathname === "/special" ? { color: "#fff" } : { color: "#000" }}
      >
        {props.linkName}
      </Link>
    </li>
  );
};

export default NormalLink;
