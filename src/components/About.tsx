"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Terminal } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative p-8 md:p-12 brutalist-border brutalist-shadow overflow-hidden group border-[3px] border-black"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-[url('/images/about-photo.jpg')] bg-cover bg-[center_35%]"
              />
              {/* Dark Gradient Overlay (Darker at bottom for text, lighter at top for face) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/30 via-[#111111]/70 to-[#111111]/90 transition-all duration-500" />
              
              <div className="relative z-10">
                <SectionHeading 
                  title="CURIOUS BY DEFAULT.&#10;BUILT TO EXPLORE." 
                  subtitle="01 // ABOUT ME" 
                  lightText={true}
                />
                
                <div className="prose prose-lg max-w-3xl font-sans text-white/90 mt-8">
                  <p className="text-xl leading-relaxed mb-6 font-medium">
                    I'm <span className="text-brand-accent font-bold">Prem Patel</span>, a programmer and engineering student who enjoys turning ideas into working software.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    I'm exploring <span className="text-brand-accent font-bold">cybersecurity</span>, <span className="text-brand-accent font-bold">system architecture</span>, and the technologies that help us build and protect real-world systems. My approach is practical: I build to understand how things work, and I break things down to learn how they can be secured.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-brand-border bg-brand-surface p-6 rounded-sm relative mt-12 lg:mt-0"
            >
              <div className="absolute -top-3 -left-3 bg-brand-accent p-2 rounded-sm text-brand-primary border border-brand-border shadow-sm">
                <Terminal size={20} />
              </div>
              
              <h3 className="font-mono font-bold text-sm text-brand-muted uppercase tracking-wider mb-6 ml-4">
                CURRENT FOCUS
              </h3>
              
              <ul className="space-y-4 font-mono text-sm">
                {[
                  'Software Engineering',
                  'Networking Fundamentals',
                  'System Architecture',
                  'Cybersecurity Learning'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-accent mt-0.5">&gt;</span>
                    <span className="text-brand-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
