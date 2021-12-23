import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import "tailwindcss/tailwind.css";
import ThemeState from './context/theme/themeState';
import FloatingWhatsApp from 'react-floating-whatsapp';
import Footer from './components/Footer';



function App() {

  return (
      <ThemeState>
        <main className="text-gray-400 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
          <FloatingWhatsApp 
            avatar='./yo.png' 
            phoneNumber='+543794065380'
            accountName='Juan Cruz Martinez'
            statusMessage='Típicamente responde en 1 hora'
            chatMessage='Hola!. Cómo puedo ayudarte ?'
            allowEsc={true}
            allowClickAway={true}
          />
        </main>
      </ThemeState>
  );
}

export default App;
