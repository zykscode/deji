import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  i: number;
  isOpen: boolean;
};

const grid = {
  close: (i: number) => ({
    y: -1000,
    transition: {
      duration: 0.6,
      ease: 'linear',
      delay: i * 0.2,
    },
  }),
  open: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.6,
      type: 'ease-in',
      delay: i * 0.2,
    },
  }),
};

const Grid = ({ i }: Props) => {
  return (
    <motion.div
      variants={{ close: grid.close(i), open: grid.open(i) }}
      className="h-screen bg-yellow-500 p-10"
    />
  );
};

export default Grid;
