import React, { useContext } from 'react';
import { themeContext } from '../context/theme/themeContext';
import { Link } from 'react-scroll';

const About = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return ( 
        <section id="about" className={`bg-${ darkmode === false  ? 'stone-500': 'black'}`}>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${ ( darkmode === false ) ? 'text-black' : 'text-white' }`}>
                Hi, I'm Juan Cruz Martinez
                {/* <br className="hidden lg:inline-block" />This is my portfolio page ! */}
              </h1>
              <p className="mb-8 leading-relaxed">
                Web developer, based in Corrientes, Argentina. I usually works in web apps management and develop.
                I am open to keep learn about multiples tecnologies for improve and refine my skills.
              </p>
              <p className="mb-8 leading-relaxed">
                Good Music Lover.
              </p>
              <div className="flex justify-center">
                <Link to="contact" smooth={true} duration={1000} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer">
                    Contact Me
                </Link>
                <Link to="projects" smooth={true} duration={1000} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer">
                    Last works
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./yo.png"
              />
            </div>
          </div>
      </section>
     );
}
 
export default About;