import LogoImage from "#/home/logo-removebg-preview.png";
import TraderSideBar from "@/components/matjarInfo/SiderBar/TraderSiderBar";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className + " h-[100vh] overflow-hidden"}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {showSidebar && (
            <div
              className="fixed top-0 left-0 w-full h-full block lg:hidden z-[2]"
              onClick={() => setShowSidebar(false)}
            ></div>
          )}

          <div
            className="fixed top-0 w-3/4 z-10 h-full lg:w-[360px] bg-[#F2F2F2] shadow-xl transition-all block lg:hidden"
            style={{ right: showSidebar ? "0" : "-100%" }}
          >
            <TraderSideBar />
          </div>

          <div className="fixed top-0 right-0 h-full w-[360px] bg-[#F2F2F2] shadow-xl hidden lg:block">
            <TraderSideBar />
          </div>

          <div className="pb-20 mr-auto px-8 w-full lg:w-[calc(100%-360px)] vh-100 overflow-y-auto">
            <div className="flex lg:hidden justify-between items-center my-14">
              <Image src={LogoImage} alt={"logo-matger"} width={150} />

              <AiOutlineMenu
                className="text-[24px] text-black block lg:hidden"
                onClick={() => setShowSidebar(true)}
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
