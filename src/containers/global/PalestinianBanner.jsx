import React from "react";

const Banner = ({ setShowModal, message }) => {
  return (
    <div
      className="bg-red-500 text-white py-2 text-center cursor-pointer"
      onClick={() => setShowModal(true)}
    >
      {message} Ceasefire now! 🇵🇸
    </div>
  );
};

export default Banner;
