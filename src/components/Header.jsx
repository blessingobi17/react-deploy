import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <div className="header w-full md:pb-24 pb-36 md:pt-16 pt-12">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Header;
