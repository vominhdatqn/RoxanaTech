import React from "react";

const FloatPhoneCall = () => {
  return (
    <a
      href="https://zalo.me/0329181288"
      target="_blank"
      className="position-fixed end-0 m-4 z-3 call-wrapper"
    >
      <div className="ping-ring"></div>
      <div className="call-button d-flex justify-content-center align-items-center">
        <img
          src="/images/icon/zalo-icon.png"
          alt="Phone"
          style={{ height: 30, width: 30 }}
        />
      </div>

      <style jsx>{`
        .call-wrapper {
          width: 48px;
          height: 48px;
          bottom: 200px;
        }

        .call-button {
          width: 48px;
          height: 48px;
          background-color: white;
          border-radius: 50%;
          position: relative;
          z-index: 10;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s;
        }

        .ping-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 48px;
          height: 48px;
          background-image: linear-gradient(120deg, #2cbb01, #f16934);

          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ping 1.5s infinite;
          z-index: 1;
        }

        @keyframes ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          80% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </a>
  );
};

export default FloatPhoneCall;
