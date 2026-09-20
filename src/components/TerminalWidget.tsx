"use client";

import React, { useState, useEffect } from 'react';

interface TerminalWidgetProps {
  commands?: { cmd: string; output: string }[];
  className?: string;
}

const defaultCommands = [
  { cmd: 'whoami', output: 'programmer / builder / learner' },
  { cmd: 'status', output: 'building useful things...' }
];

export function TerminalWidget({ commands = defaultCommands, className = "" }: TerminalWidgetProps) {
  return (
    <div className={`brutalist-border bg-brand-primary overflow-hidden ${className}`}>
      <div className="flex items-center px-4 py-2 border-b-[3px] border-brand-primary bg-brand-surface gap-2">
        <div className="w-3 h-3 bg-brand-primary" />
        <div className="w-3 h-3 bg-brand-primary" />
        <div className="w-3 h-3 bg-brand-primary" />
        <span className="ml-2 font-mono text-xs font-bold text-brand-primary uppercase tracking-widest">sys.term</span>
      </div>
      <div className="p-4 font-mono text-sm space-y-4">
        {commands.map((c, i) => (
          <div key={i}>
            <div className="flex items-center text-brand-surface gap-2 font-bold">
              <span className="text-brand-accent">$</span>
              <span>{c.cmd}</span>
            </div>
            <div className="text-brand-accent mt-1 pl-4 opacity-80">
              {c.output}
            </div>
          </div>
        ))}
        <div className="flex items-center text-brand-surface gap-2 font-bold">
          <span className="text-brand-accent">$</span>
          <span className="w-2 h-4 bg-brand-accent animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}

