import Link from "next/link";
import { apiData } from "../data/constant";
interface ApiCardType {
  url: string;
  title: string;
  Icon: React.ElementType;
  owner?: string;
  isNew?: boolean;
}
const ApiCard = ({ url, title, Icon, owner, isNew }: ApiCardType) => (
  <Link href={url}>
    <div className="flex gap-5 items-center p-2 bg-[#282A36] w-72 h-20 rounded-md cursor-pointer pl-7 relative max-sm:w-[90vw]">
      {isNew && (
        <button className=" absolute right-2 top-2 text-blue-500 font-semibold">
          New
        </button>
      )}
      <Icon className="text-2xl font-bold" />
      <p className="text-xl font-semibold  text-[#9cadc3]">{title}</p>
      <p className=" absolute right-3 bottom-2 text-[#9cadc3] font-semibold text-xs">
        {owner}
      </p>
    </div>
  </Link>
);
export default function Home() {
  return (
    <main className="w-full flex justify-center items-center ">
      <div className="w-9/12 max-sm:w-full">
        <div className="flex flex-col mt-20  gap-10  w-full">
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className=" text-5xl text-[#ffffff] font-semibold text-center max-sm:text-4xl">
              High-Quality <span className=" text-blue-500">APIs</span>{" "}
              Available for Your Projects
            </h1>
            <p className="text-2xl text-[#9cadc3] w-3/4 text-center mt-4 max-sm:text-xl max-sm:text-start">
              Explore essential APIs tailored for testing and small-scale{" "}
              <span className=" text-blue-500">projects</span>. Accelerate your
              development process with{" "}
              <span className="text-blue-500 ">powerful</span> tools designed
              for rapid prototyping and innovation. Dive into our comprehensive
              collection to
              <span className=" text-blue-500 ">
                {" "}
                build, test, and iterate
              </span>{" "}
              with ease.
            </p>
          </div>
          <p className="font-bold text-3xl mt-20  text-[#9cadc3] text-center">
            Free APIs
          </p>

          <div className="flex gap-10 justify-center items-center flex-wrap  w-full">
            {apiData.map((api) => (
              <ApiCard
                key={api.id}
                title={api.title}
                Icon={api.Icon}
                url={api.url}
                owner={api.owner}
                isNew={api?.isNew}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
