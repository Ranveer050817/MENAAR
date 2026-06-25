import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      {children}
    </section>
  );
}

export function FadeIn({ children, delay = 0, className, direction = 'up', ...props }: { children: React.ReactNode, delay?: number, className?: string, direction?: 'up' | 'down' | 'left' | 'right' | 'none' } & React.HTMLAttributes<HTMLDivElement>) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
