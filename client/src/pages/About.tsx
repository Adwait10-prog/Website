import { motion } from "framer-motion";
import SkillItem from "@/components/SkillItem";
import TimelineItem from "@/components/TimelineItem";
import { BookOpen, Briefcase, Globe, Users } from "lucide-react";
import { skills, experiences } from "@/lib/constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-gray-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey, passions, and commitments to society.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2"
              variants={itemVariants}
            >
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Background
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I prefer to be called as 'Mādhav' (Mādhava - माधव). I am a Finance postgraduate, qualified Banking professional turned business and technology consultant with over 25 years of professional experience.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I study and admire design thinking techniques; practice its application in everyday life to design human centric solutions and enhance end user experience. I have travelled across the globe (50+ countries and still counting) for business consulting, connecting with amazing people and experiencing cultures.
            </motion.p>

            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 mt-8"
              variants={itemVariants}
            >
              <Users className="w-5 h-5 text-primary" />
              Personal Philosophy
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I am always a learner, sometimes a teacher and a mentor and a frequent traveler. Mentoring young minds, helping upcoming entrepreneurs, teaching underprivileged children and constantly trying to 'give back' to society in my own way is what my commitment is.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I am passionate about what I do and determined to achieve what I want from my life. My needs are simple, and I keep them that way. I have been successful in surfing on waves in my life. In my view, there are no bad days. There are some good days, and some are better.
            </motion.p>

            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 mt-8"
              variants={itemVariants}
            >
              <BookOpen className="w-5 h-5 text-primary" />
              Leisure & Interests
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Constantly reading something, weekend biking, holiday trekking is what I love and helps me to be fresh and keep going. Writing is my way of expressing. I try to limit it not more than 1 page, preferably.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              All that I write on my blogs, websites are my own opinion and not intended to cause any harm to anyone. Your comments and suggestions make my thoughts even clearer, better.
            </motion.p>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Professional Journey
            </h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-2 max-h-[600px] overflow-y-auto pr-4">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  date={experience.date}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                  color={experience.color}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div 
              className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <SkillItem 
                    key={index} 
                    name={skill.name} 
                    color={skill.color}
                    delay={index * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
