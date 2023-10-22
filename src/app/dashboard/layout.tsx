import UserSideBar from "@/components/dashboard/SiderBar/UserSideBar";
import DashboardNavBar from "@/components/dashboard/SiderBar/dashboardNavBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className + " h-[100vh] overflow-hidden"}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="fixed top-0 right-0 h-full w-[260px]  lg:w-[360px]">
            <UserSideBar />
          </div>

          <div className="pb-20 mr-auto px-8 w-[calc(100%-260px)] lg:w-[calc(100%-360px)]">
            <DashboardNavBar>{children}</DashboardNavBar>
          </div>
        </div>
      </body>
    </html>
  );
}
