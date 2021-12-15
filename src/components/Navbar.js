import React, { useContext } from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { themeContext } from '../context/theme/themeContext';
import AlertDialogSlide from './MuiDialog';
import { Link } from 'react-scroll';
import MyApp from './Resume';

const Navbar = () => {

    const themesContext = useContext(themeContext);
    const { darkmode, lightTheme, darkTheme } = themesContext;

    const handleChange = e => {
        if(e.target.checked) {
            lightTheme();
        } else {
            darkTheme();
        }
    }

    return ( 
        <header className={`bg-${ darkmode === false ? 'gray-100': 'gray-800'} md:sticky top-0 z-10`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h3 className={`title-font font-medium ${ (darkmode === false) ? 'text-black' : 'text-white' } mb-4 md:mb-0`}>
                    <Link to="about" smooth={true} duration={1000} className="cursor-pointer ml-3 text-xl">
                        Juan Cruz Martinez
                    </Link>
                </h3>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <Link to="projects" smooth={true} duration={1000} className={`cursor-pointer mr-5 ${(darkmode === false) ? 'text-black hover:text-gray-300' : 'text-white hover:text-black' }`}>
                        Past Work
                    </Link>
                    <Link to="skills" smooth={true} duration={1000} className={`cursor-pointer mr-5 ${(darkmode === false) ? 'text-black hover:text-gray-300' : 'text-white hover:text-black' }`}>
                        Skills
                    </Link>

                    <Link  to="testimonials" smooth={true} duration={1000} className={`cursor-pointer mr-5 ${(darkmode === false) ? 'text-black hover:text-gray-300' : 'text-white hover:text-black' }`}>
                        Testimonials
                    </Link>

                    <AlertDialogSlide > {/* import fn from MuiDialog.js that renders the Slide Dialog */}
                        <MyApp /> {/* RESUME div */}
                    </AlertDialogSlide> 
                </nav>

                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" onChange={handleChange} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>

                { darkmode === false 
                    ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) 
                    : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )
                }

                

                

                <Link
                    to="contact"
                    className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    smooth={true} 
                    duration={1000}
                >
                    Contact Me
                <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;