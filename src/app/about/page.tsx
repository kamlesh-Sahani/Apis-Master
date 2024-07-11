import React from "react";

const AboutUs = () => {
  return (
    <div className="py-10  w-[100vw]">
      <div className="container mx-auto px-4 max-lg:px-0  w-full">
        <div className="p-6 flex flex-col  w-full">
          <h1 className="font-bold text-3xl  text-[#ffffff] text-center">
            About Us
          </h1>
          <p className="text-2xl text-[#9cadc3] w-full  mt-4 max-md:w-full max-sm:text-xl">
            Welcome to
            <span className=" text-blue-500   pl-2 pr-2">
              APIs Master
            </span>
            , your ultimate destination for ready-to-use APIs tailored for
            developers working on Our mission is to simplify the development
            process by providing instant access to powerful, reliable APIs that
            help you
            <span className=" text-blue-500   pl-2 pr-2">
              build, test, and innovate
            </span>
            quickly and efficiently.
          </p>
          <p className="text-2xl text-[#9cadc3] w-full   mt-4 max-md:w-full max-sm:text-xl">
            At
            <span className=" text-blue-500   pl-2 pr-2">
              APIs Master
            </span>
            , we understand the challenges developers face when searching for
            the right tools to bring their ideas to life. That's why we've
            curated a comprehensive collection of APIs that cater to a wide
            range of needs, from
            <span className=" text-blue-500   pl-2 pr-2">
              weather and finance to social media and e-commerce.
            </span>
          </p>
          <p className="text-2xl text-[#9cadc3] w-full text-center mt-4 max-md:w-full max-sm:text-xl">
            Our platform is designed with ease of use in mind, offering
            intuitive documentation and seamless integration to help you get
            started with minimal hassle. Whether you're a seasoned developer or
            just starting out, our goal is to support your journey by providing
            the resources you need to succeed.
          </p>
          <p className="text-2xl text-[#9cadc3] w-full text-center mt-4 max-md:w-full max-sm:text-xl">
            Thank you for choosing
            <span className=" text-blue-500   pl-2 pr-2">
              APIs Master
            </span>
            as your trusted partner in development. We're excited to see what
            you create and are here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
