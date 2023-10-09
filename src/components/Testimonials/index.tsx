// import CustomCarousel from '../CustomCarousel';

// export default function Testimonials() {
// 	return (
// 		<div className='py-16 bg-white text-center px-5'>
// 			<h2 data-aos="fade-down" className='leading-8 uppercase font-dmserif'>Nhận xét về Mardoll Studio</h2>
// 			<div className='w-24 border-t border-gray-500 mx-auto text-center divide-x mt-3' />
// 			<div className='relative pt-6'>
// 				<CustomCarousel autoplay dots={false}>
// 					<div
// 						className="bg-white text-center"
// 					>
// 						<p
// 							className="mx-auto max-w-4xl text-xl italic text-neutral-700">
// 							"Giá cả tại Mardoll Studio rất hợp túi tiền cũng như chất lượng phục vụ rất tốt!"
// 						</p>
// 						<div className="mb-6 mt-12 flex justify-center">
// 							<img
// 								src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
// 								className="h-24 w-24 rounded-full shadow-lg "
// 								alt="smaple image" />
// 						</div>
// 						<p className="text-neutral-500">Đoàn Thị Kim Khoa</p>
// 					</div>
// 					<div
// 						className="bg-white text-center"
// 					>
// 						<p
// 							className="mx-auto max-w-4xl text-xl italic text-neutral-700">
// 							"Tôi đã sử dụng dịch vụ của Mardoll Studio thực sự tôi rất thích cách làm việc chuyên nghiệp của studio tại đây!"
// 						</p>
// 						<div className="mb-6 mt-12 flex justify-center">
// 							<img
// 								src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
// 								className="h-24 w-24 rounded-full shadow-lg "
// 								alt="smaple image" />
// 						</div>
// 						<p className="text-neutral-500">Võ Minh Đạt</p>
// 					</div>

// 				</CustomCarousel>
// 			</div>
// 		</div>

// 	)
// }

import Image from "next/image";
import CustomCarousel from "../CustomCarousel";
import { ReviewerType } from "@/model/HomePageModel";

export default function Testimonials({
  data = [],
  titleReviewer = "",
}: {
  data?: ReviewerType[];
  titleReviewer?: string;
}) {
  return (
    <div className="py-16 bg-white text-center px-5">
      <h2 data-aos="fade-down" className="leading-8 uppercase font-dmserif">
        {titleReviewer}
      </h2>
      <div className="w-24 border-t border-gray-500 mx-auto text-center divide-x mt-3" />
      <div className="relative pt-6">
        <CustomCarousel autoplay dots={false}>
          {data?.map((item, index) => {
            return (
              <div className="bg-white text-center">
                <p className="mx-auto max-w-4xl text-xl italic text-neutral-700">
                  {item?.content}
                </p>
                <div className="mb-6 mt-12 flex justify-center">
                  <div className="rounded-full overflow-hidden h-24 w-24">
                    <Image
                      // src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      src={
                        item?.url ||
                        "https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      }
                      alt={item?.alt}
                      quality={100}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <img
                  src='https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  className='h-24 w-24 rounded-full shadow-lg '
                  alt='smaple image'
                /> */}
                </div>
                <p className="text-neutral-500">{item?.userName}</p>
              </div>
            );
          })}
          {/* <div className="bg-white text-center">
            <p className="mx-auto max-w-4xl text-xl italic text-neutral-700">
              "Tôi đã sử dụng dịch vụ của Mardoll Studio thực sự tôi rất thích
              cách làm việc chuyên nghiệp của studio tại đây!"
            </p>
            <div className="mb-6 mt-12 flex justify-center">
              <div className="rounded-full overflow-hidden h-24 w-24">
                <Image
                  src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="User comment"
                  quality={100}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src='https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                className='h-24 w-24 rounded-full shadow-lg '
                alt='smaple image'
              />
            </div>
            <p className="text-neutral-500">Võ Minh Đạt</p>
          </div> */}
        </CustomCarousel>
      </div>
    </div>
  );
}
