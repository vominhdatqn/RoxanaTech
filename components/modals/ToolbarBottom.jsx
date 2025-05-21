import React from "react";
import Link from "next/link";
import CartLength from "../common/CartLength";
import WishlistLength from "../common/WishlistLength";
export default function ToolbarBottom() {
  return (
    <div className="tf-toolbar-bottom type-1150">
      <div className="toolbar-item active">
        <Link href="/">
          <div className="toolbar-icon">
            <i className="icon-shop" />
          </div>
          <div className="toolbar-label">Trang chủ</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <Link href="/mau-giao-dien">
          <div className="toolbar-icon">
            <i className="icon-experienced" />
          </div>
          <div className="toolbar-label">Giao Diện</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <Link href="/thiet-ke-website">
          <div className="toolbar-icon">
            <i className="icon-shopping" />
          </div>
          <div className="toolbar-label">Dịch vụ</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <Link href="#ask_question" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-premium-support" />
          </div>
          <div className="toolbar-label">Liên hệ</div>
        </Link>
      </div>
      {/* <div className="toolbar-item">
        <a href="#shoppingCart" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-bag" />
            <div className="toolbar-count">
              <CartLength />
            </div>
          </div>
          <div className="toolbar-label">Cart</div>
        </a>
      </div> */}
    </div>
  );
}
