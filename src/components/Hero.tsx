"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TerminalWidget } from './TerminalWidget';

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-12 overflow-hidden relative flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col z-20"
          >
            {/* Terminal Broadcast Banner */}
            <div className="bg-brand-primary text-brand-accent brutalist-border brutalist-shadow-sm px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider mb-8 w-fit transform -rotate-1 flex items-center gap-2">
              <span className="animate-pulse">&gt;</span> SYS_BROADCAST: OPEN TO SECURITY ROLES_
            </div>

            {/* Massive Structured Name */}
            <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] tracking-tighter text-brand-primary uppercase leading-[0.85] mb-6 drop-shadow-sm">
              PREM<br/>PATEL
            </h1>

            {/* Subtitle / Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-brand-primary uppercase tracking-tight flex items-center gap-3">
                <span className="text-brand-accent bg-brand-primary px-2 brutalist-shadow-sm">SYS.ADMIN</span>
                SOFTWARE BUILDER
              </h2>
            </div>

            {/* Terminal Skills Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['CYBERSECURITY', 'FULL-STACK', 'SYSTEMS'].map((badge) => (
                <div key={badge} className="bg-brand-surface border-2 border-brand-primary font-mono text-xs font-bold px-3 py-1 uppercase shadow-[2px_2px_0_0_#111] flex items-center gap-2">
                  <span className="text-brand-accent text-lg leading-none">*</span> {badge}
                </div>
              ))}
            </div>

            <p className="text-lg text-brand-primary max-w-lg mb-10 leading-relaxed font-mono border-l-4 border-brand-primary pl-4 bg-white/50 backdrop-blur-sm p-4 brutalist-border">
              $ cat description.txt<br/>
              <span className="text-brand-muted text-base mt-2 block font-sans">
                I build practical software, experiment with emerging technology, and explore how systems can be protected, tested, and improved.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="font-mono font-bold text-sm bg-brand-primary text-brand-accent brutalist-border brutalist-shadow px-8 py-4 uppercase tracking-wider hover:bg-brand-accent hover:text-brand-primary transition-colors hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center gap-2"
              >
                <span>./VIEW_PROJECTS.sh</span>
              </a>
              <a 
                href="#contact" 
                className="font-mono font-bold text-sm bg-brand-accent text-brand-primary brutalist-border brutalist-shadow px-8 py-4 uppercase tracking-wider hover:bg-white transition-colors hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center gap-2"
              >
                &darr; INIT_CONTACT
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 font-mono font-bold text-sm uppercase">
              <span>&gt; Network:</span>
              <a href="https://www.linkedin.com/in/prem-patel-b60411378/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-primary text-brand-accent brutalist-border brutalist-shadow-sm hover:bg-brand-accent hover:text-brand-primary transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">in</a>
              <a href="https://github.com/PremOp009" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-primary text-brand-accent brutalist-border brutalist-shadow-sm hover:bg-brand-accent hover:text-brand-primary transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">gh</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prem.patel000009@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-primary text-brand-accent brutalist-border brutalist-shadow-sm hover:bg-brand-accent hover:text-brand-primary transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">@</a>
            </div>
          </motion.div>

          {/* Right Floating Elements (Cyber-Brutalist Layout) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative h-[600px] hidden lg:block"
          >
            {/* The Photo - Terminal Framed */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 w-56 aspect-[3/4] brutalist-border brutalist-shadow bg-brand-primary p-2 rotate-2">
              {/* Terminal window header */}
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                <div className="w-2 h-2 rounded-full bg-brand-highlight"></div>
                <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                <span className="font-mono text-[10px] text-brand-accent ml-2 uppercase">img_src.exe</span>
              </div>
              <div className="relative w-full h-[calc(100%-1.5rem)] border border-brand-border">
                <Image 
                  src="/images/prem-profile.png"
                  alt="Prem Patel"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply pointer-events-none hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Terminal Widget replacing a floating card */}
            <div className="absolute top-10 left-0 z-20 w-64 -rotate-2 hover:rotate-0 transition-transform brutalist-shadow">
              <TerminalWidget />
            </div>

            {/* Floating Cyber Card 1 */}
            <div className="absolute bottom-32 left-4 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-44 flex flex-col -rotate-3 hover:rotate-0 transition-transform cursor-default">
              <div className="font-mono text-xs text-brand-accent mb-1 border-b border-brand-accent/30 pb-1">$ sys_arch</div>
              <span className="font-mono text-sm font-bold mt-2">SYSTEM<br/>ARCHITECTURE</span>
            </div>

            {/* Floating Cyber Card 2 */}
            <div className="absolute top-48 right-0 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-44 flex flex-col rotate-3 hover:rotate-0 transition-transform cursor-default z-20">
              <div className="font-mono text-xs text-brand-red mb-1 border-b border-brand-red/30 pb-1">$ sec_def</div>
              <span className="font-mono text-sm font-bold mt-2">DEFENSIVE<br/>SECURITY</span>
            </div>

            {/* Floating Cyber Card 3 */}
            <div className="absolute bottom-10 right-10 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-44 flex flex-col rotate-6 hover:rotate-0 transition-transform cursor-default z-20">
              <div className="font-mono text-xs text-white mb-1 border-b border-white/30 pb-1">$ dev_env</div>
              <span className="font-mono text-sm font-bold mt-2">FULL-STACK<br/>ENGINEERING</span>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 font-mono text-[100px] font-bold text-brand-primary/5 -z-10 leading-none">
              01
              <br/>
              10
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
