import React from 'react';
// import React, { useContext } from 'react';
// import { themeContext } from '../context/theme/themeContext';
import { Link } from 'react-scroll';

const About = () => {

    // const themesContext = useContext(themeContext);
    // const { darkmode } = themesContext;

    return ( 
        <section 
          id="about" 
          className={`bg-auto bg-gradient-to-l hover:bg-gradient-to-r`}
          // style={"background-image: url('./test.png'); height: 400px"}
          style={{backgroundImage: `url('./test4.jpg')`}}
        >
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-white`}>
                JUAN CRUZ MARTINEZ
              </h1>
              <p className="mb-8 leading-relaxed">
                Desarrollador web, nacido en la ciudad de Corrientes Capital, <b>Argentina</b>. <br></br>
                Abierto a continuar aprendiendo sobre multiples tecnologías para probar y mejorar mis habilidades.
              </p>
              <p className="mb-8 leading-relaxed">
                Amante de la buena música
              </p>
              <div className="flex justify-center">
                <Link to="contact" smooth={true} duration={1000} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer">
                    Contactame
                </Link>
                <Link to="projects" smooth={true} duration={1000} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer">
                    Desarrollos
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./myphoto.jpeg"
              />
            </div>
          </div>
      </section>
     );
}
 
export default About;