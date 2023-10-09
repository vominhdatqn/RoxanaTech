import React, { Suspense } from "react";
import Loader from "../Loader";
import dynamic from "next/dynamic";

// const FloatButton = dynamic(() => import("@/components/FloatButton"), {
//   // loading: () => <p>Loading...</p>,
// });
// const FacebookMessenger = dynamic(
//   () => import("@/components/FacebookMessenger"),
//   {
//     // loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );
// const Footer = dynamic(() => import("@/components/Footer"), {
//   // loading: () => <p>Loading...</p>,
// });
// const TabBar = dynamic(() => import("@/components/TabBar"), {
//   // loading: () => <p>Loading...</p>,
// });
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
      {/* <FloatButton /> */}
      {/* <FacebookMessenger /> */}
      {/* <Footer /> */}
      {/* <TabBar /> */}
      {/* <NavigationEvents /> */}
    </>
  );
};

export default MainContainer;
