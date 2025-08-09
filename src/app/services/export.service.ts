import { Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import JSZip from 'jszip';

export type ExportFormat = 'html' | 'docx' | 'epub';

export interface ExportOptions {
  title: string;
  author?: string;
  fontSize: number;
  fontFamily: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  /**
   * Export HTML with proper styling
   */
  async exportHTML(htmlContent: string, filename: string, options: ExportOptions): Promise<void> {
    const styledHTML = this.createStyledHTML(htmlContent, options);
    this.downloadFile(styledHTML, filename, 'text/html');
  }

  /**
   * Export DOCX document
   */
  async exportDOCX(htmlContent: string, filename: string, options: ExportOptions): Promise<void> {
    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: this.htmlToDocxElements(htmlContent, options)
        }]
      });

      const buffer = await Packer.toBuffer(doc);
      this.downloadFile(buffer, filename, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    } catch (error) {
      console.error('Error generating DOCX:', error);
      throw new Error('Failed to generate DOCX. Please try again.');
    }
  }

  /**
   * Export EPUB e-book
   */
  async exportEPUB(htmlContent: string, filename: string, options: ExportOptions): Promise<void> {
    try {
      const zip = new JSZip();
      
      // Create EPUB structure
      zip.file('mimetype', 'application/epub+zip');
      
      // META-INF folder
      const metaInf = zip.folder('META-INF');
      metaInf?.file('container.xml', this.createContainerXML());
      
      // OEBPS folder
      const oebps = zip.folder('OEBPS');
      oebps?.file('content.opf', this.createContentOPF(options));
      oebps?.file('toc.ncx', this.createTocNCX(options));
      oebps?.file('chapter1.xhtml', this.createChapterXHTML(htmlContent, options));
      oebps?.file('styles.css', this.createEPUBStyles(options));

      const blob = await zip.generateAsync({ type: 'blob' });
      this.downloadFile(blob, filename, 'application/epub+zip');
    } catch (error) {
      console.error('Error generating EPUB:', error);
      throw new Error('Failed to generate EPUB. Please try again.');
    }
  }

  /**
   * Create styled HTML document
   */
  private createStyledHTML(content: string, options: ExportOptions): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${options.title}</title>
    <style>
        body {
            font-family: ${options.fontFamily};
            font-size: ${options.fontSize}px;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
            background: white;
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: bold;
        }
        h1 { font-size: 2em; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px; }
        h2 { font-size: 1.5em; color: #34495e; }
        h3 { font-size: 1.3em; color: #34495e; }
        p { margin-bottom: 16px; }
        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 16px 0;
        }
        blockquote {
            border-left: 4px solid #3498db;
            padding-left: 16px;
            margin: 16px 0;
            color: #555;
            font-style: italic;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
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
        .katex { font-size: 1.1em; }
        .katex-display { margin: 20px 0; text-align: center; }
    </style>
</head>
<body>
    <h1>${options.title}</h1>
    ${content}
</body>
</html>`;
  }

  /**
   * Convert HTML to DOCX elements (simplified)
   */
  private htmlToDocxElements(htmlContent: string, options: ExportOptions): Paragraph[] {
    const elements: Paragraph[] = [];
    
    // Add title
    elements.push(new Paragraph({
      children: [new TextRun({ text: options.title, bold: true, size: Math.round(options.fontSize * 1.5) })],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER
    }));

    // Simple HTML to DOCX conversion (basic implementation)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const paragraphs = textContent.split('\n\n').filter(p => p.trim());
    
    paragraphs.forEach(paragraph => {
      if (paragraph.trim()) {
        elements.push(new Paragraph({
          children: [new TextRun({ text: paragraph.trim(), size: options.fontSize })],
          spacing: { after: 200 }
        }));
      }
    });

    return elements;
  }

  /**
   * Create EPUB container.xml
   */
  private createContainerXML(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
    </rootfiles>
</container>`;
  }

  /**
   * Create EPUB content.opf
   */
  private createContentOPF(options: ExportOptions): string {
    const author = options.author || 'Unknown Author';
    return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="2.0">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
        <dc:title>${options.title}</dc:title>
        <dc:creator opf:role="aut">${author}</dc:creator>
        <dc:language>en</dc:language>
        <dc:identifier id="bookid">urn:uuid:${this.generateUUID()}</dc:identifier>
        <meta name="cover" content="cover"/>
    </metadata>
    <manifest>
        <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
        <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
        <item id="css" href="styles.css" media-type="text/css"/>
    </manifest>
    <spine toc="ncx">
        <itemref idref="chapter1"/>
    </spine>
</package>`;
  }

  /**
   * Create EPUB toc.ncx
   */
  private createTocNCX(options: ExportOptions): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
    <head>
        <meta name="dtb:uid" content="urn:uuid:${this.generateUUID()}"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle>
        <text>${options.title}</text>
    </docTitle>
    <navMap>
        <navPoint id="navpoint-1" playOrder="1">
            <navLabel>
                <text>Chapter 1</text>
            </navLabel>
            <content src="chapter1.xhtml"/>
        </navPoint>
    </navMap>
</ncx>`;
  }

  /**
   * Create EPUB chapter XHTML
   */
  private createChapterXHTML(content: string, options: ExportOptions): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>${options.title}</title>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
    <h1>${options.title}</h1>
    ${content}
</body>
</html>`;
  }

  /**
   * Create EPUB styles
   */
  private createEPUBStyles(options: ExportOptions): string {
    return `body {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize}px;
    line-height: 1.6;
    margin: 20px;
    color: #333;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: bold;
}

h1 { font-size: 2em; color: #2c3e50; }
h2 { font-size: 1.5em; color: #34495e; }
h3 { font-size: 1.3em; color: #34495e; }

p { margin-bottom: 16px; }

code {
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}

pre {
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 6px;
    overflow-x: auto;
    margin: 16px 0;
}

blockquote {
    border-left: 4px solid #3498db;
    padding-left: 16px;
    margin: 16px 0;
    color: #555;
    font-style: italic;
}`;
  }

  /**
   * Generate UUID for EPUB
   */
  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Download file helper
   */
  private downloadFile(content: string | ArrayBuffer | Blob, filename: string, mimeType: string): void {
    let blob: Blob;
    
    if (content instanceof Blob) {
      blob = content;
    } else if (content instanceof ArrayBuffer) {
      blob = new Blob([content], { type: mimeType });
    } else {
      blob = new Blob([content], { type: mimeType });
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
