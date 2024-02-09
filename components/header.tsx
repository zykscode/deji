'use client';

/* eslint-disable unused-imports/no-unused-vars */
import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';

import { useDimensions } from '#/utils/use-dimensions';

import { MenuToggle } from './menuToggle';
import { MobileNav } from './mobile-nav';

type Props = {};

const Header = ({ children, items }: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <header className="place-ite sticky top-0 flex h-[5rem] w-full  place-items-center justify-between bg-transparent/10 backdrop-blur-sm md:flex-row-reverse">
      <div className="hidden md:flex">socials</div>
      <div className=" bg-yellow-200 font-atyp text-[1.75rem] font-bold md:text-[3rem] ">
        Damcom
      </div>
      <div className=" font-atyp text-2xl font-thin">
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <MenuToggle toggle={() => toggleOpen()} />

          {isOpen && (
            <MobileNav isOpen items={items!}>
              {children}
            </MobileNav>
          )}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
