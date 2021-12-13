import React, { useContext } from 'react';
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { themeContext } from '../context/theme/themeContext';

const Testimonials = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return ( 
        <section id="testimonials" className={`${ (darkmode === false) ? 'bg-gray-100' : 'bg-gray-900' }`}>
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className={`sm:text-4xl text-3xl font-medium title-font ${ (darkmode === false) ? 'text-black' : 'text-white' } mb-12`}>
                    Client Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                {testimonials.map((testimonial) => (
                    <div className="p-4 md:w-1/2 w-full" key={testimonial.image}>
                        <div className={`h-full bg-gray-800 ${ (darkmode === false) ? 'text-black' : 'text-white' } bg-opacity-40 p-8 rounded`}>
                            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                            <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                            <div className="inline-flex items-center">
                                <img
                                    alt="testimonial"
                                    src={testimonial.image}
                                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                    {testimonial.name}
                                    </span>
                                    <span className="text-gray-500 text-sm uppercase">
                                    {testimonial.company}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
     );
}
 
export default Testimonials;