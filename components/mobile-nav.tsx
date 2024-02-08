'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { siteConfig } from '#/config/site';
import type { MainNavItem } from '#/types';
import { useLockBody } from '#/utils/use-lock-body';
import { cn } from '#/utils/utils';

import Grid from './grid-animation';

interface MobileNavProps {
  items: MainNavItem[];
  isOpen: boolean;
  children?: React.ReactNode;
}

const mobileCard = {
  hidden: {
    transition: {
      duration: 0.6,
    },
  },
  show: {
    transition: {
      duration: 0.6,
    },
  },
};
const mobileTab = {
  hidden: {
    opacity: 0,
    scale: [1, 0],
    transition: {
      duration: 0.6,
      type: 'ease-in',
    },
  },
  show: {
    y: [150, 0],
    opacity: [0, 1],
    transition: {
      type: 'ease-in',
      duration: 0.6,
      delay: 1.2,
    },
  },
};
const gridItems = [0, 1, 2, 3];

export function MobileNav({ items, isOpen, children }: MobileNavProps) {
  useLockBody();

  return (
    <>
      <motion.div
        variants={mobileCard}
        className={`absolute inset-0 -z-20 grid grid-cols-4 ${
          isOpen ? 'bg-secondaryFg  backdrop-blur-sm ' : '4 inset-0 scale-0'
        } md:hidden `}
      >
        <div className="absolute inset-0 z-20 grid  h-screen grid-cols-4">
          {gridItems.map((i) => {
            return <Grid isOpen={isOpen} key={i} i={i} />;
          })}
        </div>
      </motion.div>
      <motion.div
        className={cn(
          'fixed inset-0 z-30 top-16 bg-yellow-400 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md  md:hidden ',
        )}
        variants={mobileTab}
      >
        <div className="text-primaryFg relative z-20 grid gap-6 rounded-md bg-green-500 p-4 shadow-xl">
          <Link href="/" passHref className="flex items-center space-x-2">
            DAmcom
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.disabled ? '#' : navItem.href}
                passHref
                className={cn(
                  'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                  navItem.disabled && 'cursor-not-allowed opacity-60',
                )}
              >
                {navItem.title}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </motion.div>
    </>
  );
}
