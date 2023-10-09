// import colors from "@/styles/colors";
// import Link from "next/link";
// import {
//   BiLogoFacebookCircle,
//   BiLogoTiktok,
//   BiLogoYoutube,
// } from "react-icons/bi";
import Link from "next/link";
import colors from "@/styles/colors";
import {
  BiLogoFacebookCircle,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 flex flex-col sm:col-span-1">
          <p className="text-lg md:text-base font-bold tracking-wide text-gray-900">
            Danh mục
          </p>
          <Link
            aria-label="Về chúng tôi"
            rel="noopener noreferrer"
            href={"/ve-chung-toi"}
            className="pb-2 leading-5 hover:text-primary text-lg md:text-base transition-colors duration-300 cursor-pointer underline text-gray-800"
          >
            Về chúng tôi
          </Link>
          <Link
            aria-label="Dịch vụ"
            rel="noopener noreferrer"
            href={"/bang-gia"}
            className="pb-2 leading-5 hover:text-primary text-lg md:text-base transition-colors duration-300 cursor-pointer underline text-gray-800"
          >
            Dịch vụ
          </Link>
          <Link
            aria-label="Váy cưới"
            rel="noopener noreferrer"
            href={"/vay-cuoi"}
            className="pb-2 leading-5 hover:text-primary text-lg md:text-base transition-colors duration-300 cursor-pointer underline text-gray-800"
          >
            Váy cưới
          </Link>
          <Link
            aria-label="Stories & Tips"
            rel="noopener noreferrer"
            href={"/bai-viet"}
            className="pb-2 leading-5 hover:text-primary text-lg md:text-base transition-colors duration-300 cursor-pointer underline text-gray-800"
          >
            Stories & Tips
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-lg md:text-base font-bold tracking-wide text-gray-900">
            Liên hệ
          </p>
          <div className="flex">
            <p className="mr-1 text-lg md:text-base text-gray-800">Phone:</p>
            <Link
              href="tel:070 619 0865"
              aria-label="070 619 0865"
              title="070 619 0865"
              rel="nofollow noreferrer"
              className="link text-lg md:text-base"
            >
              070 619 0865
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-lg md:text-base text-gray-800">Email:</p>
            <Link
              href="mailto:mardollstudio2022@gmail.com"
              aria-label="mardollstudio2022@gmail.com"
              title="mardollstudio2022@gmail.com"
              rel="nofollow noreferrer"
              className="link text-lg md:text-base"
            >
              mardollstudio2022@gmail.com
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-lg md:text-base text-gray-800">Address:</p>
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="49 Tu Mo, Quy Nhon, Vietnam"
              title="49 Tu Mo, Quy Nhon, Vietnam"
              className="link text-lg md:text-base"
            >
              49 Tu Mo, Quy Nhon, Vietnam
            </Link>
          </div>
        </div>
        <div>
          <span className="text-lg md:text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
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
        <div>
          <span className="text-lg md:text-base font-bold tracking-wide text-gray-900">
            Fanpage
          </span>
          <div className="facebook-fanpage mt-4">
            <iframe
              aria-label="Facebook fanpage"
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMardollStudio&tabs=timeline&width=440&height=440&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=626080131062806`}
              width="440"
              height="440"
              className="border-none overflow-hidden"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Mardoll Studio Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              aria-label="F.A.Q"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Privacy Policy"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Terms &amp; Conditions"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="relative z-20 bg-white px-6 pt-16 w-full">
//       <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="sm:col-span-1">
//           <p className="text-base font-bold tracking-wide text-gray-900">
//             Danh mục
//           </p>
//           <p className="hover:text-primary transition-colors duration-300 cursor-pointer underline text-gray-800">
//             <Link href={"/ve-chung-toi"}>Về chúng tôi</Link>
//           </p>
//           <p className="hover:text-primary transition-colors duration-300 cursor-pointer underline text-gray-800">
//             <Link href={"/bang-gia"}>Dịch vụ</Link>
//           </p>
//           <p className="hover:text-primary transition-colors duration-300 cursor-pointer underline text-gray-800">
//             <Link href={"/vay-cuoi"}>Váy cưới</Link>
//           </p>
//           <p className="hover:text-primary transition-colors duration-300 cursor-pointer underline text-gray-800">
//             <Link href={"/bai-viet"}>Stories & Tip</Link>
//           </p>
//         </div>
//         <div className="space-y-2 text-sm">
//           <p className="text-base font-bold tracking-wide text-gray-900">
//             Liên hệ
//           </p>
//           <div className="flex">
//             <p className="mr-1 text-gray-800">Phone:</p>
//             <a
//               href="tel:070 619 0865"
//               aria-label="Our phone"
//               title="Our phone"
//               className="text-primary"
//             >
//               070 619 0865
//             </a>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-gray-800">Email:</p>
//             <a
//               href="mailto:mardollstudio2022@gmail.com"
//               aria-label="Our email"
//               title="Our email"
//               className="text-primary"
//             >
//               mardollstudio2022@gmail.com
//             </a>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-gray-800">Address:</p>
//             <a
//               href="https://www.google.com/maps"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Our address"
//               title="Our address"
//               className="text-primary"
//             >
//               49 Tu Mo, Quy Nhon, Vietnam
//             </a>
//           </div>
//         </div>
//         <div>
//           <span className="text-base font-bold tracking-wide text-gray-900">
//             Social
//           </span>
//           <div className="flex items-center mt-1 space-x-3">
//             <Link
//               href={"https://www.facebook.com/MardollStudio"}
//               target="_blank"
//             >
//               <BiLogoFacebookCircle color={colors.primary} size={20} />
//             </Link>
//             <Link
//               href={"https://www.facebook.com/MardollStudio"}
//               target="_blank"
//             >
//               <BiLogoYoutube color={colors.red2} size={20} />
//             </Link>
//             <Link
//               href={"https://www.facebook.com/MardollStudio"}
//               target="_blank"
//             >
//               <BiLogoTiktok size={20} />
//             </Link>
//           </div>
//         </div>
//         <div>
//           <span className="text-base font-bold tracking-wide text-gray-900">
//             Fanpage
//           </span>
//           <div className="facebook-fanpage mt-4">
//             <iframe
//               src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMardollStudio&tabs=timeline&width=440&height=440&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=626080131062806`}
//               width="440"
//               height="440"
//               className="border-none overflow-hidden"
//               scrolling="no"
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
//         <p className="text-sm text-gray-600">
//           © Copyright 2023 Mardoll Studio Inc. All rights reserved.
//         </p>
//         <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
//           <li>
//             <a
//               href="/"
//               className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//             >
//               F.A.Q
//             </a>
//           </li>
//           <li>
//             <a
//               href="/"
//               className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//             >
//               Privacy Policy
//             </a>
//           </li>
//           <li>
//             <a
//               href="/"
//               className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//             >
//               Terms &amp; Conditions
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// }
