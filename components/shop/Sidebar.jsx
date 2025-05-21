"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { categories } from "@/data/categories";
import { socialLinks } from "@/data/socials";
import { productsDemo2 } from "@/data/products";

const brands = [
  "Thời trang",
  // "Kiến trúc",
  "Studio",
  "Bất động sản",
  "Thực phẩm",
  "Giáo dục",
  "Y tế",
  "Mỹ phẩm",
  "Nông nghiệp",
  "Spa",
  "Thực phẩm chức năng",
  // "Vận tải",
  "Nội thất",
  "Dịch vụ",
];
const listCategories = [
  "Bridal Studio",
  "Thú Cưng",
  "Nhà Sách - Kids",
  "Giày Dép",
  "Ngành Nail - Spa",
  "Xe Máy",
  "Ngành Nhựa - Nhôm",
  "Bao Bì, Quảng Cáo, In Ấn",
  "Nông - Thuỷ Sản",
  "Quà Tết - Pháo Hoa - Shop Hoa",
  "Ô TÔ",
  "Khách Sạn",
  "Nhà Hàng - Ăn Uống",
  "Decor - Xây Dựng",
  "Nha Khoa",
  "Web Giới Thiệu",
  "Web Tin Tức",
  "Di Động - Điện Tử - Điện Máy",
  "Công Cụ Xây Dựng",
];
// const brands = ["Ecomus", "M&H"];

export default function Sidebar({ setProducts, products = productsDemo2 }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleSelectBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((pre) => [...pre.filter((el) => el != brand)]);
    } else {
      setSelectedBrands((pre) => [...pre, brand]);
    }
  };
  useEffect(() => {
    let filteredArrays = [];

    if (selectedBrands.length) {
      filteredArrays = [
        ...filteredArrays,
        [...products.filter((elm) => selectedBrands.includes(elm.brand))],
      ];
    }

    const commonItems = products.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setProducts(commonItems);
  }, [selectedBrands, products]);
  return (
    <aside className="tf-shop-sidebar wrap-sidebar-mobile">
      <div className="widget-facet wd-categories">
        <div
          className="facet-title"
          data-bs-target="#categories"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="categories"
        >
          <span>Danh mục</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="brand" className="collapse show">
          <ul className="tf-filter-group current-scrollba_2 mb_36">
            {brands.map((brand) => (
              <li
                key={brand}
                className="list-item d-flex gap-12 align-items-center"
                onClick={() => handleSelectBrand(brand)}
              >
                <input
                  type="radio"
                  className="tf-check"
                  readOnly
                  checked={selectedBrands.includes(brand)}
                />
                <label className="label">
                  <span>{brand}</span>&nbsp;
                  <span>
                    ({products.filter((elm) => elm.brand == brand).length})
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#sale-products"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="sale-products"
        >
          <span>Danh mục khác </span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="sale-products" className="collapse show">
          <div className="widget-featured-category mb_36">
            {listCategories.map((item, index) => (
              <div className="button-submit" key={index}>
                <button className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
                  {item}
                  <i className="icon icon-arrow1-top-left" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#sale-products"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="sale-products"
        >
          <span>Giao diện tiêu biểu </span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="sale-products" className="collapse show">
          <div className="widget-featured-products mb_36">
            {featuredProducts.map((product, index) => (
              <div className="featured-product-item" key={index}>
                <Link
                  href={`/product-detail/${product.id}`}
                  className="card-product-wrapper"
                >
                  <Image
                    className="lazyload img-product"
                    alt="image-feature"
                    src={product.imgSrc}
                    width={350}
                    height={120}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#follow"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="follow"
        >
          <span>Follow us</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="follow" className="collapse show">
          <ul className="tf-social-icon d-flex gap-10">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`box-icon w_34 round bg_line ${link.className}`}
                >
                  <i className={`icon ${link.iconSize} ${link.iconClass}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </aside>
  );
}
