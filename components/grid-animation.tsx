import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  i: number;
  isOpen: boolean;
};

const grid = {
  hidden: (i) => ({
    y: -1000,
    transition: {
      duration: 0.6,
      ease: 'linear',
      delay: i * 0.2,
    },
  }),
  show: (i) => ({
    y: 0,
    transition: {
      duration: 0.6,
      type: 'ease-in',
      delay: i * 0.2,
    },
  }),
};

const Grid = ({ i}: Props) => {
  return (
    <motion.div
      variants={{ hidden: grid.hidden(i), show: grid.show(i) }}
      className="h-screen bg-yellow-300 p-1"
    />
  );
};

export default Grid;
