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
  title: "RoxanaTech - Thiết kế và phát triển website",
  description:
    "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: "RoxanaTech",
  generator: "RoxanaTech",
  referrer: "origin-when-cross-origin",
  keywords: [
    "RoxanaTech",
    "Roxanatech - Thiết kế và phát triển website",
    "Thiết kế và phát triển website",
    "roxanatech",
    "roxanatech - thiết kế và phát triển website",
    "thiết kế và phát triển ứng dụng di động",
    "thiết kế ứng dụng",
    "thiết kế ứng dụng android",
    "thiết kế ứng dụng ios",
    "thiết kế ứng dụng android và ios",
    "thiết kế website",
  ],
  creator: "Đạt Võ",
  publisher: "Đoàn Thị Kim Khoa",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/favicon/favicon-180x180.png",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
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
        {/* <meta property="fb:app_id" content="152330011278908" /> */}
        {/* <script
          className="rank-math-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mardollstudio.com/#organization",
                  name: "Mardoll Studio",
                  url: "https://mardollstudio.com",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://mardollstudio.com/#logo",
                    url: "https://mardollstudio.com/assets/marrdoll_studio_logo.jpeg",
                    contentUrl:
                      "https://mardollstudio.com/assets/marrdoll_studio_logo.jpeg",
                    caption: "Mardoll Studio",
                    inLanguage: "vi",
                    width: "268",
                    height: "268",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mardollstudio.com/#website",
                  url: "https://mardollstudio.com",
                  name: "Mardoll Studio",
                  publisher: {
                    "@id": "https://mardollstudio.com/#organization",
                  },
                  inLanguage: "vi",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://mardollstudio.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "ImageObject",
                  "@id":
                    "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
                  url: "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
                  width: "200",
                  height: "200",
                  inLanguage: "vi",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://mardollstudio.com/#webpage",
                  url: "https://mardollstudio.com/",
                  name: "Mardoll Studio - Chụp ảnh cưới đẹp Quy Nhơn",
                  datePublished: "2023-09-09T01:18:53+07:00",
                  dateModified: "2023-09-24T21:50:32+07:00",
                  about: { "@id": "https://mardollstudio.com/#organization" },
                  isPartOf: { "@id": "https://mardollstudio.com/#website" },
                  primaryImageOfPage: {
                    "@id":
                      "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
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
                  headline: "Mardoll Studio - Chụp ảnh cưới đẹp Quy Nhơn",
                  keywords:
                    // "Mardoll Studio,D\u1ecbch v\u1ee5 ch\u1ee5p \u1ea3nh c\u01b0\u1edbi,H\u1ec7 th\u1ed1ng showroom c\u01b0\u1edbi",
                    "mardoll studio, Mardoll Studio, Mardoll Studio - Chụp ảnh cưới đẹp Quy Nhơn, mardoll studio - chụp ảnh cưới đẹp quy nhơn,chụp ảnh cưới đẹp ở quy nhơn, Mardoll Studio - Chụp ảnh cưới đẹp Quy Nhơn",
                  datePublished: "2023-09-09T01:18:53+07:00",
                  dateModified: "2023-09-24T21:50:32+07:00",
                  author: { "@id": "https://mardollstudio.com/bai-viet" },
                  publisher: {
                    "@id": "https://mardollstudio.com/#organization",
                  },
                  description:
                    "Mardoll Studio - Ch\u1ee5p \u1ea3nh c\u01b0\u1edbi đẹp Quy Nhơn, là một trong những công ty cung cấp dịch vụ cưới hàng đầu Việt Nam. Chúng tôi sở hữu hệ thống showroom cưới tại Quy Nhơn",
                  name: "Mardoll Studio - Chụp ảnh cưới đẹp Quy Nhơn",
                  "@id": "https://mardollstudio.com/#richSnippet",
                  isPartOf: { "@id": "https://mardollstudio.com/#webpage" },
                  image: {
                    "@id":
                      "https://mardollstudio.com/assets/images/bang-gia-background.jpeg",
                  },
                  inLanguage: "vi",
                  mainEntityOfPage: {
                    "@id": "https://mardollstudio.com/#webpage",
                  },
                },
              ],
            }),
          }}
        /> */}
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
