"use client";
import React, { useEffect } from "react";
import Image from "next/image";
export default function OrderDetails() {
  useEffect(() => {
    const tabs = () => {
      document.querySelectorAll(".widget-tabs").forEach((widgetTab) => {
        const titles = widgetTab.querySelectorAll(
          ".widget-menu-tab .item-title"
        );

        titles.forEach((title, index) => {
          title.addEventListener("click", () => {
            // Remove active class from all menu items
            titles.forEach((item) => item.classList.remove("active"));
            // Add active class to the clicked item
            title.classList.add("active");

            // Remove active class from all content items
            const contentItems = widgetTab.querySelectorAll(
              ".widget-content-tab > *"
            );
            contentItems.forEach((content) =>
              content.classList.remove("active")
            );

            // Add active class and fade-in effect to the matching content item
            const contentActive = contentItems[index];
            contentActive.classList.add("active");
            contentActive.style.display = "block";
            contentActive.style.opacity = 0;
            setTimeout(() => (contentActive.style.opacity = 1), 0);

            // Hide all siblings' content
            contentItems.forEach((content, idx) => {
              if (idx !== index) {
                content.style.display = "none";
              }
            });
          });
        });
      });
    };

    // Call the function to initialize the tabs
    tabs();

    // Clean up event listeners when the component unmounts
    return () => {
      document
        .querySelectorAll(".widget-menu-tab .item-title")
        .forEach((title) => {
          title.removeEventListener("click", () => {});
        });
    };
  }, []);
  return (
    <div className="wd-form-order">
      <div className="order-head">
        <figure className="img-product">
          <Image
            alt="product"
            src="/images/products/brown.jpg"
            width="720"
            height="1005"
          />
        </figure>
        <div className="content">
          <div className="badge">In Progress</div>
          <h6 className="mt-8 fw-5">Order #17493</h6>
        </div>
      </div>
      <div className="tf-grid-layout md-col-2 gap-15">
        <div className="item">
          <div className="text-2 text_black-2">Item</div>
          <div className="text-2 mt_4 fw-6">Fashion</div>
        </div>
        <div className="item">
          <div className="text-2 text_black-2">Courier</div>
          <div className="text-2 mt_4 fw-6">Ribbed modal T-shirt</div>
        </div>
        <div className="item">
          <div className="text-2 text_black-2">Start Time</div>
          <div className="text-2 mt_4 fw-6">04 September 2024, 13:30:23</div>
        </div>
        <div className="item">
          <div className="text-2 text_black-2">Address</div>
          <div className="text-2 mt_4 fw-6">
            1234 Fashion Street, Suite 567, New York
          </div>
        </div>
      </div>
      <div className="widget-tabs style-has-border widget-order-tab">
        <ul className="widget-menu-tab">
          <li className="item-title active">
            <span className="inner">Order History</span>
          </li>
          <li className="item-title">
            <span className="inner">Item Details</span>
          </li>
          <li className="item-title">
            <span className="inner">Courier</span>
          </li>
          <li className="item-title">
            <span className="inner">Receiver</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
