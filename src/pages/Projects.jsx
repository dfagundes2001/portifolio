/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackLabels,
  StackIcons,
} from "github-automated-repos/index";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// eslint-disable-next-line import-helpers/order-imports
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
          {data.map((item) => {
            return (
              <SwiperSlide
                className="relative text-center bg-transparent flex justify-center items-center flex-col mx-2"
                key={item.id}
              >
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcons
                      key={icon}
                      className="project_icon"
                      iconItem={icon}
                    />
                  );
                })}
                <div className="absolute flex flex-col w-3/5 gap-3">
                  <div className="flex items-center justify-center gap-1 flex-row">
                    <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                      <a
                        className="text-xs"
                        target="_blank"
                        href={item.html_url}
                        rel="noreferrer"
                      >
                        <h1>{item.name}</h1>
                      </a>
                    </button>
                    <p className="text-sm leading-none">{item.description}</p>
                    <a href={item.homepage}>
                      <h3>Homepage</h3>
                    </a>
                    {item.topics.map((icon) => {
                      return (
                        <div
                          key={icon}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <StackIcons
                            key={icon}
                            className="stack_Icon"
                            itemTopics={icon}
                          />
                          <StackLabels key={icon} itemTopics={icon} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          slidesPerView={3}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="hidden md:block h-60 w-9/12"
        >
          {data.map((item) => {
            return (
              <SwiperSlide
                className="relative text-center bg-transparent flex justify-center items-center flex-col mx-2"
                key={item.id}
              >
                {item.topics.map((icon) => {
                  return <ProjectIcons key={icon} iconItem={icon} />;
                })}
                <div>
                  <button className="bg-blue-500 hover:bg-red-500 active:bg-red-700 rounded-full p-1">
                    <a
                      className="text-xs"
                      target="_blank"
                      href={item.html_url}
                      rel="noreferrer"
                    >
                      <h1>{item.name}</h1>
                    </a>
                  </button>
                  <p className="text-sm leading-none">{item.description}</p>
                  <a href={item.homepage}>
                    <h3>Homepage</h3>
                  </a>
                  <div className="flex items-center justify-center gap-1 flex-row">
                    {item.topics.map((icon) => {
                      return (
                        <div
                          key={icon}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <StackIcons key={icon} itemTopics={icon} />
                          <StackLabels key={icon} itemTopics={icon} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
