import { ShareIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { themeContext } from '../context/theme/themeContext';
import TypeWritter from 'typewriter-effect';

const Footer = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return (
        <section 
            id="footer" 
            className="bg-gray-700">
                <div className={`container px-5 py-10 mx-auto text-center h-80 pb-10`}>
                    <ShareIcon className="w-10 inline-block mb-4"/>
                    <h1 className={`title-font sm:text-4xl text-3xl mt-2 mb-10 font-medium ${ ( darkmode === false ) ? 'text-black' : 'text-white' }`}>
                        <TypeWritter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ['Mis Redes;']
                            }}
                        />
                    </h1>
                    <SocialIcon 
                        url='https://github.com/Juanchobostero'
                        fgColor='#dedad9'
                        style={{ height: 75, width: 75, marginRight: '1rem' }}
                        rel='noopener noreferred'
                        target="_blank"
                        className='hover:opacity-50'
                    />
                    <SocialIcon 
                        url='https://www.linkedin.com/in/martinezjc93/'
                        fgColor='#dedad9'
                        style={{ height: 75, width: 75 }}
                        rel='noopener noreferred'
                        target="_blank"
                        className='hover:opacity-50'
                    />
                    <SocialIcon 
                        url='https://www.instagram.com/_juancruzmartinez/'
                        fgColor='#dedad9'
                        style={{ height: 75, width: 75, marginLeft: '1rem' }}
                        rel='noopener noreferred'
                        target="_blank"
                        className='hover:opacity-50'
                    />
                </div>
        </section>
    )
}

export default Footer
