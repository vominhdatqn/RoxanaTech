import { isValidElement } from "react";
import ButtonDetail from "./ButtonDetail";

interface IFeaturedProductCard {
  title?: string;
  icon?: React.ReactElement | string;
  description?: string;
}

const FeaturedProductCard: React.FC<IFeaturedProductCard> = ({
  title = "THIẾT KẾ WEB",
  icon = "/assets/icons/featured/website-icon.png",
  description,
}) => {
  const renderIcon = () => {
    if (isValidElement(icon)) return icon;
    return (
      <img
        src={icon as string}
        alt="website-icon"
        className="w-full h-full object-cover transition-all"
      />
    );
  };
  return (
    <div
      data-aos="zoom-in"
      className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl sm:rounded-xl md:px-6 lg:px-10 w-full"
    >
      <span className="absolute top-10 z-0 h-14 w-14 rounded-full bg-transparent duration-300 group-hover:scale-[42] group-hover:bg-gradient-to-r from-primary to-green-700"></span>
      <div className="relative z-10">
        <span className="flex h-14 w-14 gap-4 items-center rounded-full bg-transparent transition-all duration-300 ">
          {renderIcon()}
          <h2 className="font-semibold text-xl md:text-2xl capitalize whitespace-nowrap group-hover:text-white transition-all">
            {title}
          </h2>
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
        <ButtonDetail />
      </div>
    </div>
  );
};

export default FeaturedProductCard;
