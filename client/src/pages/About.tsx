import { motion } from "framer-motion";
import SkillItem from "@/components/SkillItem";
import TimelineItem from "@/components/TimelineItem";
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
            Get to know me better - my background, skills, and professional journey.
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
              className="text-2xl font-bold text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              My Background
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I'm a passionate developer and designer with a background in computer science. I specialize in creating intuitive and engaging web experiences that solve real problems.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              With over 5 years of experience in the tech industry, I've worked with various technologies and frameworks to deliver high-quality digital products. I believe in writing clean, maintainable code and creating user-centric designs.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring.
            </motion.p>

            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h3>
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

          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience Timeline</h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-2">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  date={experience.date}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                  color={experience.color}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
