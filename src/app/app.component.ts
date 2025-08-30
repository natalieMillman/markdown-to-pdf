import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfService, PDFConfig, PDF_FORMATS, DEFAULT_MARGINS, PDFPageFormat, PDFMargins } from './services/pdf.service';
import { FileService } from './services/file.service';
import { ThemeService } from './services/theme.service';
import { PrintPreviewService } from './services/print-preview.service';
import { SyntaxMathService } from './services/syntax-math.service';
import { ExportService, ExportFormat } from './services/export.service';
import { DisplaySettingsService, FontFamily, DisplaySettings } from './services/display-settings.service';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

### Code Example with Syntax Highlighting

\`\`\`javascript
function calculateCircleArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}

// Example usage
const area = calculateCircleArea(5);
console.log(\`Area: \${area.toFixed(2)}\`);
\`\`\`

### Mathematical Expressions

**Inline math:** The area of a circle is $A = \\pi r^2$ where $r$ is the radius.

**Display math:**
$$A = \\pi r^2$$

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
  isDragOver = false;
  uploadedFileName = '';
  isUploading = false;
  isDarkMode = false;
  
  // PDF Configuration
  pdfFormats = PDF_FORMATS;
  selectedFormat: PDFPageFormat = PDF_FORMATS['A4'];
  orientation: 'portrait' | 'landscape' = 'portrait';
  margins: PDFMargins = { ...DEFAULT_MARGINS };
  customWidth = 210;
  customHeight = 297;
  showAdvancedOptions = false;
  
  // Display Settings
  displaySettings: DisplaySettings;
  fontFamilies: FontFamily[] = [];
  selectedExportFormat: ExportFormat = 'html';
  exportFormats: { value: ExportFormat; label: string; icon: string }[] = [
    { value: 'html', label: 'HTML', icon: '🌐' },
    { value: 'docx', label: 'Word Document', icon: '📄' },
    { value: 'epub', label: 'E-Book', icon: '📚' }
  ];
  isExporting = false;

  constructor(
    private pdfService: PdfService, 
    private fileService: FileService,
    private analyticsService: AnalyticsService,
    private themeService: ThemeService,
    private printPreviewService: PrintPreviewService,
    private syntaxMathService: SyntaxMathService,
    private exportService: ExportService,
    private displaySettingsService: DisplaySettingsService
  ) {
    this.updatePreview();
    
    // Subscribe to theme changes
    this.themeService.theme$.subscribe(theme => {
      this.isDarkMode = theme === 'dark';
    });

    // Initialize display settings
    this.fontFamilies = this.displaySettingsService.fontFamilies;
    this.displaySettings = this.displaySettingsService.getCurrentSettings();
    
    // Subscribe to display settings changes
    this.displaySettingsService.settings$.subscribe(settings => {
      this.displaySettings = settings;
    });
  }

  ngOnInit(): void {
    // Track initial page view
    this.analyticsService.trackPageView(this.title, '/');
    
    // Track app initialization
    this.analyticsService.trackUserEngagement('app_initialized', {
      theme: this.isDarkMode ? 'dark' : 'light',
      display_settings: this.displaySettings
    });
  }

  async updatePreview(): Promise<void> {
    this.htmlPreview = await this.pdfService.markdownToHtml(this.markdownContent);
  }

  async generatePDF(): Promise<void> {
    if (!this.markdownContent.trim()) {
      alert('Please enter some markdown content first.');
      return;
    }

    this.isGenerating = true;
    try {
      const config: PDFConfig = {
        format: this.selectedFormat.name === 'Custom' 
          ? { name: 'Custom', width: this.customWidth, height: this.customHeight }
          : this.selectedFormat,
        orientation: this.orientation,
        margins: { ...this.margins }
      };
      
      await this.pdfService.generatePDFFromMarkdown(this.markdownContent, this.filename, config);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      this.isGenerating = false;
    }
  }

  async clearContent(): Promise<void> {
    if (confirm('Are you sure you want to clear all content?')) {
      this.markdownContent = '';
      await this.updatePreview();
    }
  }

  async loadSample(): Promise<void> {
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

### Code Examples with Syntax Highlighting

**Python:**
\`\`\`python
def fibonacci(n):
    """Calculate the nth Fibonacci number using recursion."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
\`\`\`

**JavaScript:**
\`\`\`javascript
const calculateArea = (radius) => {
    const pi = Math.PI;
    return pi * radius ** 2;
};

console.log(\`Circle area: \${calculateArea(5)}\`);
\`\`\`

**TypeScript:**
\`\`\`typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

const createUser = (userData: User): User => {
    return { ...userData };
};
\`\`\`

### Mathematical Expressions

**Inline Math:** The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ and Euler's identity is $e^{i\\pi} + 1 = 0$.

**Display Math:**
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

**Matrix Example:**
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix} \\begin{bmatrix}
x \\\\
y
\\end{bmatrix} = \\begin{bmatrix}
ax + by \\\\
cx + dy
\\end{bmatrix}$$

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
    await this.updatePreview();
  }

  // File Upload Methods
  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.handleFileUpload(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFileUpload(files[0]);
    }
  }

  async handleFileUpload(file: File): Promise<void> {
    this.isUploading = true;
    this.uploadedFileName = '';

    try {
      const content = await this.fileService.readFileAsText(file);
      this.markdownContent = content;
      this.uploadedFileName = file.name;
      
      // Update filename for PDF generation (remove extension and add .pdf)
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, '');
      this.filename = `${nameWithoutExt}.pdf`;
      
      await this.updatePreview();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(error instanceof Error ? error.message : 'Error uploading file. Please try again.');
    } finally {
      this.isUploading = false;
    }
  }

  clearUploadedFile(): void {
    this.uploadedFileName = '';
    this.markdownContent = '';
    this.filename = 'document.pdf';
    this.updatePreview();
  }

  // Theme Methods
  toggleTheme(): void {
    this.themeService.toggleTheme();
    
    // Track theme change
    const newTheme = this.themeService.getCurrentTheme();
    this.analyticsService.trackThemeChange(newTheme);
  }

  // Print Preview Method
  openPrintPreview(): void {
    if (!this.markdownContent.trim()) {
      alert('Please enter some markdown content first.');
      return;
    }

    const title = this.filename.replace('.pdf', '') || 'Markdown Document';
    this.printPreviewService.openPrintPreview(this.htmlPreview, title);
  }

  // PDF Configuration Methods
  onFormatChange(): void {
    if (this.selectedFormat.name === 'Custom') {
      this.customWidth = this.selectedFormat.width;
      this.customHeight = this.selectedFormat.height;
    }
  }

  resetMargins(): void {
    this.margins = { ...DEFAULT_MARGINS };
  }

  toggleAdvancedOptions(): void {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }

  getFormatKeys(): string[] {
    return Object.keys(this.pdfFormats);
  }

  getPageDimensions(): string {
    const format = this.selectedFormat.name === 'Custom' 
      ? { width: this.customWidth, height: this.customHeight }
      : this.selectedFormat;
    
    const width = this.orientation === 'portrait' ? format.width : format.height;
    const height = this.orientation === 'portrait' ? format.height : format.width;
    
    return `${width} × ${height} mm`;
  }

  // Display Settings Methods
  onFontFamilyChange(fontValue: string): void {
    const fontFamily = this.fontFamilies.find(f => f.value === fontValue);
    if (fontFamily) {
      this.displaySettingsService.setFontFamily(fontFamily);
    }
  }

  getSansSerifFonts(): FontFamily[] {
    return this.displaySettingsService.getFontsByCategory('sans-serif');
  }

  getSerifFonts(): FontFamily[] {
    return this.displaySettingsService.getFontsByCategory('serif');
  }

  getMonospaceFonts(): FontFamily[] {
    return this.displaySettingsService.getFontsByCategory('monospace');
  }

  onFontSizeChange(fontSize: number): void {
    if (fontSize >= 10 && fontSize <= 24) {
      this.displaySettingsService.setFontSize(fontSize);
    }
  }

  resetDisplaySettings(): void {
    this.displaySettingsService.resetToDefaults();
  }

  // Export Methods
  async exportDocument(): Promise<void> {
    if (!this.markdownContent.trim()) {
      alert('Please enter some markdown content first.');
      return;
    }

    this.isExporting = true;
    try {
      const baseFilename = this.filename.replace('.pdf', '');
      const exportOptions = {
        title: baseFilename || 'Markdown Document',
        author: 'Markdown to PDF Converter',
        fontSize: this.displaySettings.fontSize,
        fontFamily: this.displaySettings.fontFamily.value
      };

      switch (this.selectedExportFormat) {
        case 'html':
          await this.exportService.exportHTML(
            this.htmlPreview, 
            `${baseFilename}.html`, 
            exportOptions
          );
          break;
        case 'docx':
          await this.exportService.exportDOCX(
            this.htmlPreview, 
            `${baseFilename}.docx`, 
            exportOptions
          );
          break;
        case 'epub':
          await this.exportService.exportEPUB(
            this.htmlPreview, 
            `${baseFilename}.epub`, 
            exportOptions
          );
          break;
      }
    } catch (error) {
      console.error('Error exporting document:', error);
      alert('Error exporting document. Please try again.');
    } finally {
      this.isExporting = false;
    }
  }

  getExportButtonText(): string {
    const format = this.exportFormats.find(f => f.value === this.selectedExportFormat);
    if (this.isExporting) {
      return `🔄 Exporting ${format?.label}...`;
    }
    return `${format?.icon} Export ${format?.label}`;
  }
}
