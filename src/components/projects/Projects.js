import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { blueprint, p2, p3, p4, p5, pythonx } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center text-center">
        <Title title="Here is some of my work!" des="My projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="OpenGL 3D Camera"
          des="A camera to traverse a scene using C++ and OpenGL. I developed vertex, fragment, and geometric shaders to create shapes, and OOP principles to render multiple shapes to the scene, and handles uder input using GLFW."
          src={p5}
          lnkG={"https://github.com/pranavishal/OpenGl-Camera"}
          lnkD={"https://www.youtube.com/watch?v=QFYwbL9k1wo"}
          display={true}
        />
        <ProjectCard
          title="UW Blueprint"
          des="I lead the development of UW Blueprint's website as a technical lead, as well as implementing their internal recruitment tool."
          src={blueprint}
          lnkG={"https://github.com/uwblueprint/website-bp"}
          lnkD={"https://uwblueprint.org/"}
          display={true}
        />
        <ProjectCard
          title="PythonX State Tracking and Filtering"
          des="Designed and implemented a multi-threaded event processing system to store critical machine events into a database, and optimized MongoDB data retrieval by building efficient C#/.NET APIs for complex filtering."
          src={pythonx}
          lnkG={"https://github.com/pranavishal/All-That-Lies-in-the-North"}
          lnkD={"https://www.youtube.com/watch?v=EgBXkn-KGuw"}
          display={false}
        />
        <ProjectCard
          title="BroBot"
          des=" Unity 3D Platformer made for the University of Waterloo GI Game Jam in which I placed second. Implemented enemy AI, basic melee combat, checkpoints, and a level select system."
          src={p4}
          lnkG={"https://github.com/pranavishal/3D-Platformer"}
          lnkD={"https://www.youtube.com/watch?v=2zQslzGy0Os&t=2s"}
          display={true}
        />
        <ProjectCard
          title="Motor Mayhem"
          des="Second mobile game I developed with Unity and C#. Motor Mayhem ranked as a top 100 iOS racing game as of September 2022. I was able to improve the user experience by collecting feedback from a sample of test users in an agile manner, and utilized Plastic SCM to implement version control."
          src={p2}
          lnkG={"https://github.com/pranavishal/Motor-Mayhem"}
          lnkD={"https://www.youtube.com/watch?v=2C005k-kujs"}
          display={true}
        />
        <ProjectCard
          title="All That Lies in the North"
          des="Unity2D turn-based rpg, developed for the GameDevTV Game Jam. Implemented turn-based combat system similar to Pokemon, character stats, experience levels, inventory, quest and save system."
          src={p3}
          lnkG={"https://github.com/pranavishal/All-That-Lies-in-the-North"}
          lnkD={"https://www.youtube.com/watch?v=EgBXkn-KGuw"}
          display={true}
        />
      </div>
    </section>
  );
};

export default Projects;
