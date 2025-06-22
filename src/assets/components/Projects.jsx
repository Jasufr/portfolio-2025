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
      {projectsList.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt="" />
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.url && (
                <a href={project.url}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              )}
              <a href={project.repoUrl}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
