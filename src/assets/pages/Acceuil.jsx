import React from "react";
import { IoMdCall } from "react-icons/io";
import Bannieruser from "../components/Bannieruser";
import ButtonWithIcon from "../components/ButtonWithIcon";

import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";
import Trustclients from "../components/Trustclients";

import Vision from "../components/Vision";

const Acceuil = () => {
  const slides = [
    { url: "../Images/1.jpg" },
    { url: "../Images/2.jpg" },
    { url: "../Images/3.jpg" },
    { url: "../Images/4.jpg" },
  ];

  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  return (
    <div>
      
      <div className="flex gap-2 items-center justify-center h-10 w-auto shadow-lg bg-slate-300 ">
        <IoMdCall className="w-6 h-6 fill-sky-600 hover:fill-sky-300 ease-in-out cursor-pointer" />
        <p className="text-sky-700 font-bold text-center md:text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mx-0">
          Contacter nous sur nos reseaux - +221 78 119 74 33 | Technik.dev -
          Plus qu'une solution, une expérience numérique
        </p>
      </div>
      <Navbar />

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Bannieruser />
      <br />
      <div className="w-full h-72 bg-brand flex justify-center items-center flex-col ">
        <h1 className="text-white text-4xl font-titillium font-bold ">
          Une boite qui vous aide à concevoir vos branding et gerer votre
          bussiness
        </h1>
        <span className="text-white text-xl font-titillium font-semibold">
          Avec nous, votre entreprise aura une meilleure image et une présence
          digitale optimale pour atteindre ses objectifs{" "}
        </span>
      </div>
      <Vision />
      <Projets />
      <Cards />
      <Trustclients />

      <div className="relative bg-center bg-no-repeat bg-[url('../Images/innov.jpg')] bg-fixed w-full h-96 flex justify-center items-center flex-col">
        {/* Superposition semi-transparente */}
        <div className="absolute inset-0 bg-black opacity-50 "></div>

        <div className="relative z-10 text-center text-white flex justify-center items-center flex-col">
          <p className="w-9/12 text-4xl font-titillium">
            Qu'attendez-vous ? Transmutez votre vision en une réalité mémorable
            avec notre savoir-faire en branding. Rejoignez-nous pour forger une
            identité qui saisira votre public et propulsera votre entreprise
            vers l'excellence !
          </p>
          <br />
          <ButtonWithIcon />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Acceuil;
