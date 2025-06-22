import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsList = [
  {
    title: "YourMovieList",
    url: null,
    repoUrl: "https://github.com/Jasufr/rails-watch-list",
    image: "./projects/yml.png",
    description:
      "Movie watch list with movies from  the IMDB API. (Ruby on Rails, Le Wagon - solo).",
    date: "03/2024",
  },
  {
    title: "Coshub",
    url: null,
    repoUrl: "https://github.com/Jasufr/CosHub",
    image: "./projects/coshub.png",
    description:
      "Marketplace website for renting cosplays from individuals easily. (Ruby on Rails, Le Wagon - group).",
    date: "03-2024",
  },
  {
    title: "FRNSHR",
    url: null,
    repoUrl: "https://github.com/Jasufr/FRNSHR",
    image: "./projects/frnshr.png",
    description:
      "Interior design tool for finding suitable furniture from several websites based on a specific color scheme. (Ruby on Rails, Le Wagon - group).",
    date: "03/2024",
  },
  {
    title: "GLTF File Viewer",
    url: "https://gltffileviewer.netlify.app/",
    repoUrl: "https://github.com/Jasufr/gltf-file-viewer",
    image: "./projects/gltffileviewer.png",
    description: "3D Models (GLTF or GLB) viewer app. (React Vite, personal).",
    date: "04/2024",
  },
  {
    title: "GoRent",
    url: "https://gorent-showcase.vercel.app/",
    repoUrl: "https://github.com/Jasufr/car_showcase",
    image: "./projects/gorent.png",
    description:
      "Car rental website retrieving cars information from APIs. (React NextJS, personal).",
    date: "06/2024",
  },
  {
    title: "Tokuyukikaku",
    url: "https://tokuyukikaku.jp/",
    repoUrl: "https://github.com/Jasufr/tokuyukikaku",
    image: "./projects/tokuyukikaku.png",
    description:
      "Homepage built for a Japanese senior care company to present their services and brand. (React Vite, client).",
    date: "08/2024",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl mb-8">Projects.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="rounded-xl group relative overflow-hidden"
          >
            <img
              src={project.image}
              alt=""
              className="aspect-[1/1] object-cover rounded-xl group-hover:blur transition-all duration-300"
            />
            <div className="w-full text-white rounded-xl h-full bg-green/80 p-5 text-xl absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex justify-center items-center flex-col ">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl mb-2 text-center">{project.title}</h3>
                <p className="text-sm text-center">{project.description}</p>
              </div>
              <div className="group-hover:pointer-events-auto self-end flex gap-5 text-2xl">
                {project.url && (
                  <a
                    href={project.url}
                    className="flex hover:text-black/50 transition-color duration-300"
                  >
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  className="flex hover:text-black/50 transition-color duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/"
        className="text-2xl mx-auto px-6 py-3 rounded-full my-12 text-white bg-green w-fit flex justify-center items-center
  shadow-[inset_0_0px_0px_rgba(0,0,0,0.5)]
  hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)]
  transition-all duration-300"
      >
        See More
      </a>
    </>
  );
}
