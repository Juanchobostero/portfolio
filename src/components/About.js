import React from 'react';
import { Link } from 'react-scroll';
import TypeWritter from 'typewriter-effect';
import { AR } from 'country-flag-icons/react/3x2'

const About = () => {

    return ( 
        <section 
          id="about" 
          className={`bg-gray-700 body-font`}
          style={{
            backgroundImage: `url("./background-test3.webp")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }} 
        >
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className={`text-1xl title-font sm:text-2xl md:text-4xl mb-4 font-medium text-white`}>
                <TypeWritter 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ['<b>JUAN CRUZ MARTINEZ</b> | Desarrollador WEB;']
                  }}
                />
              </h1>
              <p className="text-white text-center mb-8 md:mb-8 text-justify leading-relaxed text-lg">
                30 años. Nacido en la ciudad de Corrientes Capital, <AR title="Argentina" className="inline w-10 h-10"/>. <br></br>
                Programador Web FULL-STACK. <br></br>
                <b>Empatía & Trabajo en equipo.</b>
              </p>
                <p className="bg-black my-8 text-white text-justify md:mb-8 leading-relaxed">
                  JavaScript, Codeigniter y más;
                </p>
              <div className="flex justify-center">
                <Link to="footer" smooth={true} duration={1000} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer">
                    Redes
                </Link>
                <Link to="projects" smooth={true} duration={1000} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer">
                    Proyectos
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2">
              {/* <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./about-photo.webp"
              />  */}

            </div>
          </div>
      </section>
     );
}
 
export default About;