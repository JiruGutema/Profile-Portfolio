"use client";

import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            
            if (!inline && match) {
              return (
                <CodeBlock className={className}>
                  {String(children).replace(/\n$/, '')}
                </CodeBlock>
              );
            }
            
            return (
              <code 
                className="px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground font-mono text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },
          h1({ children }) {
            return (
              <h1 className="text-3xl font-bold text-foreground mb-6 mt-8 first:mt-0">
                {children}
              </h1>
            );
          },
          h2({ children }) {
            return (
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                {children}
              </h2>
            );
          },
          h3({ children }) {
            return (
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                {children}
              </h3>
            );
          },
          p({ children }) {
            return (
              <p className="text-foreground leading-7 mb-4">
                {children}
              </p>
            );
          },
          ul({ children }) {
            return (
              <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
                {children}
              </ul>
            );
          },
          ol({ children }) {
            return (
              <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground">
                {children}
              </ol>
            );
          },
          li({ children }) {
            return (
              <li className="text-foreground">
                {children}
              </li>
            );
          },
          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 rounded-r-md">
                <div className="text-muted-foreground italic">
                  {children}
                </div>
              </blockquote>
            );
          },
          a({ href, children }) {
            return (
              <a 
                href={href}
                className="text-primary hover:text-primary/80 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          },
          strong({ children }) {
            return (
              <strong className="font-semibold text-foreground">
                {children}
              </strong>
            );
          },
          em({ children }) {
            return (
              <em className="italic text-foreground">
                {children}
              </em>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
