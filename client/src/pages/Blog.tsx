import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/constants";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-gray-800 dark:text-white">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Thoughts, learnings, and insights from my journey in tech and design.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
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
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index} 
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              imagePath={post.imagePath}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
      </div>
    </section>
  );
};

export default Blog;
