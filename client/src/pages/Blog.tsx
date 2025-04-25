import { motion } from "framer-motion";
import { ChevronRight, Linkedin } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts, linkedinPosts } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PostType = "all" | "blog" | "linkedin";

const Blog = () => {
  const [activeTab, setActiveTab] = useState<PostType>("all");
  
  // Combine blog posts and LinkedIn posts and sort by date (most recent first)
  const allPosts = [...blogPosts, ...linkedinPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  const filteredPosts = activeTab === "all" 
    ? allPosts 
    : allPosts.filter(post => post.source === activeTab);

  return (
    <section id="blog" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-gray-800 dark:text-white">My Thoughts & Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Articles, reflections, and LinkedIn posts from my journey in business consulting, mentoring, and technology.
          </p>
        </motion.div>
        
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                activeTab === "all" 
                  ? "bg-white dark:bg-gray-700 text-primary dark:text-blue-400 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
              )}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                activeTab === "blog" 
                  ? "bg-white dark:bg-gray-700 text-primary dark:text-blue-400 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
              )}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveTab("linkedin")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center",
                activeTab === "linkedin" 
                  ? "bg-white dark:bg-gray-700 text-primary dark:text-blue-400 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
              )}
            >
              <Linkedin className="w-3 h-3 mr-1" /> LinkedIn
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          key={activeTab} // Force re-render of the animation when tab changes
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredPosts.map((post, index) => (
            <BlogCard 
              key={index} 
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              imagePath={post.imagePath}
              index={index}
              source={post.source}
              link={post.link}
            />
          ))}
        </motion.div>

        {activeTab === "linkedin" && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="https://linkedin.com/in/madhavdabke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All LinkedIn Posts <ChevronRight className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
        
        {activeTab !== "linkedin" && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-primary dark:text-blue-400 border border-primary dark:border-blue-400 rounded-md font-medium hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles <ChevronRight className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
