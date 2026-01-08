import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sebtech.dev/es",
      lastModified: new Date(),
    },
    {
      url: "https://sebtech.dev/en",
      lastModified: new Date(),
    },
  ];
}
