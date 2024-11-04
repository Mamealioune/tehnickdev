import React from "react";
import { FaCartArrowDown, FaAddressCard } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { DiHtml5Multimedia } from "react-icons/di";
import { MdMiscellaneousServices } from "react-icons/md";
const Cards = () => {
  return (
    <div className="flex">
      <div class="grid grid-cols-4 gap-8 p-8 md:p-16 bg-brand shadow-lg">
        {/* Première carte */}
        <div
          title="Cartes de Visites"
          class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-4 border-blue-800 rounded-xl text-blue-800 transform transition duration-500 hover:scale-110"
        >
          <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-blue-800">
            <FaAddressCard className="w-7 h-7 fill-white" />
          </span>
          <h2 className="my-1 gradient-red text-xl font-bold uppercase tracking-wide">
            Cartes de Visite
          </h2>
          <p className="py-2 text-center text-4sm font-bold">
            Ce qui rend nos cartes de visite extraordinaires, c'est que nos
            designs sont, pour la plupart, animés, magnifiques et réactifs, ce
            qui les rend si exceptionnels.
          </p>
          <img
            src="../Images/cartes.png"
            alt="cartes de visite"
            className="w-32 h-32"
          />
        </div>

        {/* Deuxième carte */}
        <div
          title="Sites Webs"
          class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-4
         border-blue-800 rounded-xl text-blue-800 transform transition duration-500 hover:scale-110"
        >
          <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              class="w-7 h-7 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </span>
          <h2 class="my-1 gradient-red text-xl font-bold uppercase tracking-wide">
            Sites Webs
          </h2>
          <p class="py-2 text-center text-4sm font-bold">
            Ce qui distingue notre création de sites web, c'est que nos designs
            sont avant tout dynamiques, élégants et adaptables, ce qui les rend
            si remarquables.
          </p>
          <img
            src="../Images/sites.png"
            alt="sites webs"
            className="w-32 h-32"
          />
        </div>

        {/* Troisième carte */}
        <div
          title="Multimédia"
          class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-4
         border-blue-800 rounded-xl text-blue-800  transform transition duration-500 hover:scale-110"
        >
          <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-blue-800">
            <DiHtml5Multimedia className="w-7 h-7 fill-white" />
          </span>
          <h2 class="my-1 gradient-red text-xl font-bold uppercase tracking-wide">
            Multimédia
          </h2>
          <p class="py-2 text-center text-4sm font-bold">
            Dans notre travail en multimédia, nous nous démarquons par la
            création de contenus dynamiques, visuellement saisissants et adaptés
            à toutes les plateformes, ce qui les rend véritablement uniques et
            engageants.
          </p>
          <img
            src="../Images/multimedia.png"
            alt="multimédia"
            className="w-32 h-32"
          />
        </div>

        {/* Quatrième carte */}
        <div
          title="Services à la demande"
          class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-4
         border-blue-800 rounded-xl text-blue-800 transform transition duration-500 hover:scale-110"
        >
          <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-blue-800">
            <MdMiscellaneousServices className="w-7 h-7 fill-white" />
          </span>
          <h2 class="my-1 gradient-red text-xl font-bold uppercase tracking-wide">
            Services à la demande
          </h2>
          <p class="py-2 text-center text-4sm font-bold">
          Ce qui rend notre service à la demande véritablement remarquable, c'est son approche personnalisée, sa réactivité et son adaptabilité. Nous nous engageons à fournir des solutions sur mesure, répondant aux besoins spécifiques de chaque client, ce qui en fait une expérience inégalée.
          </p>
          <img
            src="../Images/on demand.png"
            alt="service à la demande"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
