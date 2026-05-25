'use client';

import React from 'react';
import { skillsData } from '../data/skillsData';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const localizedSkills = skillsData[language] || skillsData['es'];

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/3 mb-10 md:mb-0 md:sticky md:top-24">
            <h2 className="section-title text-center md:text-left pb-3">{t("skills.title")}</h2>
            <p className="text-foreground-secondary mt-6 pr-6">
              {t("skills.description")}
            </p>
            
            <div className="hidden md:block mt-10">
              <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl absolute -z-10"></div>
              <div className="border border-border p-6 rounded-lg bg-background/80 backdrop-blur-sm">
                <p className="text-foreground-secondary italic">
                  &ldquo;{t("skills.quote")}&rdquo;
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            {localizedSkills.map((category, catIndex) => (
              <motion.div
                key={category.id}
                className={`mb-12 ${catIndex !== 0 ? 'border-t border-border pt-12' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-6">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-background-secondary border border-border rounded-lg p-3 hover:border-primary transition-all duration-200 flex items-center"
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;