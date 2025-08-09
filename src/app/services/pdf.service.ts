import { Injectable } from '@angular/core';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() {
    // Configure marked options for better rendering
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  /**
   * Convert markdown text to HTML
   */
  async markdownToHtml(markdown: string): Promise<string> {
    return await marked(markdown);
  }

  /**
   * Generate PDF from HTML content
   */
  async generatePDF(htmlContent: string, filename: string = 'document.pdf'): Promise<void> {
    try {
      // Create a temporary container for the HTML content
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = htmlContent;
      tempContainer.style.width = '210mm'; // A4 width
      tempContainer.style.padding = '20mm';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      tempContainer.style.fontSize = '12px';
      tempContainer.style.lineHeight = '1.6';
      tempContainer.style.color = '#333';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';

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

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
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
   * Generate PDF directly from markdown
   */
  async generatePDFFromMarkdown(markdown: string, filename: string = 'document.pdf'): Promise<void> {
    const html = await this.markdownToHtml(markdown);
    await this.generatePDF(html, filename);
  }
}
