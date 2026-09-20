"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-surface relative border-y border-brand-border">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="TOOLS I USE.&#10;SKILLS I'M BUILDING." 
            subtitle="04 // TECHNICAL TOOLBOX" 
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-brand-bg border border-brand-border p-6 rounded-sm h-full">
                <div className="flex items-center gap-3 mb-6 border-b border-brand-border pb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                  <h3 className="font-mono text-sm font-bold text-brand-primary tracking-wider uppercase">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-muted text-sm hover:text-brand-primary hover:border-brand-accent/50 transition-colors rounded-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
