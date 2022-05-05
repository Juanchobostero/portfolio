import React, { useContext } from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { themeContext } from '../context/theme/themeContext';
import AlertDialogSlide from './MuiDialog';
import { Link } from 'react-scroll';
import MyApp from './Resume';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

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
        <header className={`bg-${ darkmode === false ? 'stone-500': 'black'} top-0 sticky z-100`}>
            <div className="container justify-between mx-auto flex flex-wrap p-5 flex-row sm:items-center">
                <h3 className={`hidden md:flex title-font font-medium ${ darkmode === false ? 'text-black hover:opacity-50' : 'text-white hover:opacity-50' } mb-4 md:mb-4`}>
                    <Link to="about" smooth={true} duration={1000} className="text-xl md:text-base cursor-pointer ml-3">
                        Juan Cruz Martinez
                    </Link>
                </h3>
                <div className='flex sm:hidden'>
                    <Stack direction="row" spacing={2}>
                        <Avatar 
                            sx={{ 
                                bgcolor: deepOrange[500],
                                width: 60, 
                                height: 60 
                            }}>JC
                        </Avatar>
                    </Stack>
                </div>
                <nav 
                    className="text-xl mb-4 sm:text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 
                    md:border-gray-700 flex flex-nowrap items-center text-base justify-center"
                >
                    <Link 
                        to="projects" 
                        smooth={true} 
                        duration={1000} 
                        className={`hidden sm:flex cursor-pointer mr-5 
                            ${(darkmode === false) 
                                ? 'text-black hover:opacity-50' 
                                : 'text-white hover:opacity-50' }`
                            }
                    >
                        Past Work
                    </Link>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={1000} 
                        className={`hidden sm:flex cursor-pointer mr-5 
                            ${(darkmode === false) 
                                ? 'text-black hover:opacity-50' 
                                : 'text-white hover:opacity-50' }`}>
                        Skills
                    </Link>

                    {/* <Link  
                        to="testimonials" 
                        smooth={true} 
                        duration={1000} 
                        className={`hidden sm:flex cursor-pointer mr-5 
                            ${(darkmode === false) 
                                ? 'text-black hover:text-gray-300' 
                                : 'text-white hover:text-black' }`}>
                        Testimonials
                    </Link> */}

                    <AlertDialogSlide > {/* import fn from MuiDialog.js that renders the Slide Dialog */}
                        <MyApp /> {/* RESUME div */}
                    </AlertDialogSlide>

                    {/* Darkmode button MOVILE*/}
                    <div className="flex sm:hidden">
                        <div className="relative inline-block w-12 mr-2 justify-center select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" onChange={handleChange} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-500 border-4 appearance-none cursor-pointer"/>
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>

                        { darkmode === false 
                            ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            ) 
                            : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            )
                        }
                    </div>

                    {/* <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="flex w-16 cursor-pointer sm:hidden" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>  */}
                </nav>

                {/* Darkmode button WEB*/}
                <div className="hidden sm:flex flex-row mr-8">
                    <div className="relative inline-block w-12 mr-2 select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" onChange={handleChange} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-500 border-4 appearance-none cursor-pointer"/>
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>

                    { darkmode === false 
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        ) 
                        : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        )
                    }
                </div>
                
                {/* Contact Me button*/}
                <div className="hidden sm:flex ">
                    <Link
                        to="contact"
                        className="hidden sm:flex cursor-pointer inline-flex bg-green-400 text-black font-bold border-0 py-1 px-3 focus:outline-none hover:opacity-50 rounded"
                        smooth={true} 
                        duration={1000}
                    >
                        Contact Me
                    <ArrowRightIcon className="w-4 h-5 ml-1" />
                    </Link>
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;