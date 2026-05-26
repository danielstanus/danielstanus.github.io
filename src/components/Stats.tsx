'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaBriefcase, FaFolderOpen, FaCode, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', duration = 1.5 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className="font-bold">0{suffix}</span>;
};

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const statsItems = [
    {
      id: 'experience',
      icon: <FaBriefcase className="w-6 h-6 text-primary" />,
      value: 8,
      suffix: '+',
      labelKey: 'stats.experience',
    },
    {
      id: 'projects',
      icon: <FaFolderOpen className="w-6 h-6 text-primary" />,
      value: 15,
      suffix: '+',
      labelKey: 'stats.projects',
    },
    {
      id: 'technologies',
      icon: <FaCode className="w-6 h-6 text-primary" />,
      value: 4,
      suffix: '',
      labelKey: 'stats.technologies',
    },
    {
      id: 'languages',
      icon: <FaLanguage className="w-6 h-6 text-primary" />,
      value: 3,
      suffix: '',
      labelKey: 'stats.languages',
    },
  ];

  return (
    <div className="w-full py-10 relative overflow-hidden">
      {/* Background decorations matching the premium theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-32 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-background-light dark:bg-background-light/40 border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Highlight line on top on hover */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              
              <div className="flex flex-col items-center text-center">
                {/* Icon wrapper with animated rotation/scale on hover */}
                <div className="p-3 bg-primary/5 dark:bg-primary/10 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-primary/5">
                  {item.icon}
                </div>
                
                {/* Value counter */}
                <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                
                {/* Localized Label */}
                <p className="text-sm md:text-base text-foreground-secondary font-medium tracking-wide">
                  {t(item.labelKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
