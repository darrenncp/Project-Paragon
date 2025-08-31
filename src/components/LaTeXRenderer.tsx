'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LaTeXRendererProps {
  children: string;
  displayMode?: boolean;
  className?: string;
}

export default function LaTeXRenderer({ 
  children, 
  displayMode = false, 
  className = '' 
}: LaTeXRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          displayMode,
          throwOnError: false,
          errorColor: '#ff6b35',
          strict: false,
        });
      } catch (err) {
        console.error('KaTeX rendering error:', err);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<span class="text-red-400 text-sm">[Math Error: ${children}]</span>`;
        }
      }
    }
  }, [children, displayMode]);

  return (
    <span 
      ref={containerRef} 
      className={`katex-container ${className}`}
    />
  );
}
