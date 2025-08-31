'use client';

import { useMemo } from 'react';
import LaTeXRenderer from './LaTeXRenderer';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const processedContent = useMemo(() => {
    // Split content by LaTeX delimiters
    const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/);
    
    return parts.map((part, index) => {
      // Check if this part is LaTeX
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Display mode LaTeX (block)
        const latex = part.slice(2, -2);
        return (
          <div key={index} className="my-4 text-center">
            <LaTeXRenderer displayMode={true}>{latex}</LaTeXRenderer>
          </div>
        );
      } else if (part.startsWith('$') && part.endsWith('$')) {
        // Inline LaTeX
        const latex = part.slice(1, -1);
        return (
          <LaTeXRenderer key={index} displayMode={false}>{latex}</LaTeXRenderer>
        );
      } else {
        // Regular text - process basic markdown
        return processBasicMarkdown(part, index);
      }
    });
  }, [content]);

  return (
    <div className={`prose prose-lg max-w-none text-gray-300 ${className}`}>
      {processedContent}
    </div>
  );
}

function processBasicMarkdown(text: string, baseKey: number): React.ReactElement {
  // Split by lines to handle different markdown elements
  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const key = `${baseKey}-${i}`;
    
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key} className="text-3xl font-bold text-white mb-4 mt-6 font-heading">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key} className="text-2xl font-bold text-white mb-3 mt-5 font-heading">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key} className="text-xl font-bold text-white mb-2 mt-4 font-heading">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      // Handle lists (simplified)
      elements.push(
        <ul key={key} className="list-disc list-inside mb-2">
          <li className="text-gray-300">{line.slice(2)}</li>
        </ul>
      );
    } else if (line.match(/^\d+\. /)) {
      // Handle numbered lists (simplified)
      elements.push(
        <ol key={key} className="list-decimal list-inside mb-2">
          <li className="text-gray-300">{line.replace(/^\d+\. /, '')}</li>
        </ol>
      );
    } else if (line.trim() === '') {
      elements.push(<br key={key} />);
    } else if (line.trim() !== '') {
      // Regular paragraph with inline formatting
      const formattedLine = processInlineFormatting(line);
      elements.push(
        <p key={key} className="text-gray-300 mb-3 leading-relaxed">
          {formattedLine}
        </p>
      );
    }
  }
  
  return <div key={baseKey}>{elements}</div>;
}

function processInlineFormatting(text: string): (string | React.ReactElement)[] {
  // Handle bold, italic, and code formatting
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index} className="italic">{part.slice(1, -1)}</em>;
    } else if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="bg-gray-800 text-orange-400 px-1 py-0.5 rounded text-sm font-mono">
          {part.slice(1, -1)}
        </code>
      );
    } else {
      return part;
    }
  });
}
