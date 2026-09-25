"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TerminalWidget } from './TerminalWidget';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const DevicesIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
);

const HeartbeatIcon = () => (
  <svg xmlns="http://www.w3.org/2007/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
);

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-12 relative flex items-center overflow-hidden bg-brand-bg">
      {/* Globe / Network Lines (Right Side) */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none opacity-20 flex justify-center items-center overflow-hidden z-0">
        <div className="w-[600px] h-[600px] border-[1px] border-brand-primary rounded-full absolute mix-blend-overlay"></div>
        <div className="w-[800px] h-1 border-t border-brand-primary absolute mix-blend-overlay"></div>
        <div className="h-[800px] w-1 border-l border-brand-primary absolute mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center h-full relative z-20"
          >
            {/* Broadcast Badge */}
            <div className="bg-brand-primary text-brand-accent font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 mb-6 w-fit rounded-sm brutalist-shadow flex items-center gap-2 brutalist-border">
              <span className="animate-pulse">&gt;</span> 
              <span className="">&gt;</span> 
              SYS_BROADCAST: OPEN TO SECURITY ROLES_
            </div>

            {/* Massive Heading */}
            <h1 className="font-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] tracking-tighter leading-[0.85] mb-6 uppercase flex flex-col">
              <span className="text-brand-primary">PREM</span>
              <span className="text-brand-accent">PATEL</span>
            </h1>

            {/* Subtitle */}
            <div className="font-mono text-sm sm:text-base font-bold text-brand-primary tracking-widest mb-6 flex items-center gap-2">
              <span className="text-brand-accent">&lt;/&gt;</span> SYSTEMS &middot; SECURITY &middot; SOFTWARE BUILDER
            </div>

            {/* Description */}
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-sans max-w-md mb-8 bg-brand-surface brutalist-border p-4 brutalist-shadow-sm">
              <span className="font-mono font-bold text-brand-primary block mb-2">$ cat description.txt</span>
              I build secure, scalable and useful software solutions with a passion for cybersecurity, full-stack development and modern technologies.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="brutalist-border bg-brand-surface font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 uppercase flex items-center gap-2 text-brand-primary shadow-[2px_2px_0_0_#111] hover:bg-brand-primary hover:text-brand-surface transition-colors cursor-default">
                <span className="text-brand-accent"><ShieldIcon /></span> CYBERSECURITY
              </div>
              <div className="brutalist-border bg-brand-surface font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 uppercase flex items-center gap-2 text-brand-primary shadow-[2px_2px_0_0_#111] hover:bg-brand-primary hover:text-brand-surface transition-colors cursor-default">
                <span className="text-brand-accent"><CodeIcon /></span> FULL-STACK
              </div>
              <div className="brutalist-border bg-brand-surface font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 uppercase flex items-center gap-2 text-brand-primary shadow-[2px_2px_0_0_#111] hover:bg-brand-primary hover:text-brand-surface transition-colors cursor-default">
                <span className="text-brand-accent"><LayersIcon /></span> SYSTEMS
              </div>
            </div>

            {/* CTAs and Socials */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a 
                href="#projects" 
                className="group flex items-center bg-brand-primary text-brand-surface font-mono text-xs sm:text-sm font-bold uppercase rounded-sm overflow-hidden brutalist-shadow brutalist-border hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <div className="bg-brand-accent px-4 py-3 group-hover:bg-brand-darkred transition-colors flex items-center justify-center border-r-[3px] border-brand-primary">
                  &rarr;
                </div>
                <div className="px-6 py-3 tracking-wider">
                  VIEW MY PROJECTS
                </div>
                <div className="bg-brand-primary border-l-[3px] border-brand-primary px-3 py-3 text-brand-muted group-hover:text-brand-accent transition-colors">
                  &rarr;
                </div>
              </a>

              <div className="flex items-center gap-2">
                <a href="https://github.com/PremOp009" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-surface text-brand-primary brutalist-border brutalist-shadow-sm hover:bg-brand-primary hover:text-brand-accent transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/prem-patel-b60411378/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-surface text-brand-primary brutalist-border brutalist-shadow-sm hover:bg-brand-primary hover:text-brand-accent transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                  <LinkedinIcon />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-brand-surface text-brand-primary brutalist-border brutalist-shadow-sm hover:bg-brand-primary hover:text-brand-accent transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                  <XIcon />
                </a>
              </div>
            </div>

            {/* Bottom Footer Text */}
            <div className="flex items-center gap-3 font-mono text-xs font-bold text-brand-muted tracking-widest mt-auto">
              <HeartbeatIcon />
              <span>LEARN // BUILD // SECURE // GROW</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Cyber Composition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative h-[600px] lg:h-[700px] w-full flex flex-col items-center justify-center mt-10 lg:mt-0"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-10 right-10 font-mono text-[100px] md:text-[150px] font-bold text-brand-primary/5 -z-10 leading-none">
              01<br/>10
            </div>

            {/* Central Portrait Container - Polarad Style */}
            <div className="relative z-10 w-56 md:w-64 aspect-[3/4] brutalist-border brutalist-shadow bg-brand-primary p-2 rotate-2 mt-12 lg:mt-0">
              {/* Terminal window header */}
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">IMG_SRC.EXE</span>
              </div>
              <div className="relative w-full h-[calc(100%-1.5rem)] border border-brand-border bg-brand-surface">
                <Image 
                  src="/images/prem-profile.png"
                  alt="Prem Patel"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Tech overlay tint */}
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none hover:opacity-0 transition-opacity"></div>
              </div>
            </div>

            {/* Floating Widgets */}

            {/* 1. sys.term (Top Left) */}
            <div className="absolute top-10 md:top-24 left-0 md:left-4 z-20 w-64 -rotate-2 hover:rotate-0 transition-transform brutalist-shadow hidden sm:block">
              <TerminalWidget />
            </div>

            {/* 2. GSA Badge (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-16 md:top-32 right-0 md:right-4 z-20 brutalist-shadow bg-brand-primary brutalist-border text-brand-surface px-3 py-2 flex items-center gap-3 rounded-sm rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="bg-white p-1 brutalist-border-sm"><GoogleIcon /></div>
              <div>
                <div className="font-bold text-xs font-sans">GSA '26</div>
                <div className="text-[10px] text-brand-accent font-mono leading-tight">Google Student<br/>Ambassador '26</div>
              </div>
            </motion.div>

            {/* 3. sys_arch (Bottom Left) */}
            <div className="absolute bottom-40 md:bottom-32 left-0 md:left-10 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-40 md:w-44 hidden md:flex flex-col -rotate-3 hover:rotate-0 transition-transform cursor-default z-20">
              <div className="font-mono text-xs text-brand-accent mb-1 border-b border-brand-accent/30 pb-1">$ sys_arch</div>
              <span className="font-mono text-sm font-bold mt-2">SYSTEM<br/>ARCHITECTURE</span>
            </div>

            {/* 4. sec_def (Middle Right) */}
            <div className="absolute top-1/2 right-0 md:-right-4 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-40 md:w-44 hidden md:flex flex-col rotate-3 hover:rotate-0 transition-transform cursor-default z-20">
              <div className="font-mono text-xs text-brand-accent mb-1 border-b border-brand-accent/30 pb-1">$ sec_def</div>
              <span className="font-mono text-sm font-bold mt-2">DEFENSIVE<br/>SECURITY</span>
            </div>

            {/* 5. dev_env (Bottom Right) */}
            <div className="absolute bottom-20 md:bottom-28 right-4 md:right-8 bg-brand-primary text-brand-surface brutalist-border brutalist-shadow-sm p-4 w-40 md:w-44 hidden md:flex flex-col rotate-6 hover:rotate-0 transition-transform cursor-default z-20">
              <div className="font-mono text-xs text-brand-accent mb-1 border-b border-brand-accent/30 pb-1">$ dev_env</div>
              <span className="font-mono text-sm font-bold mt-2">FULL-STACK<br/>ENGINEERING</span>
            </div>

            {/* 6. cyberexpert.exe (Bottom Right Extreme) */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 md:bottom-0 right-4 md:-right-8 z-20 w-48 md:w-56"
            >
              <div className="font-mono text-[10px] md:text-xs bg-brand-surface brutalist-border p-3 brutalist-shadow">
                <div className="flex gap-2 font-bold mb-2">
                  <span className="text-brand-accent">&gt;</span> <span className="text-brand-primary">cyberexpert.exe</span>
                </div>
                <div className="text-brand-muted mb-2 tracking-widest uppercase text-[8px] md:text-[10px] font-bold">Initializing...</div>
                <div className="w-full h-3 border-[2px] border-brand-primary p-[2px] bg-white">
                  <div className="h-full bg-brand-accent w-3/4 animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* --- STATS BAR --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-0 left-0 right-0 flex justify-center md:justify-start xl:justify-center items-center gap-6 md:gap-10 pt-8 z-10 md:pr-48"
            >
              <div className="flex flex-col items-center text-center bg-brand-surface brutalist-border px-4 py-2 brutalist-shadow-sm min-w-[100px]">
                <div className="font-display text-2xl md:text-3xl text-brand-primary">
                  8<span className="text-brand-accent">+</span>
                </div>
                <div className="font-mono text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-brand-muted leading-tight">
                  Projects<br/>Built
                </div>
              </div>
              
              <div className="w-1 h-8 bg-brand-primary rounded-full"></div>

              <div className="flex flex-col items-center text-center bg-brand-surface brutalist-border px-4 py-2 brutalist-shadow-sm min-w-[100px]">
                <div className="font-display text-2xl md:text-3xl text-brand-primary">
                  5<span className="text-brand-accent">+</span>
                </div>
                <div className="font-mono text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-brand-muted leading-tight">
                  Certifications<br/>Earned
                </div>
              </div>

              <div className="w-1 h-8 bg-brand-primary rounded-full"></div>

              <div className="flex flex-col items-center text-center bg-brand-surface brutalist-border px-4 py-2 brutalist-shadow-sm min-w-[100px]">
                <div className="font-display text-2xl md:text-3xl text-brand-primary">
                  40K<span className="text-brand-accent">+</span>
                </div>
                <div className="font-mono text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-brand-muted leading-tight">
                  LinkedIn<br/>Impressions
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
