import { motion } from "framer-motion";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imagePath: string;
  index: number;
  source?: "linkedin" | "blog";
  link?: string;
};

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  imagePath, 
  index, 
  source = "blog",
  link = "#" 
}: BlogCardProps) => {
  // Generate SVG placeholder with different colors based on imagePath
  // This avoids using actual images while still providing visual distinction
  const getSvgBackground = (path: string) => {
    let bgColor = "#3B82F6"; // default blue
    
    if (path.includes("design")) {
      bgColor = "#10B981"; // green
    } else if (path.includes("global")) {
      bgColor = "#8B5CF6"; // purple
    } else if (path.includes("mentor")) {
      bgColor = "#EC4899"; // pink
    } else if (path.includes("banking")) {
      bgColor = "#F59E0B"; // amber
    }
    
    return (
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 400" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={bgColor} opacity="0.8" />
        <text 
          x="50%" 
          y="50%" 
          fontFamily="sans-serif" 
          fontSize="24" 
          fill="white" 
          textAnchor="middle" 
          dominantBaseline="middle"
        >
          {title.split(" ")[0]}
        </text>
      </svg>
    );
  };

  return (
    <motion.article 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 }
        }
      }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden relative">
        <div className="w-full h-full object-cover transition-transform hover:scale-105">
          {getSvgBackground(imagePath)}
        </div>
        {source === "linkedin" && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2">
            <Linkedin className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
          {source === "linkedin" && (
            <>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Linkedin className="w-3 h-3 mr-1" /> LinkedIn Post
              </span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex justify-between items-center mt-2">
          <motion.a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary dark:text-blue-400 font-medium hover:underline"
            whileHover={{ x: 5 }}
          >
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
          
          {source === "linkedin" && (
            <motion.a
              href="https://linkedin.com/in/madhavdabke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              View on LinkedIn <ExternalLink className="ml-1 w-3 h-3" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
