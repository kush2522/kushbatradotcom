import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/profile";

const BASE_URL = "https://kushbatra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/demos", "/video-resume", "/blog"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
