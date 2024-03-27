import logo from "../../assets/Images/logo.png";
import facebook from "../../assets/Images/facebook.png";
import scrollImg from "../../assets/Images/scroll.png";
import instagram from "../../assets/Images/instagram.png";
import x from "../../assets/Images/xlight.png";
import { Link } from "react-router-dom";

function Footer() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  return (
    <div className="bg-secondary-second w-full relative">
      <div className="bg-transparent text-white bg-cover flex justify-start items-start flex-col size-full tablet:bg-footer px-[5vw] pt-8 thousand:pt-[4rem] laptop:px-[8vw] mt-[5rem]">
        <Link to="/">
          <img
            src={logo}
            className="w-[23px] mb-6 tablet:mb-8 tablet:w-[34px]"
            alt="brand guide logo"
          />
        </Link>
        <div className="*:text-left flex flex-col mb-12 justify-start items-start gap-[3.4rem] thousand:flex-row thousand:justify-between thousand:gap-4">
          <div className=" thousand:w-[40%]">
            <p className="text-[0.875rem] tablet:text-[1rem] font-medium leading-[25px]">
              At The Brand Plug, we are the architects of possibility, the
              artisans of innovation, and the champions of your brand's journey
              to greatness. Our ethos is built on a foundation of creativity,
              fueled by passion, and driven by a relentless pursuit of
              excellence.
            </p>
            <div className=" mt-14 hidden tablet:flex justify-start items-center gap-5 *:w-[30px] *:transition-all *:ease-linear *:duration-200 *:transform">
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={facebook} alt="facebook link" />
              </a>
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={x} alt="facebook link" />
              </a>
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={instagram} alt="facebook link" />
              </a>
            </div>
          </div>
          <div className=" thousand:w-[25%] thousand:max-w-fit">
            <h2 className="text-[1rem] font-bold uppercase leading-7">
              services
            </h2>
            <div className="*:text-[0.875rem] *:tablet:text-[1rem] *:font-medium *:leading-7 mt-5 space-y-2">
              <p>Branding </p>
              <p>Digital Marketing</p>
              <p>Search Engine Optimization (SEO)</p>
              <p>Growth Strategies</p>
              <p>Content Creation</p>
              <p>Media Planning and Buying</p>
              <p>Public Relations (PR)</p>
              <p>Consulting Services</p>
            </div>
          </div>
          <div className=" thousand:w-[25%] thousand:max-w-fit">
            <h2 className="text-[1rem] font-bold uppercase leading-7">
              others
            </h2>
            <div className="*:text-[0.875rem] *:tablet:text-[1rem] *:font-medium *:block *:capitalize *:leading-7 mt-5 space-y-2">
              <Link to="/projects">projects</Link>
              <Link to="/blogs">blogs</Link>
              <Link to="/contact">contact us</Link>
            </div>
            <div className=" mt-7 flex tablet:hidden justify-start items-center gap-5 *:w-[30px] *:transition-all *:ease-linear *:duration-200 *:transform">
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={facebook} alt="facebook link" />
              </a>
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={x} alt="facebook link" />
              </a>
              <a
                className="hover:scale-110"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-full" src={instagram} alt="facebook link" />
              </a>
            </div>
          </div>
        </div>
        <hr className="h-[1px] w-full border-none bg-secondary-main" />
        <p className="text-[0.825rem] text-center w-full leading-7 font-medium my-5">
          Copyright © 2024. The Brand Plug
        </p>
      </div>
      <button onClick={handleScrollTop} className="absolute top-[-20.075px] right-[5%] tablet:top-[-29.5px]">
        <img
          src={scrollImg}
          alt="scroll to the top"
          className="size-[40.15px] tablet:size-[59px]"
        />
      </button>
    </div>
  );
}

export default Footer;
