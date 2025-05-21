"use client";
import { useInsertContact } from "@/hooks/contact";
import { Modal } from "bootstrap";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function AskQuestion() {
  const { mutateAsync } = useInsertContact();
  const modalRef = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    await mutateAsync(formObject, {
      onSuccess: () => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        messageRef.current.value = "";
        const modal = Modal.getInstance(modalRef.current);
        modal.hide();
        toast("Cảm ơn quý khách đã gửi thông tin đến Roxanatech!")
      }
    });
  }
  return (
    <div
      className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
      id="ask_question"
      aria-hidden="true"
      ref={modalRef}

    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Thông tin liên hệ</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <form onSubmit={handleSubmit} className="">
              <fieldset className="">
                <label htmlFor="">Họ và tên *</label>
                <input
                  type="text"
                  placeholder=""
                  className=""
                  name="name"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  ref={nameRef}
                  required
                />
              </fieldset>
              <fieldset className="">
                <label htmlFor="">Email *</label>
                <input
                  type="email"
                  placeholder=""
                  className=""
                  name="email"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  ref={emailRef}
                  required
                  autoComplete="abc@xyz.com"
                />
              </fieldset>
              <fieldset className="">
                <label htmlFor="">Số điện thoại</label>
                <input
                  type="number"
                  placeholder=""
                  className=""
                  name="phone"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  ref={phoneRef}
                  required
                />
              </fieldset>
              <fieldset className="">
                <label htmlFor="">Ghi chú</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder=""
                  className=""
                  tabIndex={2}
                  aria-required="true"
                  required
                  ref={messageRef}
                  defaultValue={""}
                />
              </fieldset>
              <button
                type="submit"
                className="tf-btn w-100 btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
              >
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
