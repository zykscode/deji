"use client"

import React, { useRef } from 'react'
import { MenuToggle } from './menuToggle';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '#/utils/use-dimensions';

 
type Props = {}


const Header = (props: Props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
  return (
    <header className='w-full backdrop-blur-sm h-[5rem] bg-transparent/10 place-ite place-items-center  top-0 sticky flex md:flex-row-reverse justify-between' >
     <div className="hidden md:flex">socials</div> 
     <div className=" text-[1.75rem] md:text-[3rem] bg-yellow-200 font-bold font-atyp ">Damcom</div>  
     <div className=" font-thin font-atyp text-2xl">
     <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    ><MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </div> 
      
    </header>
  )
}

export default Header