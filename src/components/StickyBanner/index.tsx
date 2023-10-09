import Link from "next/link";
import colors from "@/styles/colors";
import {
  BiLogoFacebookCircle,
  BiLogoTiktok,
  BiLogoYoutube,
  BiSolidPhoneCall,
} from "react-icons/bi";

export default function StickyBanner() {
  return (
    <div
      id="sticky-banner"
      className="top-0 left-0 z-50 sm:flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50"
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="uppercase">Hotline</span>
          <BiSolidPhoneCall color={colors.black} className="mx-2" />
          <Link href="tel: 070 619 0865" className="text-primary mr-1">
            070 619 0865
          </Link>
          <span className="hidden sm:block">| mardollstudio2022@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={"https://www.facebook.com/MardollStudio"}
          aria-label="Facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoFacebookCircle color={colors.primary} size={20} />
        </Link>
        <Link
          href={"https://www.facebook.com/MardollStudio"}
          aria-label="Youtube"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoYoutube color={colors.red2} size={20} />
        </Link>
        <Link
          href={"https://www.facebook.com/MardollStudio"}
          aria-label="Tiktok"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoTiktok size={20} />
        </Link>
      </div>
    </div>
  );
}
