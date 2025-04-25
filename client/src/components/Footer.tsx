import { Link } from "wouter";
import { GitPullRequest, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center text-primary dark:text-blue-400 font-accent font-bold text-xl">
                <span className="font-accent mr-1">MD</span>
                <span className="text-gray-700 dark:text-gray-200 text-lg font-normal">| Madhav Dabke</span>
              </a>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Creating impactful digital experiences</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0">
            <div className="flex space-x-8">
              <Link href="/">
                <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">About</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Blog</a>
              </Link>
              <Link href="/projects">
                <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Projects</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Contact</a>
              </Link>
            </div>
            
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitPullRequest className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:hello@madhavdabke.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© {currentYear} Madhav Dabke. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
