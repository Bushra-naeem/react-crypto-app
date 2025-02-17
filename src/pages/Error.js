import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();
  const { message } = location.state || {
    message: "An unexpected error occurred.",
  };

  return (
    <>
      <p className="text-base sm:text-[20px] ml-3">Oops!</p>
      <p className="text-base sm:text-[20px] ml-3">
        Sorry, an unexpected error has occurred.
      </p>
      <div className="text-base sm:text-[20px] ml-3">{message}</div>
    </>
  );
};

export default Error;
