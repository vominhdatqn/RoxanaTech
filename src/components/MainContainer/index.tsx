import React, { Suspense } from "react";
import Loader from "../Loader";
import dynamic from "next/dynamic";

const FloatButton = dynamic(() => import("@/components/FloatButton"), {});
const FacebookMessenger = dynamic(
  () => import("@/components/FacebookMessenger"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("@/components/Footer"), {
  // loading: () => <p>Loading...</p>,
});
const TabBar = dynamic(() => import("@/components/TabBar"), {});
const Navbar = dynamic(() => import("@/components/Navbar"), {});

// const NavigationEvents = dynamic(() => import('@/components/NavigationEvents'),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <FloatButton />
      <FacebookMessenger />
      <Footer />
      <TabBar />
    </>
  );
};

export default MainContainer;
