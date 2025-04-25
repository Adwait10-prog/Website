import { motion } from "framer-motion";

type TimelineItemProps = {
  date: string;
  title: string;
  company: string;
  description: string;
  color: string;
  delay?: number;
};

const TimelineItem = ({ date, title, company, description, color, delay = 0 }: TimelineItemProps) => {
  return (
    <motion.div 
      className="mb-10 relative timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -left-[41px] p-2 bg-white dark:bg-gray-900 rounded-full">
        <div className={`w-5 h-5 bg-${color} rounded-full`}></div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <span className={`text-sm font-medium text-${color} dark:text-${color === 'primary' ? 'blue' : color === 'secondary' ? 'green' : 'purple'}-400`}>
          {date}
        </span>
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mt-1">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{company}</p>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
