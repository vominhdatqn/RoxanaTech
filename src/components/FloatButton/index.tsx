"use client";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Button } from "antd";
import Link from "next/link";
import { BiArrowFromBottom, BiPhoneCall } from "react-icons/bi";

export default function FloatButton() {
  const { isVisible, scrollToTop } = useScrollToTop();
  const handleCallClick = () => {
    const phoneNumber = "+84916254200";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      {/* <div className="absolute w-[60px] h-[40px] bg-green-500" /> */}
      <div className="fixed z-50 bottom-[140px] right-8 bg-white rounded overflow-hidden shadow-xl">
        <div className="fixed bottom-[190px] right-9 z-50">
          {isVisible ? (
            <Button
              aria-label='Scroll to top"'
              onClick={scrollToTop}
              type="primary"
              shape="circle"
              icon={
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
              }
            />
          ) : null}
        </div>
        <ul className="divide-y divide-gray-300">
          {/* <li className="hover:bg-[#0080F7] p-1">
            <SiZalo size={30} className="text-primary hover:text-white" />
          </li> */}
          {/* <li className="hover:bg-[#0080F7] p-1">
            <BiSolidMessageRoundedDots
              size={30}
              className="text-primary hover:text-white"
            />
          </li> */}
          <li className="hover:bg-[#2CBB00] p-1" onClick={handleCallClick}>
            <BiPhoneCall
              size={30}
              className="text-[#2CBB00] hover:text-white"
            />
          </li>
          {/* <li className="hover:bg-[#2CBB00] p-1">
            <a
              href="tel:0916 254 200"
              aria-label="0916 254 200"
              title="0916 254 200"
              rel="nofollow noreferrer"
            >
              <BiPhoneCall
                size={30}
                className="text-[#2CBB00] hover:text-white"
              />
            </a>
          </li> */}
        </ul>
      </div>
    </>
    // 		<span className='fixed z-50 bottom-20 right-8 justify-center items-center text-white text-4xl flex h-16 w-16'>
    //         <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
    //         <Image
    //           src='/assets/icons/phone_icon.png'
    //           alt='Zalo'
    //           width={48}
    //           height={48}
    //         />
    //       </span>
    // <span className='fixed z-50 bottom-[140px] right-8 justify-center items-center text-white text-4xl flex h-16 w-16'>
    //         <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
    //         <Image
    //           src='/assets/icons/messager_icon.png'
    //           alt='Zalo'
    //           width={48}
    //           height={48}
    //         />
    //       </span>
    // <span className='fixed z-50 bottom-[200px] right-8 justify-center items-center text-white text-4xl flex h-16 w-16'>
    //         <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
    //         <Image
    //           src='/assets/icons/zalo_icon.png'
    //           alt='Zalo'
    //           width={48}
    //           height={48}
    //         />
    //       </span>
  );
}
