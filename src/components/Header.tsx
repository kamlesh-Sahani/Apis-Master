import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex flex-col w-full">
      <div className="flex p-3 gap-4  justify-center bg-[#FFE8D6] ">
        <h3 className=" font-bold text-black">For Promotion contact us</h3>
        <a href="mailto:kamleshbca2005@gmail.com" target="_blank" className=" text-blue-500">
          Click
        </a>
      </div>
      <div className="flex justify-center gap-40  p-4 max-md:gap-10 max-sm:gap-3 max-sm:overflow-x-auto max-sm:p-1">
        <Link href={"/"}> <h1 className="font-bold text-lg bg-blue-500 pt-1 pl-3 pr-3 cursor-pointer max-sm:p-1 max-sm:text-sm ">
          Apis Master
        </h1></Link>
       
        <div className="">
          <ul className="flex  justify-center items-center list-none gap-5 max-sm-gap-2">
            <Link href={"/"}>
              {" "}
              <li className=" cursor-pointer transition-all hover:text-blue-500 max-sm:hidden">
                Free Apis
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/kamlesh-sahani-692ab7247/" target="_blabk">
              <li className=" cursor-pointer  transition-all hover:text-blue-500 max-sm:text-sm">
                contact
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="max-sm:text-sm cursor-pointer transition-all hover:text-blue-500">
                About us
              </li>
            </Link>
            <Link  href="mailto:kamleshbca2005@gmail.com" target="_blank">
              {" "}
              <li className="max-sm:text-sm cursor-pointer transition-all hover:text-blue-500">
                Feedback
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
