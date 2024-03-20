import React, { useEffect } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";

const Backdrop = ({ children, close }) => {
  const handleClick = (event) => {
    if (event.currentTarget === event.target) {
      close();
    }
  };
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        close();
      }
    };
    document.querySelector("body").classList.add("lock");
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.querySelector("body").classList.remove("lock");

      window.removeEventListener("keydown", handleKeydown);
    };
  }, [close]);

  return (
    <ModalPortal>
      <div
        onClick={handleClick}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(17, 18, 19, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          overflowY: "hidden",
        }}
      >
        {children}
      </div>
    </ModalPortal>
  );
};

export default Backdrop;
