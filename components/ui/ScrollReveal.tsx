"use client";
// components/ScrollReveal.js
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate to visible
      transition={{ duration: 0.6 }} // Transition duration
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
