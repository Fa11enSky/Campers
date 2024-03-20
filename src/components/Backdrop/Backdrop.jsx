import React, { useEffect } from "react";

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

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [close]);

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(17, 18, 19, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
