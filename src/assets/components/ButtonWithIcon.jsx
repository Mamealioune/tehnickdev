import React from "react";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
const ButtonWithIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-700  hover:bg-blue-500 text-white font-bold py-5 px-5 rounded-lg transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>
            <span className="mr-1 ">Je Découvre vos Offres</span>
            <FaArrowRight className="inline-block align-middle" />
          </>
        ) : (
          "Je Découvre vos Offres"
        )}
      </button>
    </div>
  );
};

export default ButtonWithIcon;
