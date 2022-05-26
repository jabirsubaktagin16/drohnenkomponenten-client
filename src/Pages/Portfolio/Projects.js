import React from "react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const Projects = () => {
  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold text-primary text-center">Projects</h1>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-12">
        {/* Project 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={project1} alt="Project1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rocky Talky Musics</h2>
            <p>Musical Instruments Provider Website</p>
            <div className="card-actions justify-end">
              <a
                href="https://rocky-talky-musics.web.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Website Link
              </a>
            </div>
          </div>
        </div>
        {/* Project 1 End */}
        {/* Project 2 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={project2} alt="Project2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sherrif's Video Games</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a
                href="https://sherrifs-video-game.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Website Link
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 End */}
        {/* Project 3 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={project3} alt="Project3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Momma Homemade Ice Cream</h2>
            <p>Ice Cream Seller Website</p>
            <div className="card-actions justify-end">
              <a
                href="https://momma-homemade-ice-cream.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Website Link
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 End */}
      </div>
    </div>
  );
};

export default Projects;
