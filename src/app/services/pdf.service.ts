import { Injectable } from '@angular/core';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// Note: We'll handle syntax highlighting in post-processing instead
import { SyntaxMathService } from './syntax-math.service';

export interface PDFPageFormat {
  name: string;
  width: number;  // in mm
  height: number; // in mm
}

export interface PDFMargins {
  top: number;    // in mm
  right: number;  // in mm
  bottom: number; // in mm
  left: number;   // in mm
}

export interface PDFConfig {
  format: PDFPageFormat;
  orientation: 'portrait' | 'landscape';
  margins: PDFMargins;
}

export const PDF_FORMATS: { [key: string]: PDFPageFormat } = {
  A4: { name: 'A4', width: 210, height: 297 },
  LETTER: { name: 'Letter', width: 216, height: 279 },
  LEGAL: { name: 'Legal', width: 216, height: 356 },
  CUSTOM: { name: 'Custom', width: 210, height: 297 }
};

export const DEFAULT_MARGINS: PDFMargins = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
};

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private syntaxMathService: SyntaxMathService) {
    this.configureMarked();
  }

  private configureMarked(): void {
    // Configure marked options (syntax highlighting handled in post-processing)
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Convert markdown text to HTML with syntax highlighting and math support
   */
  async markdownToHtml(markdown: string): Promise<string> {
    // First convert markdown to HTML
    let html = await marked(markdown);
    
    // Create a temporary element to process the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Apply syntax highlighting and math rendering
    if (this.syntaxMathService.isReady()) {
      this.syntaxMathService.processContent(tempDiv);
      html = tempDiv.innerHTML;
    }
    
    return html;
  }

  /**
   * Generate PDF from HTML content with configuration
   */
  async generatePDF(htmlContent: string, filename: string = 'document.pdf', config?: PDFConfig): Promise<void> {
    try {
      // Use default config if not provided
      const pdfConfig = config || {
        format: PDF_FORMATS['A4'],
        orientation: 'portrait',
        margins: DEFAULT_MARGINS
      };

      // Calculate dimensions based on orientation
      const pageWidth = pdfConfig.orientation === 'portrait' 
        ? pdfConfig.format.width 
        : pdfConfig.format.height;
      const pageHeight = pdfConfig.orientation === 'portrait' 
        ? pdfConfig.format.height 
        : pdfConfig.format.width;

      // Calculate content area
      const contentWidth = pageWidth - pdfConfig.margins.left - pdfConfig.margins.right;
      const contentHeight = pageHeight - pdfConfig.margins.top - pdfConfig.margins.bottom;

      // Create a temporary container for the HTML content
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = htmlContent;
      tempContainer.style.width = `${contentWidth}mm`;
      tempContainer.style.padding = `${pdfConfig.margins.top}mm ${pdfConfig.margins.right}mm ${pdfConfig.margins.bottom}mm ${pdfConfig.margins.left}mm`;
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      tempContainer.style.fontSize = '12px';
      tempContainer.style.lineHeight = '1.6';
      tempContainer.style.color = '#333';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.boxSizing = 'border-box';

      // Add CSS styles for PDF formatting
      const style = document.createElement('style');
      style.textContent = `
        h1, h2, h3, h4, h5, h6 {
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        h1 { font-size: 24px; color: #2c3e50; }
        h2 { font-size: 20px; color: #34495e; }
        h3 { font-size: 18px; color: #34495e; }
        h4 { font-size: 16px; color: #34495e; }
        h5 { font-size: 14px; color: #34495e; }
        h6 { font-size: 12px; color: #34495e; }
        p { margin-bottom: 12px; }
        code {
          background-color: #f4f4f4;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
        }
        pre {
          background-color: #f4f4f4;
          padding: 12px;
          border-radius: 5px;
          overflow-x: auto;
          margin: 12px 0;
        }
        blockquote {
          border-left: 4px solid #ddd;
          padding-left: 12px;
          margin: 12px 0;
          color: #666;
          font-style: italic;
        }
        ul, ol {
          padding-left: 20px;
          margin-bottom: 12px;
        }
        li {
          margin-bottom: 4px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin: 12px 0;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
      `;
      tempContainer.appendChild(style);

      // Add to document temporarily
      document.body.appendChild(tempContainer);

      // Convert HTML to canvas
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Remove temporary container
      document.body.removeChild(tempContainer);

      // Create PDF with custom configuration
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: pdfConfig.orientation,
        unit: 'mm',
        format: [pageWidth, pageHeight]
      });
      
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF. Please try again.');
    }
  }

  /**
   * Generate PDF directly from markdown with configuration
   */
  async generatePDFFromMarkdown(markdown: string, filename: string = 'document.pdf', config?: PDFConfig): Promise<void> {
    const html = await this.markdownToHtml(markdown);
    await this.generatePDF(html, filename, config);
  }
}
