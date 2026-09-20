import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  lightText?: boolean;
}

export function SectionHeading({ title, subtitle, lightText = false }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24 flex flex-col items-start relative">
      {subtitle && (
        <div className="flex items-center gap-4 mb-6 border border-brand-primary p-2 bg-brand-surface shadow-[4px_4px_0_0_var(--color-brand-accent)] w-fit z-10">
          <div className="w-2 h-2 bg-brand-accent animate-pulse"></div>
          <span className="font-mono text-xs md:text-sm tracking-widest text-brand-primary font-bold uppercase">
            &gt; {subtitle}
          </span>
        </div>
      )}
      <h2 className={`text-5xl md:text-7xl font-display uppercase tracking-tighter leading-[0.9] whitespace-pre-line relative z-0 ${lightText ? 'text-white' : 'text-brand-primary'}`}>
        {title}
      </h2>
    </div>
  );
}
