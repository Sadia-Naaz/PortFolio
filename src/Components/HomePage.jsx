import React from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import HeroSection from './HeroSection'
import Contact from './Contact'


const HomePage = () => {
  return (

  

    <div className='overfolow-x-hidden'>
        <HeroSection />
        <About />
        <Experience />
        <Projects />    
        <Skills />
        <Contact/>
        </div>
    )
};

  


export default HomePage