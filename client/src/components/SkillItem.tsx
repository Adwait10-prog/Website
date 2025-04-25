import { motion } from "framer-motion";

type SkillItemProps = {
  name: string;
  color: string;
  delay?: number;
};

const SkillItem = ({ name, color, delay = 0 }: SkillItemProps) => {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-${color}`}></div>
        <span className="text-gray-700 dark:text-gray-200">{name}</span>
      </div>
    </motion.div>
  );
};

export default SkillItem;
