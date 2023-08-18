import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
/* import Testimonials from './components/Testimonials'; */
import "tailwindcss/tailwind.css";
import ThemeState from './context/theme/themeState';
import FloatingWhatsApp from 'react-floating-whatsapp';
import Footer from './components/Footer';
import { motion } from "framer-motion";
import ScrollButton from './components/ScrollButton';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
      <ThemeState>
        <BrowserRouter>
        <motion.div 
          className="text-gray-400 body-font font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Navbar />
          <About />
          <Projects />
          <Skills />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
          <ScrollButton />
          <FloatingWhatsApp 
            avatar='./yo.jpeg' 
            phoneNumber='+543794065380'
            accountName='Juan Cruz Martinez'
            statusMessage='Usualmente responde en unos minutos'
            chatMessage='Hola!. Cómo puedo ayudarte ?'
            allowEsc={true}
            allowClickAway={true}
          />
        </motion.div>
        </BrowserRouter>
      </ThemeState>
  );
}

export default App;
