import Footer from "./Footer";
import Header from "./Header";

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col items-start justify-start min-w-full min-h-full pb-4 m-auto">
      <Header />
      <main className="relative hero-area mt-[120px] w-full flex-col item-center justify-center p-0 m-auto">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
