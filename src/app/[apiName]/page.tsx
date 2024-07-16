"use client";
import ApiCard from "@/components/ApiCard";
import { codeAndDes } from "../../data/codeAndDes";

const Page = ({ params }: { params: { apiName: string } }) => {
  function fetchByTitle(title: string) {
    return codeAndDes.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );
  }
  const apiData = fetchByTitle(params.apiName);
  if (!apiData) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-9/12">
          <p>No data found for the specified API name.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center max-sm:justify-start max-sm:items-start ">
  
      <div className="w-9/12 max-sm:w-full">
        {apiData?.apis.map((api, index) => (
          <ApiCard
            key={index}
            apiUrl={api.api}
            description={api.des}
            code={api.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
