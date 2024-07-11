import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex justify-around mt-20 p-6  bg-[#282A36] max-md:flex-col max-md:gap-10 h-full">
      <Link href={"/"} className="max-md:text-center">
        <h1 className="font-bold text-lg bg-blue-500 pt-1 pl-3 pr-3 cursor-pointer">
          Apis Master
        </h1>
      </Link>

      <div className="flex gap-6">
        <Link
          href="https://www.linkedin.com/in/kamlesh-sahani-692ab7247"
          target="_blank"
        >
          <FaLinkedin className="text-4xl font-bold cursor-pointer hover:opacity-70 text-[#9cadc3] " />
        </Link>

        <Link href="mailto:kamleshbca2005@gmail.com" target="_blank">
          <SiGmail className="text-4xl font-bold cursor-pointer hover:opacity-70 text-[#9cadc3] " />
        </Link>
      </div>

      <ul className="flex flex-col gap-1">
        <li className=" text-xl font-medium text-[#9cadc3] list-disc cursor-pointer hover:opacity-70">
          Build and Innovate Effortlessly
        </li>
        <li className="cursor-pointer hover:opacity-70 text-xl font-medium text-[#9cadc3] list-disc">
          Fuel Your Development Journey
        </li>

        <li className="cursor-pointer hover:opacity-70 text-xl font-medium text-[#9cadc3] list-disc">
          Transform Ideas into Reality
        </li>
        <li className="cursor-pointer hover:opacity-70 text-xl font-medium text-[#9cadc3] list-disc">
          Accelerate Your Project Development
        </li>
        <li className="cursor-pointer hover:opacity-70 text-xl font-medium text-[#9cadc3] list-disc">
          Explore, Test, and Create
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
