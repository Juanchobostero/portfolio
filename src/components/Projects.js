import React, { useContext } from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import { themeContext } from '../context/theme/themeContext';
import Project from './Project';
import TypeWritter from 'typewriter-effect';

const Projects = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return ( 
        <section id="projects" className={`${ ( darkmode === false ) ? 'text-gray-900 bg-stone-500' : 'text-gray-100 bg-black' } body-font`}>
            <div className="container px-5 py-20 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${ ( darkmode === false ) ? 'text-gray-900' : 'text-gray-100' }`}>
                        <TypeWritter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ['<b>Proyectos;</b>']
                            }}
                        />
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Siéntete libre y notificame acerca de bugs/sugerencias.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 -z-100">
                    {projects.map((project) => (
                        <Project
                            key={project.image}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Projects;