import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintPreviewService {

  constructor() { }

  /**
   * Open print preview in a new window
   */
  openPrintPreview(htmlContent: string, title: string = 'Markdown Document'): void {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
      alert('Please allow popups to use print preview feature.');
      return;
    }

    const printDocument = this.generatePrintDocument(htmlContent, title);
    printWindow.document.write(printDocument);
    printWindow.document.close();

    // Wait for content to load, then focus the window
    printWindow.onload = () => {
      printWindow.focus();
    };
  }

  /**
   * Generate a complete HTML document for printing
   */
  private generatePrintDocument(content: string, title: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Print Preview</title>
    <style>
        /* Print-optimized styles */
        @page {
            margin: 2cm;
            size: A4;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 21cm;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: bold;
            page-break-after: avoid;
        }
        
        h1 {
            font-size: 28px;
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 24px;
            color: #34495e;
            border-bottom: 2px solid #bdc3c7;
            padding-bottom: 8px;
        }
        
        h3 {
            font-size: 20px;
            color: #34495e;
        }
        
        h4 {
            font-size: 18px;
            color: #34495e;
        }
        
        h5 {
            font-size: 16px;
            color: #34495e;
        }
        
        h6 {
            font-size: 14px;
            color: #34495e;
        }
        
        p {
            margin-bottom: 16px;
            text-align: justify;
            orphans: 2;
            widows: 2;
        }
        
        code {
            background-color: #f8f8f8;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', 'Monaco', monospace;
            font-size: 0.9em;
            border: 1px solid #e1e1e8;
        }
        
        pre {
            background-color: #f8f8f8;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 16px 0;
            border: 1px solid #e1e1e8;
            page-break-inside: avoid;
        }
        
        pre code {
            background: none;
            padding: 0;
            border: none;
            font-size: 0.85em;
        }
        
        blockquote {
            border-left: 4px solid #3498db;
            padding-left: 16px;
            margin: 16px 0;
            color: #555;
            font-style: italic;
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 0 6px 6px 0;
        }
        
        ul, ol {
            padding-left: 24px;
            margin-bottom: 16px;
        }
        
        li {
            margin-bottom: 6px;
            page-break-inside: avoid;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
            page-break-inside: avoid;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
        }
        
        hr {
            border: none;
            border-top: 2px solid #bdc3c7;
            margin: 24px 0;
            page-break-after: avoid;
        }
        
        a {
            color: #3498db;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        /* Print-specific styles */
        @media print {
            body {
                padding: 0;
            }
            
            .no-print {
                display: none !important;
            }
            
            a[href]:after {
                content: " (" attr(href) ")";
                font-size: 0.8em;
                color: #666;
            }
            
            a[href^="#"]:after {
                content: "";
            }
        }
        
        /* Print controls */
        .print-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border: 1px solid #ddd;
            z-index: 1000;
        }
        
        .print-controls button {
            margin: 0 5px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .print-btn {
            background: #3498db;
            color: white;
        }
        
        .print-btn:hover {
            background: #2980b9;
        }
        
        .close-btn {
            background: #95a5a6;
            color: white;
        }
        
        .close-btn:hover {
            background: #7f8c8d;
        }
        
        @media print {
            .print-controls {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="print-controls no-print">
        <button class="print-btn" onclick="window.print()">🖨️ Print</button>
        <button class="close-btn" onclick="window.close()">❌ Close</button>
    </div>
    
    <div class="content">
        ${content}
    </div>
    
    <script>
        // Auto-focus for better user experience
        window.focus();
        
        // Handle keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'p':
                        e.preventDefault();
                        window.print();
                        break;
                    case 'w':
                        e.preventDefault();
                        window.close();
                        break;
                }
            }
            if (e.key === 'Escape') {
                window.close();
            }
        });
    </script>
</body>
</html>`;
  }
}
