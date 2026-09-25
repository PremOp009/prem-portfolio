"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const links = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[3px] border-brand-primary bg-brand-surface ${
        scrolled ? 'py-4 brutalist-shadow-sm' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <span className="bg-brand-primary text-white font-display font-bold text-xl px-2.5 py-1.5 brutalist-border group-hover:bg-brand-accent transition-colors">PP</span>
          <span className="font-mono font-bold text-xl text-brand-primary ml-4 uppercase tracking-widest flex items-center gap-2">
            PREM PATEL <span className="text-brand-accent animate-pulse font-bold text-2xl mb-1">_</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono font-bold text-brand-primary hover:text-brand-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="text-brand-primary hover:text-brand-accent transition-colors ml-4 p-2 brutalist-border bg-brand-surface brutalist-shadow-sm hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none">
            <Sun size={20} />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary p-2 brutalist-border bg-brand-accent brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-b-[3px] border-brand-primary py-6 px-6 brutalist-shadow flex flex-col gap-4">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono font-bold text-brand-primary hover:text-brand-accent p-3 uppercase tracking-widest border-b-[3px] border-brand-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="text-sm font-mono font-bold text-brand-primary hover:text-brand-accent p-3 uppercase tracking-widest flex items-center gap-2 brutalist-border bg-brand-surface brutalist-shadow-sm mt-4">
            <Sun size={16} /> TOGGLE THEME
          </button>
        </div>
      )}
    </header>
  );
}
