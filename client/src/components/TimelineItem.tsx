import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  date: string;
  title: string;
  company: string;
  description: string;
  color: string;
  delay?: number;
};

const TimelineItem = ({ date, title, company, description, color, delay = 0 }: TimelineItemProps) => {
  const getBgColorClass = () => {
    if (color === "primary") return "bg-blue-500";
    if (color === "secondary") return "bg-green-500";
    if (color === "accent") return "bg-purple-500";
    return "bg-blue-500";
  };

  const getBorderColorClass = () => {
    if (color === "primary") return "border-blue-500";
    if (color === "secondary") return "border-green-500";
    if (color === "accent") return "border-purple-500";
    return "border-blue-500";
  };

  const getTextColorClass = () => {
    if (color === "primary") return "text-blue-500 dark:text-blue-400";
    if (color === "secondary") return "text-green-500 dark:text-green-400";
    if (color === "accent") return "text-purple-500 dark:text-purple-400";
    return "text-blue-500 dark:text-blue-400";
  };

  return (
    <motion.div 
      className="mb-8 relative timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
    >
      <div className="absolute -left-[41px] p-2 bg-white dark:bg-gray-900 rounded-full border-2 border-gray-100 dark:border-gray-800">
        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", getBgColorClass())}>
          <Briefcase className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className={cn("bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4", getBorderColorClass())}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h4>
          <span className={cn("text-sm font-medium mt-1 sm:mt-0 sm:ml-2", getTextColorClass())}>
            {date}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">{company}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
