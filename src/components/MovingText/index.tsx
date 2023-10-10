import React from "react";
import "../../styles/components/_movingText.scss";
import LogoList from "../LogoList";

interface IMovingText {
  text?: string;
}
export default function MovingText({ text }: IMovingText) {
  return (
    <div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <div className="cs-moving_text_in">
        {/* <div className="cs-moving_text">{text}</div> */}
        <div className="cs-moving_text">
          <LogoList />
        </div>
        <div className="cs-moving_text">
          <LogoList />
        </div>
        <div className="cs-moving_text">
          <LogoList />
        </div>
        {/* <div className="cs-moving_text">{text}</div> */}
      </div>
    </div>
  );
}
