import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginLink = () => {
  const pathname = usePathname();
  return (
    <li className="menu-item-login menu-item menu-item-type-custom menu-item-object-custom menu-item-509 px-0 !mx-0">
      <Link
        href="/login"
        style={pathname === "/special" ? { color: "#fff" } : { color: "#000" }}
      >
        تسجيل الدخول
      </Link>
    </li>
  );
};

export default LoginLink;
