import React, { useContext } from 'react';
import { themeContext } from '../context/theme/themeContext';

const About = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return ( 
        <section id="about" className={`${( darkmode === false ) ? 'bg-gray-100' : 'bg-gray-900'}`}>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${ ( darkmode === false ) ? 'text-black' : 'text-white' }`}>
                Hi, I'm Santiago Manso Castro
                {/* <br className="hidden lg:inline-block" />This is my portfolio page ! */}
              </h1>
              <p className="mb-8 leading-relaxed">
                Fullstack developer, based in Berlin, Germany. I mainly use MERN stack to develop entire web apps; as well as a bit of 
                React-Native recently to explore the mobile environment.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
      </section>
     );
}
 
export default About;