"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { journeyEvents } from '../data/journey';

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-brand-bg relative border-b-4 border-brand-primary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="ACHIEVEMENTS." 
            subtitle="SYS.MODULE: JOURNEY_LOG" 
          />
        </motion.div>

        <div className="max-w-5xl border-2 border-brand-primary bg-brand-surface p-4 md:p-8 relative shadow-[8px_8px_0_0_var(--color-brand-primary)]">
          {/* Terminal Header */}
          <div className="flex items-center gap-4 border-b-2 border-brand-primary pb-4 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 border border-brand-primary bg-brand-primary"></div>
              <div className="w-3 h-3 border border-brand-primary"></div>
              <div className="w-3 h-3 border border-brand-primary"></div>
            </div>
            <span className="font-mono text-sm font-bold tracking-widest text-brand-primary uppercase">
              // execution_log.txt
            </span>
          </div>

          <div className="space-y-8 font-mono">
            {journeyEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative border-l-2 border-brand-accent pl-6 hover:border-brand-primary transition-colors"
              >
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-brand-bg border border-brand-accent group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors"></div>
                
                <div className="text-brand-muted text-sm mb-2 flex items-center gap-4">
                  <span className="text-brand-primary bg-brand-accent/20 px-2 py-0.5 font-bold">
                    [ {event.year} ]
                  </span>
                  <span className="hidden md:inline text-brand-border">....................</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3 font-display tracking-tight uppercase">
                  {event.title}
                </h4>
                
                <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-3xl">
                  {event.description}
                </p>
                
                <div className="mt-4 text-brand-accent text-xs">
                  &gt; STATUS: OK
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-4 border-t border-brand-border/50 text-brand-primary"
            >
              <span className="text-brand-accent font-bold">&gt;</span>
              <span className="w-3 h-5 bg-brand-primary animate-pulse"></span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
