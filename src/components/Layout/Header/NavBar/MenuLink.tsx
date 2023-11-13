import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuLinkProps {
  linkName: string;
  linkPath?: string;
  children: JSX.Element | JSX.Element[];
}

const MenuLink = (props: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-524">
      <a
        className="font-bold gap-3 px-2 py-4 whitespace-nowrap"
        style={pathname === "/special" ? { color: "#fff" } : { color: "#000" }}
      >
        {props.linkName}
      </a>
      <ul className="sub-menu">{props.children}</ul>
    </li>
  );
};

export default MenuLink;
