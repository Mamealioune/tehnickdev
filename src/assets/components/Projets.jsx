import React from "react";

const Projets = () => {
  // Données des projets
  const projects = [
    {
      title: "Gestion de Pharmacie",
      description: "Create Exercises for any subject with the topics you and your students care about.",
      tech: "Windev",
      imageUrl: "../Images/1.jpg",
    },
    {
      title: "Gestion d'état civile",
      description: "Create Exercises for any subject with the topics you and your students care about.",
      tech: "Web (Reactjs)",
      imageUrl: "../Images/2.jpg",
    },
    {
      title: "Gestion de Restaurant",
      description: "Description d'un autre projet",
      tech: "Windev",
      imageUrl: "../Images/3.jpg",
    },
    {
      title: "Gestion d'audience Tribunal",
      description: "Description d'un autre projet",
      tech: "Windev",
      imageUrl: "../Images/4.jpg",
    },
    {
      title: "Gestion d'audience Tribunal",
      description: "Description d'un autre projet",
      tech: "Windev",
      imageUrl: "../Images/5.jpg",
    },
    // Ajoutez autant de projets que nécessaire
  ];

  return (
    <div className="mb-8">
      <h1 className="text-5xl font-titillium text-blue-700 text-center mt-6">
        Tu es développeur ? Rejoint la team
      </h1>
      <h1 className="text-2xl font-titillium text-blue-700 text-center mt-1">
        Rejoint un projet et travaille avec nous
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center mt-8 ml-4 mr-4">
        {projects.map((project, index) => (
          <a
            key={index}
            className="p-8 max-w-md border border-brand rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href="#"
          >
            <img
              src={project.imageUrl}
              className="shadow rounded-lg overflow-hidden border"
              alt="project"
            />
            <div className="mt-8 text-center">
              <h4 className="font-bold text-xl">{project.title} <span className="text-red-600 italic">{project.tech}</span></h4>
              <p className="mt-2 text-gray-600">
                {project.description}
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-900"
                >
                  Rejoindre cette team
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projets;
