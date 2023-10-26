import Link from "next/link";

const CreateShopButton = () => {
  return (
    <li className="rounded-lg menu-item-register menu-item menu-item-type-custom menu-item-object-custom menu-item-510">
      <Link href="/signup">أنشئ متجرك مجاناً</Link>
    </li>
  );
};

export default CreateShopButton;
