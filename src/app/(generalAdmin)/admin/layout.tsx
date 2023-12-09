import "../global.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

type Props = {
  children: React.ReactElement;
};

const layout = ({ children }: Props) => {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-hidden" suppressHydrationWarning={true}>
        <div className="lg:grid lg:grid-cols-[288px_1fr]">
          <Sidebar />
          <div>
            <Header />
            <main className="px-2 h-[calc(100vh-81px)] overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
