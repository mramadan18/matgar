import React from "react";

interface PropsValue {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
}

const SecondButton = ({
  children,
  bgColor = "#0279DE",
  textColor = "#fff",
  fontSize = "1rem",
}: PropsValue) => {
  return (
    <button
      className="py-2 px-8 border border-primary rounded-lg font-bold"
      style={{ backgroundColor: bgColor, color: textColor, fontSize }}
    >
      {children}
    </button>
  );
};

export default SecondButton;
