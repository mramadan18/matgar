import Header from "../components/Header";
import "../global.css";

type Props = {
  children: React.ReactElement;
};

const layout = ({ children }: Props) => {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default layout;
