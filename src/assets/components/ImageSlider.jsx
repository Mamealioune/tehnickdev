import React, { useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ButtonWithIcon from "./ButtonWithIcon";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
     
      <MdOutlineArrowBackIos
        className="absolute top-1/2 left-6 text-white text-4xl cursor-pointer transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevious}
        style={{ zIndex: 1 }}
      />
      <MdOutlineArrowForwardIos
        className="absolute top-1/2 right-6 text-white text-4xl cursor-pointer transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
        style={{ zIndex: 1 }}
      />
      <div className="h-full w-full flex justify-center items-center">
        <div
          className="w-full h-screen flex flex-col justify-center items-center text-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[currentIndex].url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-6xl font-titillium">Branding</h1>
          <p className="w-9/12 text-4xl font-titillium">
            Transformez votre vision en une réalité inoubliable avec notre
            expertise en branding. Rejoignez-nous dès maintenant pour créer une
            identité qui captivera votre audience et propulsera votre entreprise
            vers de nouveaux sommets!
          </p><br />
          
         <ButtonWithIcon/>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
