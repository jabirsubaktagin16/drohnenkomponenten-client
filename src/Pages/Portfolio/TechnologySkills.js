import React from "react";
import bootstrap from "../../assets/icons/bootstrap.png";
import cPlusPlus from "../../assets/icons/c++.png";
import c from "../../assets/icons/c.png";
import codeBlocks from "../../assets/icons/codeBlocks.png";
import css3 from "../../assets/icons/css3.png";
import es6 from "../../assets/icons/es6.png";
import expressJS from "../../assets/icons/expressJS.png";
import firebase from "../../assets/icons/firebase.png";
import git from "../../assets/icons/git.png";
import heroku from "../../assets/icons/heroku.png";
import html5 from "../../assets/icons/html5.png";
import java from "../../assets/icons/java.jpg";
import js from "../../assets/icons/js.png";
import jwt from "../../assets/icons/jwt.png";
import matlab from "../../assets/icons/matlab.png";
import mongoDB from "../../assets/icons/mongoDB.png";
import mySQL from "../../assets/icons/mySQL.png";
import netbeans from "../../assets/icons/netbeans.png";
import netlify from "../../assets/icons/netlify.png";
import nodeJS from "../../assets/icons/nodeJS.png";
import postman from "../../assets/icons/postman.png";
import python from "../../assets/icons/python.png";
import react from "../../assets/icons/react.png";
import reactBootstrap from "../../assets/icons/reactBootstrap.png";
import tailwind from "../../assets/icons/tailwind.png";
import vsCode from "../../assets/icons/vsCode.png";

const TechnologySkills = () => {
  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold text-primary text-center">
        Technology Skills
      </h1>
      {/* Expert */}
      <div className="my-6">
        <p className="text-xl text-center font-semibold text-secondary">
          Expert
        </p>
        <div className="container mx-auto md:px-20 px-10 grid overflow-hidden lg:grid-cols-6 xl:grid-cols-6 grid-cols-3 grid-rows-none gap-8 mt-8">
          <div className="flex justify-center items-center flex-col">
            <img src={html5} alt="" className="w-24" />
            <p>HTML5</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={css3} alt="" className="w-24" />
            <p>CSS3</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={bootstrap} alt="" className="w-24" />
            <p>Bootstrap</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={js} alt="" className="w-24" />
            <p>JavaScript</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={es6} alt="" className="w-24" />
            <p>ES6</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={react} alt="" className="w-24" />
            <p>ReactJS</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={nodeJS} alt="" className="w-24" />
            <p>NodeJS</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={expressJS} alt="" className="w-24" />
            <p>ExpressJS</p>
          </div>
        </div>
      </div>
      {/* Familiar */}
      <div className="my-10">
        <p className="text-xl text-center font-semibold text-secondary">
          Familiar
        </p>
        <div className="container mx-auto md:px-20 px-10 grid overflow-hidden lg:grid-cols-6 xl:grid-cols-6 grid-cols-3 grid-rows-none gap-8 mt-8">
          <div className="flex justify-center items-center flex-col">
            <img src={mongoDB} alt="" className="w-24" />
            <p>MongoDB</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={mySQL} alt="" className="w-24" />
            <p>MySQL</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={firebase} alt="" className="w-24" />
            <p>Firebase</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={tailwind} alt="" className="w-24" />
            <p>Tailwind</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={reactBootstrap} alt="" className="w-24" />
            <p>React-Bootstrap</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={jwt} alt="" className="w-24" />
            <p>JWT</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={c} alt="" className="w-24" />
            <p>C</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={java} alt="" className="w-24" />
            <p>Java</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={cPlusPlus} alt="" className="w-24" />
            <p>C++</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={python} alt="" className="w-24" />
            <p>Python</p>
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="my-10">
        <p className="text-xl text-center font-semibold text-secondary">
          Tools
        </p>
        <div className="container mx-auto md:px-20 px-10 grid overflow-hidden lg:grid-cols-6 xl:grid-cols-6 grid-cols-3 grid-rows-none gap-8 mt-8">
          <div className="flex justify-center items-center flex-col">
            <img src={git} alt="" className="w-24" />
            <p>Git</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={vsCode} alt="" className="w-24" />
            <p>VSCode</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={netlify} alt="" className="w-24" />
            <p>Netlify</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={heroku} alt="" className="w-24" />
            <p>Heroku</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={codeBlocks} alt="" className="w-24" />
            <p>Code Blocks</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={netbeans} alt="" className="w-24" />
            <p>Netbeans</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={postman} alt="" className="w-24" />
            <p>Postman</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={matlab} alt="" className="w-24" />
            <p>MATLAB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySkills;
