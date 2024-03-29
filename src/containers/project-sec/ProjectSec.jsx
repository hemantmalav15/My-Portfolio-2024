import React from "react";
import "./project-sec.css";
import img1 from "../../assets/pro1.png";
import img2 from "../../assets/pro2.png";
import img3 from "../../assets/pro3.png";
import img4 from "../../assets/pro4.png";
import ProjectElement from "../../components/project-element/ProjectElement";
const projectsArray = [
  {
    id: "1",
    image: img1,
    heading: "Bummer E-Commerce App",
    description:
      "The Bummer E-commerce app offers a cart system 🛒, a sleek user interface ✨, and a secure payment gateway 🔒 for a seamless shopping experience.",
    tech: ["React ", "Taiwlind", "React Router ", "Mirage JS"],
    demo: "",
    source: "",
    change: false,
  },
  {
    id: "2",
    image: img2,
    heading: "Food Order Web App",
    description:
      "Order food online with ease through our food order web app. Browse through a variety of options and enjoy delicious meals in just a few clicks. Convenient and hassle-free!",
    tech: ["React ", "CSS ", "Firebase "],
    demo: "",
    source: "",
    change: true,
  },
  {
    id: "3",
    image: img3,
    heading: "GymAholic Gym App",
    description:
      "GymAholic 🏋️‍♂️ - the ultimate web app to help you find the perfect exercises to maintain your body or figure! 💪",
    tech: ["React ", "Taiwlind", "Exercise DB API "],
    demo: "",
    source: "",
    change: false,
  },

  {
    id: "4",
    image: img4,
    heading: "Youtube Clone",
    description:
      "📺 YouTube clone with video detail, homepage, and search page, offering users an immersive browsing experience. 🎥🏠🔎",
    tech: ["React", "Taiwlind", "React Router ", "Youtube API"],
    demo: "",
    source: "",
    change: true,
  },
];
const ProjectSec = () => {
  const project = projectsArray.map((pro) => {
    return (
      <ProjectElement
        key={pro.id}
        image={pro.image}
        heading={pro.heading}
        description={pro.description}
        tech={pro.tech}
        demo={pro.demo}
        source={pro.source}
        change={pro.change}
      ></ProjectElement>
    );
  });
  return (
    <section className="myPortfolio__projects" id="projects">
      <div className="container">
        <div className="projects">
          <h3>PORTFOLIO</h3>
          <h2>Each project is an exclusive development endeavor 🧩</h2>
          <div className="all-projects">{project}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
