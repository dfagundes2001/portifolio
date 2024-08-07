import { useEffect, useState } from "react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Burger from "../../src/img/hamburgueria.png";
import Conversor from "../../src/img/conversor.png";
import iMovi from "../../src/img/iMovi.png";
import DevMovies from "../../src/img/movies.png";
import StorePS from "../../src/img/Playstation-Store.png";
import TodolistFirebase from "../img/todolist-firebase.png";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

const infoProjects = [
  {
    projectsImage: DevMovies,
    alt: "imagem do projeto dev movies",
    projectsName: "DevMovies",
    description:
      "Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares,que vão estrear e muito mais.",
    technologies:
      " React.js, Javascript, CSS, HTML e o Axios para consumir uma api publica.",
    links1: "https://dev-movies-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/dev-movies",
  },
  {
    projectsImage: Burger,
    alt: "imagem do projeto hamburgueria",
    projectsName: "Hamburgueria",
    description:
      "Você fara o seu pedido e iremos colocar em uma outra pagina onde você poderá ver e excluir se quiser.",
    technologies: " React.js, Node.js, JavaScript, CSS e HTML",
    links1: "https://hamburgueria-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/hamburgueria",
  },
  {
    projectsImage: TodolistFirebase,
    alt: "imagem do projeto todolist firebase ",
    projectsName: "TodoList",
    description: "Projeto feito com javascript vanilla e Firebase",
    technologies: " JavaScript, CSS, HTML, React e Firebase.",
    links1: "https://todolist-2c452.firebaseapp.com/",
    links2: "https://github.com/dfagundes2001/todoList-firebase?tab=readme-ov-file",
  },
  {
    projectsName: "Dashboard Financeiro",
    status: "Em Desenvolvimento",
    description: "Projeto será feito em React.js.",
    technologies: " TypeScript, CSS, HTML e React.",
  },
  {
    projectsImage: Conversor,
    alt: "imagem do projeto conversor",
    projectsName: "Conversor de Moedas",
    description:
      "Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.",
    technologies: " JavaScript, CSS, HTML.",
    links1: "https://conversor-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/conversor",
  },
  {
    projectsImage: iMovi,
    alt: "imagem do projeto iMovi",
    projectsName: "iMovi",
    description:
      "Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.",
    technologies: " Framework Bootstrap.",
    links1: "https://i-movi-xi.vercel.app/",
    links2: "https://github.com/DiegoSilva1919/iMovi",
  },
  {
    projectsImage: StorePS,
    alt: "imagem do projeto Playstation-Store",
    projectsName: "Store-PS",
    description:
      "Um site da Playstation-Store com layout diferente e responsivo.",
    technologies: " JavaScript, CSS e HTML.",
    links1: "https://dfagundes2001.github.io/playstation-store/",
    links2: "https://github.com/DiegoSilva1919/playstation-store",
  },
];

const Projects = () => {
  const [isMouseOver, setIsMouseOver] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleMouseOver = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: false }));
  };

  const handleMouseOut = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: true }));
  };

  return (
    <section
      className="h-screen relative"
      id="projetos">
      <AnimatedSection>
        <div className="flex flex-col items-center gap-3 bg-transparent">
          <h2 className="text-2xl md:text-5xl text-sky-500">
            Principais Projetos
          </h2>
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="block h-60 w-9/12 opacity-0 animate-toAppear md:hidden"
          >
            {infoProjects.map((projects) => (
              <SwiperSlide
                className="relative text-center bg-transparent flex justify-center items-center flex-col mx-0.5 animate-toAppearPlus"
                key={projects.projectsName}
              >
                <img
                  onMouseOver={() => handleMouseOver(projects.projectsName)}
                  onMouseOut={() => handleMouseOut(projects.projectsName)}
                  style={{
                    opacity: isMouseOver[projects.projectsName] ? "0.20" : "1",
                    zIndex: isMouseOver[projects.projectsName] ? "0" : "111",
                  }}
                  className="block w-full h-full rounded-md opacity-10 hover:opacity-80"
                  src={projects.projectsImage}
                  alt={projects.alt}
                />
                <div className="flex flex-col items-center gap-20 absolute top-16 ">
                  <div
                    onMouseOver={() => handleMouseOver(projects.projectsName)}
                    onMouseOut={() => handleMouseOut(projects.projectsName)}
                    style={{
                      opacity: isMouseOver[projects.projectsName] ? "1" : "0",
                    }}
                    className="flex flex-col w-3/5 gap-3"
                  >
                    <h5 className="text-lg">{projects.projectsName}</h5>
                    {
                      projects.status ? <span
                        className="text-rose-400">{projects.status}</span> : ''
                    }
                    <p className="text-sm leading-none">{projects.description}</p>
                    <p className="text-sm leading-none">
                      <span className="text-rose-400">
                        Tecnologias:
                      </span>
                      {projects.technologies}
                    </p>
                  </div>
                  <div
                    onMouseOver={() => handleMouseOver(projects.projectsName)}
                    onMouseOut={() => handleMouseOut(projects.projectsName)}
                    style={{
                      opacity: isMouseOver[projects.projectsName] ? "1" : "0.85",
                    }}
                    className="flex items-center justify-center gap-1 flex-row">
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
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
