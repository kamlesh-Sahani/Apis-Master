// src/app/[apiName]/generateMetadata.ts
import { codeAndDes } from "../../data/codeAndDes";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { apiName: string } }): Promise<Metadata> {
  const apiData = codeAndDes.find(
    (item) => item.title.toLowerCase() === params.apiName.toLowerCase()
  );

  if (!apiData) {
    return {
      title: 'API Not Found',
      description: 'No data found for the specified API name.',
    };
  }


  return {
    title:apiData.title,
    description: apiData.apis[0].des,
  };
}
