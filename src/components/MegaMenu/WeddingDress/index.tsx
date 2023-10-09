"use client";

import { Divider } from "antd";

const fakeRetailWeddingDress = [
  {
    name: "Quảng Trường Quy Nhơn",
    image:
      "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "35000000",
    fromPrice: "9000000",
    toPrice: "15000000",
  },
  {
    name: "Nhà Thờ Đức Bà",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "13500000",
    fromPrice: "15000000",
    toPrice: "35000000",
  },
  {
    name: "Nhà Ga Quy Nhơn",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "13000000",
    fromPrice: "35000000",
    toPrice: "55000000",
  },
  {
    name: "Studio",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "13000000",
    fromPrice: "35000000",
    toPrice: "55000000",
  },
  {
    name: "Quảng Trường Quy Nhơn",
    image:
      "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "7500000",
    fromPrice: "65000000",
    toPrice: "90000000",
  },
];
export default function WeddingDress() {
  return (
    <div className="w-full bg-white">
      <div className="bg-center bg-cover h-[25rem] md:h-[42rem] bg-[url('https://firebasestorage.googleapis.com/v0/b/mardoll-studio.appspot.com/o/phong-su-cuoi.jpeg?alt=media&token=586a4197-4cd0-49ad-b13b-e517671bbba4')]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-6xl uppercase">
              Phóng sự ngày cưới
            </h1>
            <p className="text-2xl lg:text-3xl text-white font-serif font-normal mt-4 uppercase">
              PHOTO ALBUM | FILM
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-24 flex flex-col items-center justify-center mt-6">
        <p className="font-semibold text-2xl uppercase text-gray-900">
          PHOTO ALBUM
        </p>
        <span className="text-base font-sans my-4">
          Đồng hành cùng các cặp đôi một chặng đường dài, chúng tôi hiểu rằng
          mỗi khoảnh khắc trong ngày trọng đại đều rất ý nghĩa. Cảm xúc chân
          thật và sự tự nhiên sẽ là yếu tố quan trọng để có được bộ ảnh ngày
          cưới hoàn hảo. Mardoll Studio tin rằng ảnh và video phóng sự cưới sẽ
          là nơi lưu giữ ký ức hạnh phúc của cô dâu chú rể nhiều năm sau này.
        </span>
        <Divider />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 w-full">
          {fakeRetailWeddingDress.map((item) => {
            return (
              <div
                className="ml-2 overflow-hidden bg-cover rounded-lg cursor-pointer h-60 group"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="overlay">
                  <div className="border-animate">
                    <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white capitalize">
                      {item?.name}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-semibold text-2xl uppercase text-gray-900 my-8">
          VIDEO FILM
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <iframe
            title="Video film facebook"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMardollStudio%2Fvideos%2F218799524186281&width=360&show_text=false&appId=626080131062806&height=281"
            width="360"
            height="281"
            className="border-none overflow-hidden"
            scrolling="no"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            title="Video film facebook"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMardollStudio%2Fvideos%2F764787638567791&width=360&show_text=false&appId=626080131062806&height=281"
            width="360"
            height="281"
            className="border-none overflow-hidden"
            scrolling="no"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
