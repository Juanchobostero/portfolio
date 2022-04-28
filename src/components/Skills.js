import React, { useContext } from 'react';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import { themeContext } from '../context/theme/themeContext';

const Skills = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return ( 
        <section id="skills" className={`${ (darkmode === false) ? 'bg-gray-100' : 'bg-gray-900' }`}>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className={`sm:text-4xl text-3xl font-medium title-font ${ (darkmode === false) ? 'text-black' : 'text-white' } mb-4`}>
                    Skills &amp; Technologies
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Languages and tecnologies that i was used and actually use to developments.
                </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
                    
                    <div key={skill.url} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <a href={skill.url} target="_blank" rel="noopener noreferrer">
                            <span className="title-font font-medium text-white">
                                {skill.name}
                            </span>
                        </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
     );
}
 
export default Skills;