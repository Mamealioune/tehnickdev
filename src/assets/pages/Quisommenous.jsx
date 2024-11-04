import React from "react";
import Navbar from "../components/Navbar";
import { IoMdCall } from "react-icons/io";

const Quisommenous = () => {
  return (
    <div style={{ position: "relative" }}>
          <div className="flex gap-2 items-center justify-center h-10 w-auto shadow-lg bg-slate-300 ">
        <IoMdCall className="w-6 h-6 fill-sky-600 hover:fill-sky-300 ease-in-out cursor-pointer" />
        <p className="text-sky-700 font-bold text-center md:text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mx-0">
          Contacter nous sur nos reseaux - +221 78 119 74 33 | Technik.dev -
          Plus qu'une solution, une expérience numérique
        </p>
      </div>
      <Navbar />
      <div style={{ position: "relative" }}>
        <img src="../Images/1.jpg" alt="" className="w-screen h-[600px]" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // ajustez le 0.5 pour l'opacité souhaitée
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // assure que le texte est au-dessus de l'overlay
          }}
          className="text-slate-50 text-7xl font-titillium"
        >
          Qui Sommes Nous?
        </h1>
      </div>
      <h1 className="font-bold text-2xl mt-4 ml-24 font-titillium">A Propos</h1>
      <div className="flex flex-row items-center justify-center ">
        <p className="my-4 ml-24 font-titillium ">
          <span className="mb-2 block">
            Bienvenue chez Technik.dev, votre partenaire privilégié dans le
            monde des services informatiques. Chez Technik.dev, nous nous
            engageons à fournir des solutions technologiques innovantes et sur
            mesure pour répondre aux besoins uniques de votre entreprise. Que
            vous recherchiez des services de développement logiciel, de
            consultation en informatique, de gestion de projet ou
            d'infrastructure informatique, notre équipe expérimentée est là pour
            vous accompagner à chaque étape.
          </span>
          <span className="mb-2 block">
            Chez Technik.dev, nous croyons fermement à la puissance de la
            technologie pour transformer votre entreprise et ouvrir de nouvelles
            opportunités. Nous nous efforçons de rester à la pointe des
            dernières tendances technologiques et des meilleures pratiques de
            l'industrie afin de garantir que nos clients bénéficient des
            solutions les plus efficaces et les plus innovantes.
          </span>
          <span className="mb-2 block">
            Notre approche centrée sur le client signifie que nous travaillons
            en étroite collaboration avec vous pour comprendre vos défis
            spécifiques et élaborer des solutions qui répondent précisément à
            vos besoins. Que vous soyez une start-up en pleine croissance ou une
            entreprise établie, nous sommes là pour vous aider à réussir dans un
            monde de plus en plus numérique. Faites confiance à Technik.dev pour
            vous fournir les services informatiques de haute qualité dont vous
            avez besoin pour prospérer dans l'économie numérique d'aujourd'hui.
            Découvrez dès maintenant comment nous pouvons transformer votre
            vision en réalité technologique.
          </span>
        </p>

        <img
          src="../Images/2.jpg"
          alt=""
          className="w-full md:w-3/5 lg:w-1/2 px-4 mr-24"
        />
      </div>
    </div>
  );
};

export default Quisommenous;
