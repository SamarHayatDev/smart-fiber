"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.2, // 20% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
