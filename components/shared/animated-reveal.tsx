"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function AnimatedReveal({ children, className, delay = 0, y = 16 }: AnimatedRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
