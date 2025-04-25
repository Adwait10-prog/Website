import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, Linkedin, Facebook, Twitter } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import madhavProfile from "@/assets/images/madhav-profile.png";

const Home = () => {
  const typedText = useTypingEffect([
    "Finance Postgraduate.",
    "Business Consultant.",
    "Technology Consultant.",
    "Global Traveler."
  ], 100, 1000);

  return (
    <section id="home" className="min-h-screen flex items-center py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary dark:border-blue-500 italic text-gray-700 dark:text-gray-300">
              <p className="text-sm md:text-base">"The flight of imagination has no limit, except the one you wear on your own mind."</p>
              <p className="text-xs md:text-sm mt-2 text-right">- Padma Vibhushan Dr. R.A. Mashelkar, FRS</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-accent text-gray-800 dark:text-white leading-tight">
              Namasté, I'm <span className="text-primary dark:text-blue-400">Mādhav Dabke</span>
            </h1>
            <div className="h-10">
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {typedText}
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              I work in the corporate world for earning and associate myself with society for giving. With over 25 years of professional experience across 50+ countries.
            </p>
            
            <div className="flex gap-4 pt-2">
              <motion.a 
                href="https://linkedin.com/in/madhavdabke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Link href="/projects">
                <motion.a 
                  className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg dark:shadow-blue-500/20 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Work
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 font-medium rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 dark:opacity-50"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src={madhavProfile} 
                  alt="Madhav Dabke" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-blue-400 transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
