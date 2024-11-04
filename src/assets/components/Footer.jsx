// Footer.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase  text-white font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                Acceuil
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                Qui sommes Nous?
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                Technik.dev suites
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                Catalogue
              </a>
            </li>
          </ul>
        </div>
        <div class="p-5 sm:w-7/12 border-r text-center">
          <h3 class="font-bold text-xl text-indigo-600 mb-4">Rejoignez Nous</h3>
          <p class="text-gray-500 text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        {/* Autres sections du Footer */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-white font-bold">
            Contacter Nous
          </div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                Sénégal, Thiès, Tivaouane
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600 text-white" href="#">
                officialtechnikdev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Section des réseaux sociaux */}
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-2">
          {/* Icônes des réseaux sociaux */}
          <a href="#" className="w-6 mx-1">
            <FaFacebook className="fill-white w-12 h-12" />
          </a>
          <a href="#">
            <IoLogoInstagram className="fill-white w-12 h-12" />
          </a>
          <a href="#">
            <FaLinkedinIn className="fill-white w-12 h-12" />
          </a>
          {/* Ajoutez d'autres icônes de réseaux sociaux ici */}
        </div>
        <div className="my-5 text-white">
          © Copyright Technik.dev 2024. Tout les droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
