"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
export default function ProductCard15({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const slide = product;
  return (
    <div
      className="card-product style-price bg_grey-12 radius-10 overflow-hidden"
    // className={` ${product.populer
    //   ? "card-product style-price bg_blue-6 radius-10 overflow-hidden "
    //   : "card-product style-price bg_grey-12 radius-10 overflow-hidden"
    //   }`}
    >
      <div className="card-product-wrapper rounded-0">
        <div
          className={`list-product-btn absolute-2 ${!product.populer ? "" : ""
            }`}
        >
          <a
            href="#quick_add"
            onClick={() => setQuickAddItem(slide.id)}
            data-bs-toggle="modal"
            className="box-icon quick-add tf-btn-loading"
          >
            <span className="icon icon-bag" />
            <span className="tooltip">Quick Add</span>
          </a>
          <a
            onClick={() => addToWishlist(slide.id)}
            className="box-icon wishlist btn-icon-action"
          >
            <span
              className={`icon icon-heart ${isAddedtoWishlist(slide.id) ? "added" : ""
                }`}
            />
            <span className="tooltip">
              {isAddedtoWishlist(slide.id)
                ? "Already Wishlisted"
                : "Add to Wishlist"}
            </span>
            <span className="icon icon-delete" />
          </a>
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
            onClick={() => addToCompareItem(product.id)}
            className="box-icon compare btn-icon-action"
          >
            <span
              className={`icon icon-compare ${isAddedtoCompareItem(product.id) ? "added" : ""
                }`}
            />
            <span className="tooltip">
              {" "}
              {isAddedtoCompareItem(product.id)
                ? "Already Compared"
                : "Add to Compare"}
            </span>
            <span className="icon icon-check" />
          </a>
          <a
            href="#quick_view"
            onClick={() => setQuickViewItem(slide)}
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
          >
            <span className="icon icon-view" />
            <span className="tooltip">Quick View</span>
          </a>
        </div>
        <div className="on-sale-wrap text-end">
          <div
            className={`on-sale-item  fw-7 fs-12 
              ${product.populer ? "best-seller" : ""} 
              ${product.new ? "new" : ""} 
              ${product.recommend ? "recommend" : ""} 
            `}
          >
            {" "}
            {product.populer ? "Best Seller !" : ""}
            {product.recommend ? "Recommend !" : ""}
            {product.new ? "New !" : ""}
          </div>
        </div>
      </div>
      <div className="card-product-info">
        {/* <Link href={`/shop-collection-list`} className="vendor fw-7 link">
          {slide.vendor}
        </Link> */}
        <span
          // href={`/product-detail/${product.id}`}
          className="text-center h3 fw-7 link lh-base"
        >
          {slide.title}
        </span>
        <div className="price text-center text_red-1">{slide.price}đ</div>
      </div>
      <div className="tf-price-table-contents">
        <ul>
          {slide.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="fw-5 fs-16">
              <i className="icon icon-check text-success" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="tf-price-table-btn text-center">
          <Link
            href={`/product-detail/${product.id}`}
            className={"tf-btn btn-md radius-3 fw-7 btn-icon animate-hover-btn bg_white"}
          // className={` ${product.populer
          //   ? "tf-btn btn-md radius-3 fw-7 btn-icon animate-hover-btn bg_white"
          //   : "tf-btn btn-md radius-3 fw-7 bg_blue-6 btn-fill btn-icon animate-hover-btn"
          //   }`}
          >
            Liên Hệ Tư Vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
