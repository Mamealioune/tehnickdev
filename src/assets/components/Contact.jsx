import React from "react";

const Contact = () => {
  return (
    <>
    <div className="w-screen h-auto bg-slate-100">
      <h1 className="text-4xl font-titillium text-center mt-12">Contacter Nous</h1>
      <form action="" method="post" class="md:col-span-8 p-10">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Prénom
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Abdou..."
            />
           
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Nom
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Ndiaye"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Adresse Mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="********@*****.**"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Votre Message
            </label>
            <textarea
              rows="10"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
          <div class="flex justify-between w-full px-3">
            <div class="md:flex md:items-center">
              <label class="block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Je veux recevoir votre newsletter!</span>
              </label>
            </div>
            <button
              class="shadow bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Envoyer le message
            </button>
          </div>
          <a
            href="https://veilmail.io/e/FkKh7o"
            class="font-medium text-blue-600 hover:underline"
          >
            Ou cliquez ici pour révéler notre adresse e-mail protégée
          </a>
        </div>
      </form>
      </div>
    </>
  );
};

export default Contact;
