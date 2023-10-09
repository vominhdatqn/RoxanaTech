import { BiSolidCameraPlus, BiSolidHome, BiSolidContact } from "react-icons/bi";
import { GiAmpleDress } from "react-icons/gi";
import TabBarItem from "./TabBarItem";

export default function TabBar() {
  const menus = [
    // { name: 'Mardoll', icon: <BiSolidHome size={24} className="mb-1 text-gray-500 group-hover:text-primary" />, tooltip: false },
    {
      name: "Trang chủ",
      url: "/",
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
      url: "bang-gia",
      icon: (
        <BiSolidCameraPlus
          size={24}
          className="mb-1 text-gray-500 group-hover:text-primary"
        />
      ),
      tooltip: false,
    },
    {
      name: "Dịch vụ",
      url: "chup-album-cuoi",
      icon: (
        <GiAmpleDress
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
        <BiSolidContact
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
