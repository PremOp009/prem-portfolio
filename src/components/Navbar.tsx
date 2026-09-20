"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
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
        <a href="#" className="flex items-center">
          <span className="bg-brand-primary text-white font-display text-xl px-2 py-1">PP</span>
          <span className="font-mono font-bold text-lg text-brand-primary ml-4 uppercase tracking-widest bg-brand-accent brutalist-border px-3 py-1">
            PREM PATEL
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono font-bold text-brand-primary hover:bg-brand-highlight px-3 py-2 transition-colors uppercase tracking-widest border-2 border-transparent hover:border-brand-primary hover:brutalist-shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary p-2 border-[3px] border-brand-primary bg-brand-accent brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-b-[3px] border-brand-primary py-6 px-6 brutalist-shadow flex flex-col gap-4">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-mono font-bold text-brand-primary hover:bg-brand-highlight p-3 uppercase tracking-widest border-[3px] border-transparent hover:border-brand-primary hover:brutalist-shadow-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

