import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuLinkProps {
  linkName: string;
  linkPath: string;
  children: JSX.Element | JSX.Element[];
}

const MenuLink = (props: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-524">
      <Link
        className="font-bold gap-3 px-2 py-4 whitespace-nowrap"
        href={props.linkPath}
        style={pathname === "/special" ? { color: "#fff" } : { color: "#000" }}
      >
        {props.linkName}
      </Link>
      <ul className="sub-menu">{props.children}</ul>
    </li>
  );
};

export default MenuLink;
