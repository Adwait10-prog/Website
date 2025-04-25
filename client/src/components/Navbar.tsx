import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [location] = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`bg-white dark:bg-dark py-4 px-6 md:px-12 transition-all duration-300 z-50 ${isSticky ? 'navbar-sticky' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center text-primary dark:text-blue-400 font-accent font-bold text-xl">
            <span className="font-accent mr-1">MD</span>
            <span className="text-gray-700 dark:text-gray-200 text-lg font-normal">| Madhav Dabke</span>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <a className={`${location === '/' ? 'text-primary dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary dark:after:bg-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`${location === '/about' ? 'text-primary dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary dark:after:bg-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className={`${location === '/blog' ? 'text-primary dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary dark:after:bg-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a className={`${location === '/projects' ? 'text-primary dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary dark:after:bg-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className={`${location === '/contact' ? 'text-primary dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary dark:after:bg-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
              Contact
            </a>
          </Link>
          
          {/* Dark Mode Toggle */}
          <motion.button 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <motion.button 
            className="text-gray-700 dark:text-gray-200 mr-4"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>
          
          <motion.button 
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden px-4 pt-4 pb-6 shadow-inner bg-gray-50 dark:bg-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <a className={`${location === '/' ? 'text-primary dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className={`${location === '/about' ? 'text-primary dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
                  About
                </a>
              </Link>
              <Link href="/blog">
                <a className={`${location === '/blog' ? 'text-primary dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
                  Blog
                </a>
              </Link>
              <Link href="/projects">
                <a className={`${location === '/projects' ? 'text-primary dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
                  Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className={`${location === '/contact' ? 'text-primary dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition'}`}>
                  Contact
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
