import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
     strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <motion.button  whileHover={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
 className=" w-[6rem]  " onClick={toggle}>
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
  </motion.button>
);
