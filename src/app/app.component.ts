import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfService } from './services/pdf.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Markdown to PDF Converter';
  markdownContent = `# Welcome to Markdown to PDF Converter

This is a **simple** and *elegant* tool to convert your markdown documents to PDF format.

## Features

- Real-time markdown preview
- Beautiful PDF generation
- Responsive design
- Easy to use interface

## How to use

1. Type or paste your markdown content in the left panel
2. See the live preview on the right panel
3. Click "Generate PDF" to download your document

### Code Example

\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`

### Quote

> "The best way to predict the future is to create it." - Peter Drucker

### List

- Item 1
- Item 2
- Item 3

**Happy writing!** 📝`;

  htmlPreview = '';
  isGenerating = false;
  filename = 'document.pdf';

  constructor(private pdfService: PdfService) {
    this.updatePreview();
  }

  updatePreview(): void {
    this.htmlPreview = this.pdfService.markdownToHtml(this.markdownContent);
  }

  async generatePDF(): Promise<void> {
    if (!this.markdownContent.trim()) {
      alert('Please enter some markdown content first.');
      return;
    }

    this.isGenerating = true;
    try {
      await this.pdfService.generatePDFFromMarkdown(this.markdownContent, this.filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      this.isGenerating = false;
    }
  }

  clearContent(): void {
    if (confirm('Are you sure you want to clear all content?')) {
      this.markdownContent = '';
      this.updatePreview();
    }
  }

  loadSample(): void {
    this.markdownContent = `# Sample Document

## Introduction

This is a sample markdown document to demonstrate the **Markdown to PDF** converter.

### Features Showcase

1. **Headers** - Different levels of headings
2. **Text Formatting** - *italic*, **bold**, and \`code\`
3. **Lists** - Both ordered and unordered
4. **Code Blocks** - Syntax highlighted code
5. **Quotes** - Blockquotes for emphasis
6. **Links** - [Visit GitHub](https://github.com)

### Code Example

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
\`\`\`

### Important Quote

> "Documentation is a love letter that you write to your future self." - Damian Conway

### Task List

- [x] Create markdown parser
- [x] Implement PDF generation
- [x] Add beautiful styling
- [ ] Add more export formats
- [ ] Implement file upload

### Table Example

| Feature | Status | Priority |
|---------|--------|----------|
| PDF Export | ✅ Complete | High |
| Live Preview | ✅ Complete | High |
| File Upload | 🚧 Planned | Medium |
| Themes | 💡 Idea | Low |

---

**Thank you for using our Markdown to PDF converter!** 

*Generated on ${new Date().toLocaleDateString()}*`;
    this.updatePreview();
  }
}
