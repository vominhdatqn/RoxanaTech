import React from "react";
import type { Metadata } from "next";
import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";
import { RootStyleRegistry } from "@/components/RootStyleRegistry";
import "../styles/_app.scss";
import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme/andtThemeConfig";
import { AOSInit } from "@/lib/aos";
// import { NavigationEvents } from "@/components/NavigationEvents";
import MainContainer from "@/components/MainContainer";

export const metadata: Metadata = {
  title: "RoxanaTech - Thiết kế website/app chuyên nghiệp cho doanh nghiệp",
  description:
    "Thiết kế website/app cho doanh nghiệp, uy tín, chuẩn UX,UI✅ website/app doanh nghiệp chuẩn SEO ✅ tại TPHCM và các tỉnh miền Tây nam bộ. Dịch vụ uy tín, hỗ trợ kỹ thuật 24/7, tư vấn miễn phí theo yêu cầu chỉ từ 2tr8 ✅ tặng hosting tên miền tốc độ cao. Miễn phí dùng thử ✅, thiết kế chọn gói website/app tại RoxanaTech.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: "RoxanaTech",
  generator: "RoxanaTech",
  referrer: "origin-when-cross-origin",
  keywords: [
    "RoxanaTech",
    "RoxanaTech - Thiết kế website/app chuyên nghiệp cho doanh nghiệp",
    "Thiết kế và phát triển website",
    "roxanatech",
    "roxanatech - website/app chuyên nghiệp cho doanh nghiệp",
    "thiết kế và phát triển ứng dụng di động",
    "thiết kế ứng dụng",
    "thiết kế ứng dụng android",
    "thiết kế ứng dụng ios",
    "thiết kế ứng dụng android và ios",
    "thiết kế website",
    "thiết kế ứng dụng di động",
    "thiết kế ứng dụng di động tại bình thạnh",
    "thiết kế ứng dụng web tại bình thạnh",
    "thiết kế ứng dụng website tại bình thạnh",
    "thiết kế app tại bình thạnh",
    "thiết kế app tại sài gòn",
    "thiết kế app tại hồ chí minh",
    "thiết kế app tại long an",
    "thiết kế app tại Long An",
    "thiết kế app tại bến tre",
    "thiết kế app tại Bến Tre",
  ],
  creator: "Đạt Võ",
  publisher: "Đoàn Thị Kim Khoa",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/favicon/roxanatech-favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/favicon/roxanatech-favicon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/favicon/roxanatech-favicon.png",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://roxanatech.com/assets/images/roxanatech_background.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://roxanatech.com/assets/images/roxanatech_background.png",
        width: 1800,
        height: 1600,
        alt: "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
      },
    ],
    url: "https://roxanatech.com/",
    siteName: "RoxanaTech",
    description:
      "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta property="fb:app_id" content="2317382268469700" />
        <script
          className="rank-math-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://roxanatech.com/#organization",
                  name: "RoxanaTech - Thiết kế và phát triển website",
                  url: "https://roxanatech.com",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://roxanatech.com/#logo",
                    url: "https://roxanatech.com/assets/roxanatech-favicon.png",
                    contentUrl:
                      "https://roxanatech.com/assets/roxanatech-favicon.png",
                    caption: "RoxanaTech - Thiết kế và phát triển website",
                    inLanguage: "vi",
                    width: "268",
                    height: "268",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://roxanatech.com/#website",
                  url: "https://roxanatech.com",
                  name: "RoxanaTech - Thiết kế và phát triển website",
                  publisher: {
                    "@id": "https://roxanatech.com/#organization",
                  },
                  inLanguage: "vi",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://roxanatech.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "ImageObject",
                  "@id":
                    "https://roxanatech.com/assets/images/roxanatech_background.png",
                  url: "https://roxanatech.com/assets/images/roxanatech_background.png",
                  width: "200",
                  height: "200",
                  inLanguage: "vi",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://roxanatech.com/#webpage",
                  url: "https://roxanatech.com/",
                  name: "RoxanaTech - Thiết kế và phát triển website",
                  datePublished: "2023-09-09T01:18:53+07:00",
                  dateModified: "2023-09-24T21:50:32+07:00",
                  about: { "@id": "https://roxanatech.com/#organization" },
                  isPartOf: { "@id": "https://roxanatech.com/#website" },
                  primaryImageOfPage: {
                    "@id":
                      "https://roxanatech.com/assets/images/roxanatech_background.png",
                  },
                  inLanguage: "vi",
                },
                // {
                //   "@type": "Person",
                //   "@id": "https://renbridal.vn/author/admin/",
                //   name: "admin",
                //   url: "https://renbridal.vn/author/admin/",
                //   image: {
                //     "@type": "ImageObject",
                //     "@id":
                //       "https://renbridal.vn/wp-content/litespeed/avatar/0e52e4b673680f822ca1a998efc81a06.jpg?ver=1694779683",
                //     url: "https://renbridal.vn/wp-content/litespeed/avatar/0e52e4b673680f822ca1a998efc81a06.jpg?ver=1694779683",
                //     caption: "admin",
                //     inLanguage: "vi",
                //   },
                //   sameAs: ["https://ren.phatkg.com"],
                //   worksFor: { "@id": "https://renbridal.vn/#organization" },
                // },
                {
                  "@type": "Article",
                  headline: "RoxanaTech - Thiết kế và phát triển website",
                  keywords:
                    // "Mardoll Studio,D\u1ecbch v\u1ee5 ch\u1ee5p \u1ea3nh c\u01b0\u1edbi,H\u1ec7 th\u1ed1ng showroom c\u01b0\u1edbi",
                    "RoxanaTech, Roxanatech - Thiết kế và phát triển website, Thiết kế và phát triển website, roxanatech, roxanatech - thiết kế và phát triển website, thiết kế và phát triển ứng dụng di động, thiết kế ứng dụng, thiết kế ứng dụng android, thiết kế ứng dụng ios, thiết kế ứng dụng android và ios, thiết kế website",
                  datePublished: "2023-09-09T01:18:53+07:00",
                  dateModified: "2023-09-24T21:50:32+07:00",
                  author: { "@id": "https://roxanatech.com/" },
                  publisher: {
                    "@id": "https://roxanatech.com/#organization",
                  },
                  description:
                    "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
                  name: "RoxanaTech - Thiết kế và phát triển website",
                  "@id": "https://roxanatech.com/#richSnippet",
                  isPartOf: { "@id": "https://roxanatech.com/#webpage" },
                  image: {
                    "@id":
                      "https://roxanatech.com/assets/images/roxanatech_background.png",
                  },
                  inLanguage: "vi",
                  mainEntityOfPage: {
                    "@id": "https://roxanatech.com/#webpage",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <html lang="en">
        <AOSInit />
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <RootStyleRegistry>
              <ConfigProvider theme={theme}>
                <MainContainer>{children}</MainContainer>
              </ConfigProvider>
            </RootStyleRegistry>
          </main>
        </body>
      </html>
    </>
  );
}
