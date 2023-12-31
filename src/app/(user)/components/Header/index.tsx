import Navbar from "./Navbar";
import UpperTop from "./UpperTop";

const Header = () => {
  return (
    <header className="sticky top-0">
      <UpperTop />
      <Navbar />
    </header>
  );
};

export default Header;
