import Link from "next/link";
import React from "react";

interface PropsValue {
  name: string;
  url: string;
}

const BreadcrumbItemActive = ({ name, url }: PropsValue) => {
  return (
    <li>
      <Link
        className="flex items-center text-[rgba(0,0,0,0.5)] font-medium"
        href={url}
      >
        <span className="mx-2 text-lg">{name}</span>
      </Link>
    </li>
  );
};

export default BreadcrumbItemActive;
