import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    strokeWidth="1.75"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button className=" w-[6rem]  " onClick={toggle}>
    <svg width="69" height="23" className="w-full" viewBox="0 0 69 23">
      <Path
        variants={{
          closed: { d: "M 4 8 L 65 8" },
          open: { d: "M 4 15 L 65 8" }
        }}
      />
 
      <Path
        variants={{
          closed: { d: "M 5 15 L 65 15" },
          open: { d: "M 4 8 L 65 15" }
        }}
      />
    </svg>
  </button>
);
