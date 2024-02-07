import type { SVGMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import * as React from 'react';

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <motion.button
    whileHover={{ scale: 1.2 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    className="w-[6rem]"
    onClick={toggle}
  >
    <svg width="69" height="23" className="w-full" viewBox="0 0 69 23">
      <Path
        variants={{
          closed: { d: 'M 4 2 L 65 2' },
          open: { d: 'M 4 15 L 65 8' },
        }}
      />

      <Path
        variants={{
          closed: {
            d: 'M 4 11.6 L 65 11.5',
            opacity: 0,
            pathLength: 1,
            transition: { duration: 0.1 },
          },
          open: {
            d: 'M 4 15 L 65 8',
            opacity: 1,
          },
        }}
      />

      <Path
        variants={{
          closed: { d: 'M 5 21 L 65 21' },
          open: { d: 'M 4 8 L 65 15' },
        }}
      />
    </svg>
  </motion.button>
);
