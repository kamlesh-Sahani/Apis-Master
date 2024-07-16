import { MetadataRoute } from "next";
import { codeAndDes } from "@/data/codeAndDes";
export default function sitemap(): MetadataRoute.Sitemap {
    const titles = codeAndDes.map((p)=>({url:`https://www.apismaster.com/${(p.title).toLowerCase()}` , lastModified: new Date()}));
  return [
    {
      url: "https://www.apismaster.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.apismaster.com/about",
      lastModified: new Date(),
    },
    ...titles
  ];
}
