"use client";

import {
  CloseOutlined,
  SettingOutlined,
  BellOutlined,
  ContactsOutlined,
  FileProtectOutlined,
  HomeOutlined,
  InfoOutlined,
  LoginOutlined,
  FormOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Drawer, DrawerProps, Menu } from "antd";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import type { MenuProps, MenuTheme } from "antd";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

type DrawerMenuRef = {
  onShow: () => void;
  onClose: () => void;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", "/"),
  getItem("Demos", "roxanatech-demos"),
  getItem("Dịch vụ", "roxanatech-services"),
  getItem(
    <span
      aria-label="Bảng giá"
      // onClick={handleScrollToView("roxanatech-pricing-plan")}
      className="before:content-[''] before:w-[30px] before:h-[30px] before:bg-cover before:bg-center before:absolute before:top-0 before:z-[2] before:left-[90px] before:bg-[url(/assets/icons/hot-deal.png)]"
    >
      Bảng giá
    </span>,
    "roxanatech-pricing-plan"
  ),
  getItem("Blogs", "bai-viet"),
  getItem("Liên hệ", "lien-he"),
];

const DrawerMenu: ForwardRefRenderFunction<DrawerMenuRef, DrawerProps> = (
  props,
  ref
) => {
  const pathname = usePathname();
  const router = useRouter();
  // states
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    const element = document.getElementById(e.key);
    setOpen(false);
    if (e.key === "lien-he") return router.push(`/${e.key}`);
    if (pathname !== "/lien-he" && element) {
      // 👇 Will scroll smoothly to the top of the next section
      return window.scrollTo({
        top: (element as any)?.offsetTop - 100,
        behavior: "smooth",
      });
      // return element.scrollIntoView({ behavior: "smooth" });
    }
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById(e.key);
      return window.scrollTo({
        top: (element as any)?.offsetTop - 100,
        behavior: "smooth",
      });
      // return element?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    // router.push(`/${e.key}`);
  };

  useImperativeHandle(
    ref,
    () =>
      ({
        onShow: showDrawer,
        onClose,
      }) as DrawerMenuRef,
    []
  );

  const renderExtraDrawerHeader = () => {
    return <Button onClick={onClose} icon={<CloseOutlined />}></Button>;
  };

  const renderTitleDrawerHeader = () => {
    return (
      <a className="flex title-font font-medium items-center text-gray-900">
        <Image
          src="/assets/output-onlinepngtools-1.png"
          alt="Mardoll Studio Logo"
          className="w-[100px] h-14 object-cover"
          width={90}
          height={48}
          priority
        />
      </a>
    );
  };

  return (
    <>
      <Button onClick={showDrawer} size="large" icon={<MenuOutlined />} />
      <Drawer
        className="drawer-menu"
        width={320}
        closeIcon={false}
        extra={renderExtraDrawerHeader()}
        title={renderTitleDrawerHeader()}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <Menu
          onClick={onClick}
          mode="inline"
          selectedKeys={["1"]}
          items={items}
        >
          {/* <Menu.Item key="home" onClick={() => router.push('/ve-chung-toi')}>
						<span >Về chúng tôi</span>
					</Menu.Item>
					<SubMenu title={<span>Dịch vụ</span>}>
						<Menu.Item key="dv-1"><Link href={'/bang-gia'}>Bảng giá</Link></Menu.Item>
						<Menu.Item key="dv-2"><Link href={'/chup-album-cuoi'}>Chụp Album cưới</Link></Menu.Item>
						<Menu.Item key="dv-3"><Link href={'/dich-vu-phong-su-ngay-cuoi'}>Phóng sự ngày cưới</Link></Menu.Item>
					</SubMenu>
					<Menu.Item key="vay-cuoi">
						<Link href="/vay-cuoi">Váy cưới</Link>
					</Menu.Item>
					<Menu.Item key="stories-tips">
						<Link href="/bai-viet">Stories & Tips</Link>
					</Menu.Item>
					<Menu.Item key="lien-he">
						<Link href="/lien-he">Liên hệ</Link>
					</Menu.Item> */}
        </Menu>
        {/* <div className="overflow-y-auto">
					<ul className="space-y-2 font-medium">
						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<HomeOutlined />
								<span className="flex-1 ml-3 whitespace-nowrap">Home</span>
								<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<InfoOutlined />
								<span className="ml-3">About</span>
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<FileProtectOutlined />
								<span className="ml-3">Portfolio</span>
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<ContactsOutlined />
								<span className="ml-3">Contact</span>
							</a>
						</li>

						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<BellOutlined />
								<span className="ml-3">Notification</span>
							</a>
						</li>

						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<LoginOutlined />
								<span className="ml-3">Sign In</span>
							</a>
						</li>

						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<FormOutlined />
								<span className="ml-3">Sign Up</span>
							</a>
						</li>

						<li>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:text-[#ee4c75] group">
								<SettingOutlined />
								<span className="ml-3">Settings</span>
							</a>
						</li>
					</ul>
				</div> */}
      </Drawer>
    </>
  );
};

export default forwardRef<DrawerMenuRef, DrawerProps>(DrawerMenu);

export type { DrawerMenuRef };
