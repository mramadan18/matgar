import React from "react";

interface PropsValue {
  children: React.ReactNode;
}

const BreadcrumbList = (props: PropsValue) => {
  return (
    <ol
      className="flex items-center whitespace-nowrap min-w-0"
      aria-label="Breadcrumb"
    >
      {props.children}
    </ol>
  );
};

export default BreadcrumbList;
