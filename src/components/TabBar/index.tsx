import { BiSolidCameraPlus, BiSolidHome, BiSolidContact } from "react-icons/bi";
import { GiAmpleDress } from "react-icons/gi";
import { RiPriceTag2Fill } from "react-icons/ri";
import { MdMiscellaneousServices, MdContactPage } from "react-icons/md";
import TabBarItem from "./TabBarItem";

export default function TabBar() {
  const menus = [
    {
      name: "Trang chủ",
      url: "trang-chu",
      icon: (
        <BiSolidHome
          size={24}
          className="mb-1 text-gray-500 group-hover:text-primary"
        />
      ),
      tooltip: false,
    },
    {
      name: "Bảng giá",
      url: "roxanatech-pricing-plan",
      icon: (
        <RiPriceTag2Fill
          size={24}
          className="mb-1 text-gray-500 group-hover:text-primary"
        />
      ),
      tooltip: false,
    },
    {
      name: "Dịch vụ",
      url: "roxanatech-services",
      icon: (
        <MdMiscellaneousServices
          size={24}
          className="mb-1 text-gray-500 group-hover:text-primary"
        />
      ),
      tooltip: true,
    },
    {
      name: "Liên hệ",
      url: "lien-he",
      icon: (
        <MdContactPage
          size={24}
          className="mb-1 text-gray-500 group-hover:text-primary"
        />
      ),
      tooltip: false,
    },
  ];
  const renderTabBar = () =>
    menus.map((menu, index) => (
      <TabBarItem key={`tabbar-item-${index}`} {...menu} />
    ));
  return (
    <div className="block md:hidden sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 rounded-t-xl">
      <div className="grid h-full mx-auto grid-cols-4">{renderTabBar()}</div>
    </div>
  );
}
