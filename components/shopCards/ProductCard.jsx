"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import CountdownComponent from "../common/Countdown";
export const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.img);
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  useEffect(() => {
    setCurrentImage(product.img);
  }, [product]);

  return (
    <div className="card-product fl-item" key={product.id}>
      <div className="card-product-wrapper_2">
        {/* <Link href={`/product-detail/${product.id}`} className="product-img"> */}
        {product.img ? (
          <Image
            className="lazyload img-product"
            data-src={product?.img}
            src={currentImage}
            alt="image-product"
            width={720}
            height={1005}
          />
        ) : (
          <></>
        )}

        {/* <Image
            className="lazyload img-hover"
            data-src={
              product.imgHoverSrc ? product.imgHoverSrc : product.imgSrc
            }
            src={product.imgHoverSrc ? product.imgHoverSrc : product.imgSrc}
            alt="image-product"
            width={720}
            height={1005}
          /> */}
        {/* </Link> */}
        {product.soldOut ? (
          <div className="sold-out">
            <span>Sold out</span>
          </div>
        ) : (
          <>
            <div className="list-product-btn">
              <Link
                href={`/mau-giao-dien/${product.slug}`}
                className="tf-btn btn-primary animate-hover-btn radius-60 bg_red-1 box-icon text-center"
              >
                <span>Xem chi tiết</span>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.slug}`}
          className="title link text-center"
        >
          {product.title}
        </Link>
      </div>
    </div>
  );
};
