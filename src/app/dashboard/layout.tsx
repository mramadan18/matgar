"use client";
import UserSideBar from "@/components/dashboard/SiderBar/UserSideBar";
import DashboardNavBar from "@/components/dashboard/SiderBar/dashboardNavBar";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className + " h-[100vh] overflow-y-auto"}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {showSidebar && (
            <div
              className="fixed top-0 left-0 w-full h-full block lg:hidden z-[2]"
              onClick={() => setShowSidebar(false)}
            ></div>
          )}
          <div className="fixed top-0 right-0 h-full w-[360px] z-10 bg-white shadow-xl hidden lg:block">
            <UserSideBar />
          </div>
          <div
            className="fixed top-0 h-full w-3/4 z-10 bg-white shadow-xl transition-all block lg:hidden"
            style={{ right: showSidebar ? "0" : "-100%" }}
          >
            <UserSideBar />
          </div>

          <div className="pb-20 mr-auto px-8 w-full lg:w-[calc(100%-360px)]">
            <DashboardNavBar setShowSidebar={setShowSidebar}>
              {children}
            </DashboardNavBar>
          </div>
        </div>
      </body>
    </html>
  );
}
