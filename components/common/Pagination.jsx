"use client";
import { useGetDemos } from "@/hooks/demos";
import { firestore } from "@/lib/firebase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductGrid from "../shop/ProductGrid";

// Giả sử đây là dữ liệu của bạn

export default function Pagination({ allproducts, gridItems }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;
  const itemsPerPage = searchParams.get("itemsPerPage") || 12;

  const supabase = useSupabaseClient();

  // State để theo dõi trang hiện tại
  const [activePage, setActivePage] = useState(page);

  const { data, isLoading } = useGetDemos(supabase, page, itemsPerPage);

  // Tính toán số trang cần thiết
  const totalPages = Math.ceil(data?.total / itemsPerPage);

  // Hàm xử lý khi người dùng click vào trang
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber);

    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      {/* Phần pagination */}
      <ProductGrid
        data={data?.demos}
        gridItems={gridItems}
        isLoading={isLoading}
      />
      <ul className="tf-pagination-wrap tf-pagination-list">
        <ul className="pagination">
          {/* Trang trước */}
          <li>
            <a
              onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
              className="pagination-link animate-hover-btn"
            >
              <span className="icon icon-arrow-left" />
            </a>
          </li>

          {/* Các trang */}
          {[...Array(totalPages)].map((_, index) => {
            return (
              <li
                key={index}
                className={activePage == index + 1 ? "active" : ""}
              >
                <a
                  className="pagination-link animate-hover-btn"
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}

          {/* Trang sau */}
          <li>
            <a
              onClick={() =>
                setActivePage((prev) => Math.min(prev + 1, totalPages))
              }
              className="pagination-link animate-hover-btn"
            >
              <span className="icon icon-arrow-right" />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}
