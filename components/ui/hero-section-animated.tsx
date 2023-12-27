'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default function HeroSectionAnimated() {
  return (
    <>
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
        className="text-title-1 z-[1] text-white"
      >
        <Balancer>
          Semina la bellezza,
          <br />
          raccogli la salute
        </Balancer>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
        className="z-[1] -mt-4 max-w-[1000px] text-17 leading-[190%] text-white"
      >
        <Balancer>
          Scopri i prodotti di Hevoluta nati per prendersi cura della persona da un punto di vista
          più ampio, per un benessere completo e duraturo.
        </Balancer>
      </motion.p>
      <Link href="/search" className="z-[1]">
        <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
            className="button-secondary-lg"
        >
            Scopri i prodotti
        </motion.button>
      </Link>
    </>
  );
};
