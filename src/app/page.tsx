import FunFact from "@/components/FunFact";
import LogoList from "@/components/LogoList";
import MovingText from "@/components/MovingText";
import PricingPlan from "@/components/PricingPlan";
import Skeleton from "@/components/Skeleton";
import WhyChooseUs from "@/components/WhyChooseUs";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <Skeleton />,
});
const FeaturedProducts = dynamic(
  () => import("@/components/FeaturedProducts"),
  {
    loading: () => <Skeleton />,
  }
);
const Demos = dynamic(() => import("@/components/Demos"), {
  loading: () => <Skeleton />,
});
const Testimonial = dynamic(() => import("@/components/Testimonial"), {
  loading: () => <Skeleton />,
});

export default async function Home() {
  return (
    <section className="w-full min-h-screen">
      <Hero />
      {/* <FunFact /> */}
      <FeaturedProducts />
      {/* <WhyChooseUs /> */}
      <Demos />
      <div className="bg-gradient-to-r from-primary to-green-700">
        <MovingText text="Đối tác của chúng tôi" />
        {/* <LogoList /> */}
      </div>
      <PricingPlan />
      <Testimonial />
    </section>
  );
}
