"use client";

import { useEffect, useState } from "react";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import HomesModal from "@/components/modals/HomesModal";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import ProductSidebar from "@/components/modals/ProductSidebar";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import ShopCart from "@/components/modals/ShopCart";
// import AskQuestion from "@/components/modals/AskQuestion";
import BlogSidebar from "@/components/modals/BlogSidebar";
import ColorCompare from "@/components/modals/ColorCompare";
import DeliveryReturn from "@/components/modals/DeliveryReturn";
import FindSize from "@/components/modals/FindSize";
import Login from "@/components/modals/Login";
import MobileMenu from "@/components/modals/MobileMenu";
import Register from "@/components/modals/Register";
import ResetPass from "@/components/modals/ResetPass";
import SearchModal from "@/components/modals/SearchModal";
import ToolbarBottom from "@/components/modals/ToolbarBottom";
import ToolbarShop from "@/components/modals/ToolbarShop";

import { usePathname } from "next/navigation";
// import ShareModal from "@/components/modals/ShareModal";
import ScrollTop from "@/components/common/ScrollTop";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import FloatPhoneCall from "@/components/common/FloatPhoneCall";
import FloatZaloCall from "@/components/common/FloatZaloCall";
import dynamic from "next/dynamic";


// import AskQuestion from "@/components/modals/AskQuestion";
const AskQuestion = dynamic(
  () => import("@/components/modals/AskQuestion"),
  {
    ssr: false,
  }
);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  useEffect(() => {
    const initializeDirection = () => {
      const direction = localStorage.getItem("direction");

      if (direction) {
        const parsedDirection = JSON.parse(direction);
        document.documentElement.dir = parsedDirection.dir;
        document.body.classList.add(parsedDirection.dir);
      } else {
        document.documentElement.dir = "ltr";
      }

      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("disabled");
      }
    };

    initializeDirection();
  }, []); // Only runs once on component mount

  return (
    <html lang="en">
      {/* <head>
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
                    url: "https://roxanatech.com/images/roxanatech-favicon.png",
                    contentUrl:
                      "https://roxanatech.com/images/roxanatech-favicon.png",
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
                    "https://roxanatech.com/images/roxanatech_background.png",
                  url: "https://roxanatech.com/images/roxanatech_background.png",
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
                      "https://roxanatech.com/images/roxanatech_background.png",
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
                      "https://roxanatech.com/images/roxanatech_background.png",
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
      </head> */}
      <body className="preload-wrapper">
        <div className="preload preload-container" id="preloader">
          <div className="preload-logo">
            <div className="spinner"></div>
          </div>
        </div>{" "}
        <ReactQueryProvider>
          <Context>
            <div id="wrapper">{children}</div>
            {/* <RtlToggle /> */}
            <HomesModal />
            <QuickView />
            <QuickAdd />
            <ProductSidebar />
            <Compare />
            <ShopCart />
            <AskQuestion />
            <BlogSidebar />
            <ColorCompare />
            <DeliveryReturn />
            <FindSize />
            <Login />
            <MobileMenu />
            <Register />
            <ResetPass />
            <SearchModal />
            <ToolbarBottom />
            <ToolbarShop />
            <ToastContainer />
            {/* <NewsletterModal /> */}
            {/* <ShareModal />{" "} */}
          </Context>
          <ScrollTop />
          <FloatPhoneCall />
          <FloatZaloCall />
          {/* <FacebookMessenger /> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
