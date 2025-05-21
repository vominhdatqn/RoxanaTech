import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import About from "@/components/othersPages/thiet-ke-website/About";
import Features from "@/components/othersPages/thiet-ke-website/Features";
import FlatTitle from "@/components/othersPages/about/FlatTitle";
import Hero from "@/components/othersPages/about/Hero";
import Topbar from "@/components/homes/home-headphone/Topbar";
import ShopGram from "@/components/othersPages/about/ShopGram";
import Testimonials from "@/components/othersPages/about/Testimonials";
import Link from "next/link";
import { BreadCrumb } from "@/components/common/BreadCrumb";
import OrderDetails from "@/components/othersPages/dashboard/OrderDetails";
import { Timeline } from "@/components/common/Timeline";
import Collections from "@/components/homes/home-electric-bike/Collections";
import Products2 from "@/components/homes/home-paddle-boards/Products";
import ShopSidebarRight2 from "@/components/shop/ShopSidebarRight2";
import {
  DataConnectQueryClient,
  useDataConnectQuery,
} from "@tanstack-query-firebase/react/data-connect";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { listDemoRef } from "@/services/demoService";
import DemoClientPage from "./DemoClientPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { createClient } from "@/utlis/supabase/server";
import { getDemos } from "@/utlis/supabase/queries/demos";
import { cookies } from "next/headers";

export const metadata = {
  title: "Thiết kế website",
  description:
    "Cung cấp giải pháp thiết kế website hiện đại, chuẩn SEO và thân thiện với mọi thiết bị.",
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
      url: "/favicon/roxanatech-favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/roxanatech-favicon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/roxanatech-favicon.png",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://roxanatech.com/images/roxanatech_background.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://roxanatech.com/images/roxanatech_background.png",
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
// export async function getProps() {
//   const queryClient = new DataConnectQueryClient();

//   // Prefetch the list of movies
//   await queryClient.prefetchDataConnectQuery(listMoviesRef());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

// async function setUpCacheFirebase() {
//   const queryClient = new DataConnectQueryClient();
//   // Prefetch the list of movies
//   await queryClient.prefetchDataConnectQuery(listDemoRef());
//   return dehydrate(queryClient)
// }

export default async function DemoPage(context) {
  const { page = 1, itemsPerPage = 12 } = (await context?.searchParams) || {};

  const supabase = await createClient();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["demos", page, itemsPerPage],
    queryFn: () => getDemos(supabase, page, itemsPerPage),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DemoClientPage />
    </HydrationBoundary>
  );
}
