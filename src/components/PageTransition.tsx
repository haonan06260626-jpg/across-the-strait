"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-strait-blue"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
