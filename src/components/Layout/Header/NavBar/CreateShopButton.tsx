import Link from "next/link";

const CreateShopButton = () => {
  return (
    <li className="rounded-lg menu-item-register menu-item menu-item-type-custom menu-item-object-custom menu-item-510">
      <Link target="_blank" rel="noopener" href="https://s.salla.sa/register">
        أنشئ متجرك مجاناً
      </Link>
    </li>
  );
};

export default CreateShopButton;
