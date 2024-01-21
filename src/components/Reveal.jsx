import { motion } from "framer-motion";

export default function Reveal({ delay, children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 28,
        delay: delay ?? 0.1,
        stiffness: 100,
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}