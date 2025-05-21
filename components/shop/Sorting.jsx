"use client";
import { productsDemo2 } from "@/data/products";
import { sortingOptions } from "@/data/shop";
import React, { useEffect, useState } from "react";

export default function Sorting({ products = productsDemo2, setFinalSorted }) {
  const [selectedOptions, setSelectedOptions] = useState(sortingOptions[0]);

  useEffect(() => {
    if (selectedOptions.key == "newest") {
      setFinalSorted([...products]);
    } 
    else if (selectedOptions.key == "A-Z") {
      setFinalSorted(
        [...products].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (selectedOptions.key == "Z-A") {
      setFinalSorted(
        [...products].sort((a, b) => b.title.localeCompare(a.title))
      );
    }
  }, [products, selectedOptions]);

  return (
    <>
      {" "}
      <div className="btn-select">
        <span className="text-sort-value">{selectedOptions.text}</span>
        <span className="icon icon-arrow-down" />
      </div>
      <div className="dropdown-menu">
        {sortingOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedOptions(item)}
            className={`select-item ${item == selectedOptions ? "active" : ""}`}
          >
            <span className="text-value-item">{item.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}
