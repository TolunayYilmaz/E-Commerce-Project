import { motion } from "motion/react";
export default function FooterButton({ buttonName, textSize, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className={`px-6 py-2 bg-[#23A6F0] font-bold text-white rounded-[5px] ${textSize} `}
      onClick={onClick}
    >
      {buttonName}
    </motion.button>
  );
}
