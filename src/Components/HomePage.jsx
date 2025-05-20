import React from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import HeroSection from './HeroSection'

const HomePage = () => {
  return (

    <div>
      <section id="about">
        <About />
      </section>
      <section>
        <HeroSection />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
};

  


export default HomePage