import React from 'react'
import {motion} from 'framer-motion'
import { Linkedin,Github,Mail} from 'lucide-react'
const About = () => {
  
  return (
    <div>
     <h1 
     className="text-8xl font-bold bg-gradient-to-r from-indigo-500 via-pink-600 to-purple-600 bg-clip-text text-transparent"
     >Sadia Naaz</h1>
<div className="flex justify-between items-center gap-12 overflow-hidden">
  <div className='flex flex-col gap-4'>
     <span className="pt-2 text-3xl font-semibold max-w-xl">
    Full Stack Web Developer creating responsive, user-friendly web applications with clean code and modern tools.
  </span>
<div className='flex gap-2 items-center'>
     <motion.a 
  href="https://linkedin.com/in/sadia-naaz-134458225"
  target="_blank" 
  rel="noopener noreferrer"
  animate={{ height: "auto", opacity: 1 }}
>
  <Linkedin />
</motion.a>
 <motion.a 
  href="https://github.com/Sadia-Naaz"
  target="_blank" 
  rel="noopener noreferrer"
  animate={{ height: "auto", opacity: 1 }}
>
<Github />
</motion.a>
 <motion.a 
  href="sadianaaz110@gmail.com"
  target="_blank" 
  rel="noopener noreferrer"
  animate={{ height: "auto", opacity: 1 }}
>
  <Mail />
</motion.a>
</div>
<motion.a
 href="https://drive.google.com/file/d/1ZD1aEsB-eJ11z9aH2z3heuHaJMvdbAkI/view?usp=sharing"
  target="_blank" 
  rel="noopener noreferrer"
  animate={{ height: "auto", opacity: 1 }}
><button
className='p-4 bg-gradient-to-r from-indigo-500 via-pink-600 to-purple-600 text-white font-bold rounded-md'
>Download Resume</button>
</motion.a>
  </div>

  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-600 p-1 shrink-0 will-change-transform"
  >
    <img
      src="/assets/sadia.jpg"
      alt="Sadia Naaz"
      className="w-full h-full object-cover rounded-full border-[6px] border-white dark:border-gray-900"
    />
  </motion.div>
</div>
    </div>
  )
}

export default About