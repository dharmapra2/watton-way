import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://wattonway.in/sitemap.xml",
    host: "https://wattonway.in",
  };
}
