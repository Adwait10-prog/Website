import { motion } from "framer-motion";
import { GitPullRequest, ExternalLink } from "lucide-react";

type Technology = {
  name: string;
  color: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: Technology[];
  imagePath: string;
  githubUrl: string;
  liveUrl: string;
  index: number;
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imagePath, 
  githubUrl, 
  liveUrl,
  index
}: ProjectCardProps) => {
  // Generate SVG placeholder with different colors based on imagePath
  // This avoids using actual images while still providing visual distinction
  const getSvgBackground = (path: string) => {
    let bgColor = "#3B82F6"; // default blue
    let gradientColor = "#8B5CF6"; // purple
    
    if (path.includes("fitness")) {
      bgColor = "#10B981"; // green
      gradientColor = "#3B82F6"; // blue
    } else if (path.includes("portfolio")) {
      bgColor = "#8B5CF6"; // purple
      gradientColor = "#EC4899"; // pink
    } else if (path.includes("recipe")) {
      bgColor = "#EC4899"; // pink
      gradientColor = "#F59E0B"; // amber
    }
    
    return (
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 400" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={bgColor} />
            <stop offset="100%" stopColor={gradientColor} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grad-${index})`} />
        <text 
          x="50%" 
          y="50%" 
          fontFamily="sans-serif" 
          fontSize="28" 
          fontWeight="bold"
          fill="white" 
          textAnchor="middle" 
          dominantBaseline="middle"
        >
          {title}
        </text>
      </svg>
    );
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 }
        }
      }}
      whileHover={{ y: -10 }}
    >
      <div className="h-64 overflow-hidden">
        <div className="w-full h-full object-cover transition-transform hover:scale-105">
          {getSvgBackground(imagePath)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 my-3">
          {technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className={`px-3 py-1 bg-${tech.color}-100 dark:bg-${tech.color}-900 text-${tech.color}-600 dark:text-${tech.color}-300 text-xs font-medium rounded-full`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>
        <div className="flex gap-4">
          <motion.a 
            href={githubUrl} 
            className="inline-flex items-center text-primary dark:text-blue-400 font-medium hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitPullRequest className="mr-2 w-4 h-4" /> View Code
          </motion.a>
          <motion.a 
            href={liveUrl} 
            className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
