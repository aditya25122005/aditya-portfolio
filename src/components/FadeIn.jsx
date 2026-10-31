import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ amount: 0.2 }} // Jab 20% element screen par aaye tab animation trigger hoga
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier curve
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;