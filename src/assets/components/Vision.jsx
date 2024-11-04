import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Vision = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blue-700 mt-6 px-4 py-2 rounded-full  tracking-wide text-white"
        >
          <span class="">
            <MdOutlineKeyboardArrowDown className="h-8 w-8" />
          </span>
        </a>
      </div>
      <div class="text-center p-8">
        <h1 className="text-5xl font-titillium text-blue-700 text-center mt-6">
          Pourquoi nous ?
        </h1>

        <div className="flex flex-wrap items-center mt-20 text-left ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../Images/vision.jpg"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Notre Vision de l'innovation
            </h3>
            <p class="sm:text-lg mt-6">
              Chez Technik.dev, notre vision de l'innovation se reflète à
              travers chaque solution informatique que nous proposons. Nous
              croyons fermement que l'innovation est le moteur du progrès, et
              c'est pourquoi nous nous engageons à repousser sans cesse les
              limites de ce qui est possible dans le domaine de la technologie.
              En offrant des solutions informatiques qui allient créativité,
              expertise et vision stratégique, nous visons à transformer les
              défis complexes en opportunités tangibles pour nos clients. Que ce
              soit en développant des applications sur mesure, en concevant des
              sites web dynamiques ou en fournissant des conseils stratégiques
              en matière de transformation numérique, nous nous efforçons d'être
              à l'avant-garde de l'innovation technologique. Notre passion pour
              l'excellence et notre engagement envers la satisfaction du client
              nous poussent à constamment repousser les frontières de ce qui est
              possible, créant ainsi un avenir où les possibilités
              technologiques sont infinies.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../Images/4.jpg"
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Notre engagement envers l'excellence
            </h3>
            <p className="sm:text-lg mt-6">
              En plus de notre vision de l'innovation, un autre aspect qui
              incite les clients à choisir Technik.dev est notre engagement
              envers l'excellence opérationnelle et la qualité de service. Nous
              nous efforçons constamment de fournir une expérience client
              exceptionnelle à chaque étape de leur parcours avec nous. Cela se
              traduit par une écoute attentive de leurs besoins, une
              communication transparente et efficace, ainsi que par la livraison
              de solutions informatiques de haute qualité dans les délais
              convenus. De plus, notre approche centrée sur le client se reflète
              dans notre flexibilité à nous adapter aux besoins spécifiques de
              chaque projet et à fournir un support continu même après la mise
              en œuvre des solutions. En choisissant Technik.dev, nos clients
              peuvent être assurés de bénéficier non seulement d'innovation,
              mais aussi d'une collaboration fiable et axée sur les résultats
              pour atteindre leurs objectifs commerciaux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
