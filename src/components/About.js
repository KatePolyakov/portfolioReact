import React from "react";

import Hi from './Hi';

import './styles/MainStyle.css';


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-52 md:flex-row flex-col items-center">
      <div className="lg:w-1/2 md:w-5/6 w-5/6">
        <Hi />
        </div>
        <div className="lg:flex-grow leading-loose md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
          <h1 className="title-font sm:text-4xl text-3xl mb-16 font-medium text-white">
            I'm Kate Polyakov, <br/> a Web Developer based <br/> in beautiful British Columbia, Canada. <br/> I love creating creative apps.
          </h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}