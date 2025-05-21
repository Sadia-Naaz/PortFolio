import React from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import HeroSection from './HeroSection'
import Contact from './Contact'


const HomePage = () => {
  return (

    <div>
       <section>
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
       <section>
        <Skills />
      </section>
      <section>
        <Contact/>
      </section>
    </div>
  );
};

  


export default HomePage