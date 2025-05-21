"use client";

import { productsDemo2 } from "@/data/products";
import React from "react";
import { ProductCard } from "../shopCards/ProductCard";
import Productcard23 from "../shopCards/Productcard23";
import { useGetDemos } from "@/hooks/demos";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { map } from "lodash";

export default function ProductGrid({
  gridItems = 4,
  data,
  total,
  isLoading
}) {

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div
        style={{
          width: "fit-content",
          margin: "0  auto",
          fontSize: "17px",
          marginBottom: "24px",
        }}
      >
        {total} Mẫu Giao Diện
      </div>
      <div className="grid-layout wrapper-shop" data-grid={`grid-${gridItems}`}>
        {map(data, (elm, i) => (
          <ProductCard product={elm} key={i} />
        ))}
      </div>
      {/* {gridItems == 1 ? (
        <div className="grid-layout" data-grid="grid-list">
          {allproducts.map((elm, i) => (
            <Productcard23 product={elm} key={i} />
          ))}
        </div>
      ) : (
        <div
          className="grid-layout wrapper-shop"
          data-grid={`grid-${gridItems}`}
        >
          {allproducts.map((elm, i) => (
            <ProductCard product={elm} key={i} />
          ))}
        </div>
      )} */}
    </>
  );
}
