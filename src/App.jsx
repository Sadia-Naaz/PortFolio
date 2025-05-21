import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar'
import Experience from './Components/Experience'
import HeroSection from './Components/HeroSection'
const App = () => {
  return (
    
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Skills' element={<Skills/>} />
    <Route path='/Projects' element={<Projects/>} />
    <Route path='/Experience' element={<Experience/>} />
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App