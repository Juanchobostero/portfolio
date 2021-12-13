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
          <FloatingWhatsApp 
            phoneNumber='+4901744538564'
            accountName='Santiago Manso Castro'
            allowEsc={true}
            allowClickAway={true}
          />
        </main>
      </ThemeState>
  );
}

export default App;
