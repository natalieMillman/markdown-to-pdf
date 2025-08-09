import { Injectable } from '@angular/core';

declare var Prism: any;
declare var katex: any;

@Injectable({
  providedIn: 'root'
})
export class SyntaxMathService {

  constructor() { }

  /**
   * Apply syntax highlighting to code blocks
   */
  highlightCodeBlocks(element: HTMLElement): void {
    if (typeof Prism !== 'undefined') {
      // Find all code blocks
      const codeBlocks = element.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Auto-detect language from class name
        const className = block.className;
        const languageMatch = className.match(/language-(\w+)/);
        
        if (languageMatch) {
          const language = languageMatch[1];
          // Ensure the language is loaded
          if (Prism.languages[language]) {
            Prism.highlightElement(block);
          } else {
            // Fallback to plain text highlighting
            block.classList.add('language-plaintext');
            Prism.highlightElement(block);
          }
        } else {
          // Add generic highlighting for code without specified language
          block.classList.add('language-plaintext');
          Prism.highlightElement(block);
        }
      });
    }
  }

  /**
   * Render math expressions using KaTeX
   */
  renderMath(element: HTMLElement): void {
    if (typeof katex !== 'undefined') {
      // Render inline math ($ ... $)
      this.renderInlineMath(element);
      
      // Render display math ($$ ... $$)
      this.renderDisplayMath(element);
    }
  }

  /**
   * Render inline math expressions
   */
  private renderInlineMath(element: HTMLElement): void {
    const mathRegex = /\$([^$\n]+?)\$/g;
    this.processTextNodes(element, mathRegex, (match, mathContent) => {
      try {
        const rendered = katex.renderToString(mathContent.trim(), {
          throwOnError: false,
          displayMode: false
        });
        return `<span class="katex-inline">${rendered}</span>`;
      } catch (error) {
        console.warn('KaTeX inline rendering error:', error);
        return `<code class="math-error">$${mathContent}$</code>`;
      }
    });
  }

  /**
   * Render display math expressions
   */
  private renderDisplayMath(element: HTMLElement): void {
    const mathRegex = /\$\$([^$]+?)\$\$/g;
    this.processTextNodes(element, mathRegex, (match, mathContent) => {
      try {
        const rendered = katex.renderToString(mathContent.trim(), {
          throwOnError: false,
          displayMode: true
        });
        return `<div class="katex-display">${rendered}</div>`;
      } catch (error) {
        console.warn('KaTeX display rendering error:', error);
        return `<div class="math-error">$$${mathContent}$$</div>`;
      }
    });
  }

  /**
   * Process text nodes and replace math expressions
   */
  private processTextNodes(element: HTMLElement, regex: RegExp, replacer: (match: string, content: string) => string): void {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // Skip text nodes inside code blocks and math elements
          const parent = node.parentElement;
          if (parent && (
            parent.tagName === 'CODE' ||
            parent.tagName === 'PRE' ||
            parent.classList.contains('katex') ||
            parent.classList.contains('katex-display') ||
            parent.classList.contains('katex-inline')
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes: Text[] = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node as Text);
    }

    textNodes.forEach(textNode => {
      const text = textNode.textContent || '';
      if (regex.test(text)) {
        const newHTML = text.replace(regex, replacer);
        if (newHTML !== text) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newHTML;
          
          // Replace the text node with the rendered content
          const parent = textNode.parentNode;
          if (parent) {
            while (tempDiv.firstChild) {
              parent.insertBefore(tempDiv.firstChild, textNode);
            }
            parent.removeChild(textNode);
          }
        }
      }
    });
  }

  /**
   * Apply both syntax highlighting and math rendering
   */
  processContent(element: HTMLElement): void {
    // First render math (before syntax highlighting to avoid conflicts)
    this.renderMath(element);
    
    // Then apply syntax highlighting
    this.highlightCodeBlocks(element);
  }

  /**
   * Get supported programming languages for syntax highlighting
   */
  getSupportedLanguages(): string[] {
    return [
      'javascript', 'typescript', 'python', 'java', 'csharp', 'cpp', 'c',
      'html', 'css', 'scss', 'json', 'xml', 'yaml', 'markdown',
      'bash', 'shell', 'sql', 'php', 'ruby', 'go', 'rust', 'swift',
      'kotlin', 'dart', 'r', 'matlab', 'latex', 'dockerfile'
    ];
  }

  /**
   * Check if libraries are loaded
   */
  isReady(): boolean {
    return typeof Prism !== 'undefined' && typeof katex !== 'undefined';
  }
}
