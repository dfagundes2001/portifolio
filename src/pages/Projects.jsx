/* eslint-disable no-undef */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackIcons,
  StackLabels,
} from "github-automated-repos/index";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DevMovies from "../../src/img/Captura de tela movies.png";
import Burger from "../../src/img/Captura de tela burger.png";
import Conversor from "../../src/img/Captura de tela conversor.png";
import iMovi from "../../src/img/Captura de tela iMovi.png";
import StorePS from "../../src/img/Captura de tela Playstation-Store.png";

// eslint-disable-next-line import-helpers/order-imports
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const infoProjects = [
  {
    projectsImage: DevMovies,
    alt: "img-devmovies",
    projectsName: "DevMovies",
    description:
      "Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares,que vão estrear e muito mais.",
    technologies:
      "Tecnologias usadas no projeto: React.js, Javascript, CSS, HTML e o Axios para consumir uma api publica.",
    links1: "https://dev-movies-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/dev-movies",
  },
  {
    projectsImage: Burger,
    alt: "img-hamburgueria",
    projectsName: "Hamburgueria",
    description:
      "Você fara o seu pedido e iremos colocar em uma outra pagina onde você poderá ver e excluir se quiser.",
    technologies:
      "Tecnologias usadas no projeto: React.js, Node.js, JavaScript, CSS e HTML",
    links1: "https://hamburgueria-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/hamburgueria",
  },
  {
    projectsImage: Conversor,
    alt: "img-conversor",
    projectsName: "Conversor",
    description:
      "Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.",
    technologies: "Tecnologias usadas no projeto JavaScript, CSS, HTML.",
    links1: "https://conversor-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/conversor",
  },
  {
    projectsImage: iMovi,
    alt: "img-iMovi",
    projectsName: "iMovi",
    description:
      "Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.",
    technologies: "Esse projeto foi feito com o framework Bootstrap.",
    links1: "https://i-movi-xi.vercel.app/",
    links2: "https://github.com/DiegoSilva1919/iMovi",
  },
  {
    projectsImage: StorePS,
    alt: "img-Playstation-Store",
    projectsName: "Store-PS",
    description:
      "Um site da Playstation-Store com layout diferente e responsivo.",
    technologies: "Tecnologias usadas no projeto JavaScript, CSS e HTML.",
    links1: "https://diegosilva1919.github.io/playstation-store/",
    links2: "https://github.com/DiegoSilva1919/playstation-store",
  },
  {
    projectsName: "EmBreve",
    description: "Projeto feito em React.js.",
    technologies: "Tecnologias usadas no projeto TipeScript, CSS e HTML.",
  },
];

const Projects = () => {
  const data = useGitHubAutomatedRepos("DiegoSilva1919", "deploy");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-auto relative"
    >
      <div className="flex flex-col items-center bg-transparent">
        <h2 className="text-2xl md:text-5xl text-red-900 mb-2">
          Principais Projetos
        </h2>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="block md:hidden h-60 w-9/12"
        >
          {infoProjects.map((projects) => (
            <SwiperSlide
              className="relative text-center bg-transparent flex justify-center items-center flex-col mx-2"
              key={projects.projectsName}
            >
              <img
                className="block w-full h-full rounded-md opacity-10 hover:opacity-80"
                src={projects.projectsImage}
                alt={projects.alt}
              />
              <div className="absolute flex flex-col w-3/5 gap-3">
                <h5 className="text-lg">{projects.projectsName}</h5>
                <p className="text-sm leading-none">{projects.description}</p>
                <p className="text-sm leading-none">{projects.technologies}</p>
                <div className="flex items-center justify-center gap-1 flex-row">
                  <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-xs"
                      target="_blank"
                      href={projects.links1}
                      rel="noreferrer"
                    >
                      Projeto
                    </a>
                  </button>
                  <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-xs"
                      target="_blank"
                      href={projects.links2}
                      rel="noreferrer"
                    >
                      Repositório
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={2}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="hidden md:block h-60 w-9/12"
        >
          {data.map((item) => (
            <SwiperSlide
              className="relative text-center bg-transparent flex justify-center items-center flex-col mx-0.5"
              key={item.id}
            >
              <div className="absolute flex flex-col w-3/5 gap-3">
                <h5 className="md:text-2xl flex justify-center">{item.name}</h5>
                <p className="text-lg leading-none">{item.description}</p>
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcons
                      key={icon}
                      className="project_icon"
                      iconItem={icon}
                    />
                  );
                })}
                <div className="flex flex-wrap justify-center text-sm">
                  <p>Tecnologias:</p>
                  {item.topics.map((icon) => {
                    return (
                      <div key={icon} className="flex">
                        <StackIcons
                          key={icon}
                          className="stack_icon"
                          itemTopics={icon}
                        />
                        <StackLabels
                          key={icon}
                          itemTopics={icon}
                          className="w-auto text-sm text-red-500"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center gap-1 flex-row">
                  <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-sm"
                      target="_blank"
                      href={item.homepage}
                      rel="noreferrer"
                    >
                      Projeto
                    </a>
                  </button>
                  <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-sm"
                      target="_blank"
                      href={item.html_url}
                      rel="noreferrer"
                    >
                      Repositório
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
