import { isEmpty } from "lodash";
import Link from "next/link";
import React from "react";

export const BreadCrumb = ({ pageName = "" }) => {
  return (
    <>
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Trang chủ
              </Link>
              <i className="icon icon-arrow-right" />
              {!isEmpty(pageName) && <span className="text">{pageName}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="line"></div>
      </div>
    </>
  );
};
