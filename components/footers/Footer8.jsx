"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { aboutLinks, footerLinks, paymentImages } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer8({ bgColor = "" }) {
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
    <footer
      id="footer"
      className={`footer has-all-border has-border-full ${bgColor}`}
    >
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-1 footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className=" fw-5">Help</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className=" fw-5">Help</h6>
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
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-2 footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className=" fw-5">About us</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className=" fw-5">About us</h6>
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
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-3 footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className=" fw-5">Find us</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className=" fw-5">Find us</h6>
                  </div>
                  <ul className="footer-menu-list tf-collapse-content">
                    <li>
                      <div className="footer-menu_item">
                        Find a location nearestyou.
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="footer-menu_item text-decoration-underline"
                      >
                        See Our Stores
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-menu_item">
                        (08) 8942 1299
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-menu_item">
                        hello@domain.com
                      </a>
                    </li>
                    <li>
                      <ul className="tf-social-icon d-flex gap-20 style-white">
                        <li>
                          <a
                            href="#"
                            className="box-icon round social-facebook "
                          >
                            <i className="icon fs-14 icon-fb" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="box-icon round social-twiter ">
                            <i className="icon fs-14 icon-Icon-x" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon round social-instagram "
                          >
                            <i className="icon fs-14 icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="box-icon round social-tiktok ">
                            <i className="icon fs-14 icon-tiktok" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon round social-pinterest "
                          >
                            <i className="icon fs-14 icon-pinterest-1" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className=" fw-5">Sign Up for Email</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className=" fw-5">Sign Up for Email</h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item">
                      Sign up to get first dibs on new arrivals, sales,
                      exclusive content, events and more!
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
                    <form
                      required
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="form-newsletter"
                      action="#"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div id="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email...."
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="tf-btn btn-sm radius-60 btn-fill btn-icon animate--hover-light_skew"
                            type="submit"
                          >
                            Subscribe
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                      <div id="subscribe-msg" />
                    </form>
                    <div className="tf-cur">
                      <div className="tf-currencies">
                        <CurrencySelect light />
                      </div>
                      <div className="tf-languages">
                        <LanguageSelect
                          parentClassName={
                            "image-select center style-default color-white type-languages"
                          }
                        />
                      </div>
                    </div>
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
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} Ecomus Store. All Rights
                    Reserved
                  </div>
                  <div className="tf-payment">
                    {paymentImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
