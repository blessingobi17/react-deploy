import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer
        className="relative container bg-Black text-White py-10 md:px-32 px-8 mt-10
      flex w-full justify-between items-center md:flex-row flex-col md:text-start text-center "
      >
        <div>
          <div className="pb-8 ">
            <img src={logo} alt="" className="h-6" />
          </div>
          <div>
            <ul className="flex md:flex-row flex-col gap-6 text-White text-sm">
              <a className=" hover:underline cursor-pointer">About</a>
              <a className=" hover:underline cursor-pointer">Careers</a>
              <a className=" hover:underline cursor-pointer">Events</a>
              <a className=" hover:underline cursor-pointer">Products</a>
              <a className=" hover:underline cursor-pointer">Support</a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center">
          <div className="flex items-center gap-4 pb-8 md:pt-0 pt-14">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
          <p className=" text-sm text-VeryDarkGray">
            &copy;2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
