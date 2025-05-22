import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';
import {ThemeContext} from '../Context/ThemeContext'
const links = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" }
];

const MotionLink = motion(Link);

const NavBar = () => {
  const{darkMode,toggleTheme} = useContext(ThemeContext);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <header className="w-full shadow-md bg-white/30 dark:bg-gray-900/30 backdrop-blur-md fixed top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <motion.div className="text-2xl font-bold  bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
          >Sadia's PortFolio</motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true} duration={500}
                whilehover={{ scale: 1.1 }}
                whiletap={{ scale: 0.95 }}
                animate={{ height: "auto", opacity: 1 }}
                className="text-gray-500 text-xl dark:text-gray-100 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              aria-label="Toggle mobile menu"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Animation */}
        <AnimatePresence>
          {openMobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col pb-4 px-4 bg-white dark:bg-gray-900 overflow-hidden"
            >
              {links.map((link) => (
                <MotionLink
                  key={link.name}
                  to={link.to}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenMobileMenu(false)}
                  className="py-2 text-gray-500 dark:text-gray-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </MotionLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NavBar;
