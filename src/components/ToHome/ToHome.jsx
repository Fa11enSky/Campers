import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div>
      <p>not path</p>
    </div>
  );
};

export default ToHome;
