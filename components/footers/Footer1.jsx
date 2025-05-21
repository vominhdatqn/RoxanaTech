"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

import { aboutLinks, footerLinks, paymentImages } from "@/data/footerLinks";
export default function Footer1({ bgColor = "" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-moblie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");

      parent.classList.toggle("open");
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <footer id="footer" className={`footer md-pb-70 ${bgColor}`}>
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link
                      href={`/`}
                      className="d-flex gap-2 align-items-center"
                    >
                      <Image
                        alt="image"
                        src="/images/logo/roxanatech-favicon.png"
                        width="40"
                        height="40"
                      />
                      <span
                        className="fs-28"
                        style={{
                          marginTop: "5px",
                          background:
                            "linear-gradient(to right, #2cbb00,rgb(91, 196, 30))",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          display: "inline-block",
                        }}
                      >
                        RoxanaTech
                      </span>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Địa chỉ: 87 Dương Khuê, Tân Hiệp, Tân Phú, Tp.Hồ Chí
                        Minh <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <a href="#">roxanatechcompany@gmail.com</a>
                      </p>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <p>Hotline:</p>
                      <a
                        href="tel:0329181288"
                        aria-label="0916 254 200"
                        title="0329 181 288"
                        rel="nofollow noreferrer"
                        className="text_primary"
                      >
                        0329 181 288 -
                      </a>
                      <a
                        href="tel:0921107445"
                        aria-label="0916 254 200"
                        title="0921 107 445"
                        rel="nofollow noreferrer"
                        className="text_primary"
                      >
                        0921 107 445
                      </a>
                    </li>
                  </ul>
                  <Link
                    href="https://roxanatech.com"
                    className="tf-btn btn-line"
                  >
                    Website: https://roxanatech.com
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-facebook social-line"
                      >
                        <i className="icon fs-14 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-twiter social-line"
                      >
                        <i className="icon fs-12 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-instagram social-line"
                      >
                        <i className="icon fs-14 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-tiktok social-line"
                      >
                        <i className="icon fs-14 icon-tiktok" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block open">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Dịch Vụ</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Dịch Vụ</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block open">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Giới thiệu & Báo giá</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Giới thiệu & Báo giá</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {aboutLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block open">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Fanpage</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>Fanpage</h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item facebook-fanpage">
                      <iframe
                        aria-label="Facebook fanpage"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100080538728930&tabs=timeline&width=440&height=460&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=626080131062806"
                        width="300"
                        height="200"
                        className="border-none overflow-hidden"
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                      className={`tfSubscribeMsg ${
                        showMessage ? "active" : ""
                      }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          You have successfully subscribed.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    {/* <form
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="form-newsletter subscribe-form"
                      action="#"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div className="subscribe-content">
                        <fieldset className="email">
                          <input
                            required
                            type="email"
                            name="email"
                            className="subscribe-email"
                            placeholder="Enter your email...."
                            tabIndex={0}
                            aria-required="true"
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="subscribe-button tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                            type="submit"
                          >
                            Subscribe
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                      <div className="subscribe-msg" />
                    </form> */}
                    {/* <div className="tf-cur">
                      <div className="tf-currencies">
                        <CurrencySelect />
                      </div>
                      <div className="tf-languages">
                        <LanguageSelect />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex flex-wrap justify-content-center align-items-center">
                  <div className="footer-menu_item">
                    © 2023 RoxanaTech. All Rights Reserved
                  </div>
                  {/* <div className="tf-payment">
                    {paymentImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
