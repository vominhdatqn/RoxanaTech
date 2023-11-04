import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://roxanatech.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/lien-he",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-ciseco",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-andshop",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-voxo",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-xtreme",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-roxana-tech-studio",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://roxanatech.com/demos/san-pham-demo-website-roxana-tech-studio-admin",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    // blog
    {
      url: "https://roxanatech.com/bai-viet/react-native-la-gi-tai-sao-ban-nen-chon-su-dung-react-native",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
