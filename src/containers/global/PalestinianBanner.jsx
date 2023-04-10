import React from "react";

const Banner = ({ setShowModal }) => {
  return (
    <div
      className="bg-red-500 text-white py-2 text-center cursor-pointer"
      onClick={() => setShowModal(true)}
    >
      Stand in support with the Palestinian 🇵🇸 cause!
    </div>
  );
};

export default Banner;
