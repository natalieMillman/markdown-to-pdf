import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PdfService } from './services/pdf.service';
import { FileService } from './services/file.service';
import { ThemeService } from './services/theme.service';
import { PrintPreviewService } from './services/print-preview.service';
import { SyntaxMathService } from './services/syntax-math.service';
import { ExportService } from './services/export.service';
import { DisplaySettingsService } from './services/display-settings.service';

describe('Integration Tests', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule],
      providers: [
        PdfService,
        FileService,
        ThemeService,
        PrintPreviewService,
        SyntaxMathService,
        ExportService,
        DisplaySettingsService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Complete Markdown to PDF Workflow', () => {
    it('should convert markdown to HTML and generate PDF', async () => {
      // Set up markdown content
      component.markdownContent = `
# Test Document

This is a **test document** with various elements:

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello, world!');
\`\`\`

Math: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
      `;

      // Update preview
      await component.updatePreview();

      // Verify HTML was generated
      expect(component.htmlPreview).toBeTruthy();
      expect(component.htmlPreview).toContain('<p>Mock HTML</p>');

      // Set PDF configuration
      component.selectedFormat = 'A4';
      component.orientation = 'portrait';
      component.filename = 'integration-test.pdf';

      // Generate PDF (mocked, so we just verify it doesn't throw)
      await expect(component.generatePDF()).resolves.not.toThrow();
    });

    it('should handle file upload to PDF generation workflow', async () => {
      // Simulate file upload
      const mockFile = new File(['# Uploaded Document\n\nThis came from a file.'], 'test.md', { 
        type: 'text/markdown' 
      });
      const mockEvent = { target: { files: [mockFile] } } as any;

      await component.onFileSelect(mockEvent);

      // Verify file was processed
      expect(component.uploadedFileName).toBe('test.md');
      expect(component.markdownContent).toBe('mock file content');

      // Generate PDF from uploaded content
      await expect(component.generatePDF()).resolves.not.toThrow();
    });
  });

  describe('Theme and Display Settings Integration', () => {
    it('should apply theme changes and display settings together', () => {
      // Change theme
      component.toggleTheme();

      // Change display settings
      const newFont = component.fontFamilies.find(f => f.name === 'Georgia');
      if (newFont) {
        component.onFontFamilyChange(newFont.value);
      }
      component.onFontSizeChange(18);

      // Verify settings are applied
      expect(component.displaySettings.fontSize).toBe(18);
      if (newFont) {
        expect(component.displaySettings.fontFamily.name).toBe('Georgia');
      }
    });

    it('should persist settings across theme changes', () => {
      // Set custom display settings
      component.onFontSizeChange(20);
      const originalFontSize = component.displaySettings.fontSize;

      // Toggle theme
      component.toggleTheme();

      // Verify settings persisted
      expect(component.displaySettings.fontSize).toBe(originalFontSize);
    });
  });

  describe('Export Workflow Integration', () => {
    beforeEach(() => {
      component.markdownContent = `
# Export Test Document

This document will be exported to various formats.

## Features
- HTML export
- DOCX export  
- EPUB export

\`\`\`typescript
interface ExportTest {
  format: string;
  success: boolean;
}
\`\`\`
      `;
    });

    it('should export to HTML format', async () => {
      await component.updatePreview();
      
      component.selectedExportFormat = 'html';
      component.filename = 'test-export.pdf'; // Will become test-export.html
      
      await expect(component.exportDocument()).resolves.not.toThrow();
    });

    it('should export to DOCX format', async () => {
      await component.updatePreview();
      
      component.selectedExportFormat = 'docx';
      component.filename = 'test-export.pdf'; // Will become test-export.docx
      
      await expect(component.exportDocument()).resolves.not.toThrow();
    });

    it('should export to EPUB format', async () => {
      await component.updatePreview();
      
      component.selectedExportFormat = 'epub';
      component.filename = 'test-export.pdf'; // Will become test-export.epub
      
      await expect(component.exportDocument()).resolves.not.toThrow();
    });

    it('should switch between export formats seamlessly', async () => {
      await component.updatePreview();
      
      // Export as HTML
      component.selectedExportFormat = 'html';
      await expect(component.exportDocument()).resolves.not.toThrow();
      
      // Switch to DOCX
      component.selectedExportFormat = 'docx';
      await expect(component.exportDocument()).resolves.not.toThrow();
      
      // Switch to EPUB
      component.selectedExportFormat = 'epub';
      await expect(component.exportDocument()).resolves.not.toThrow();
    });
  });

  describe('PDF Configuration Integration', () => {
    beforeEach(() => {
      component.markdownContent = '# PDF Configuration Test';
    });

    it('should generate PDFs with different page formats', async () => {
      await component.updatePreview();
      
      // Test A4 format
      component.onFormatChange('A4');
      await expect(component.generatePDF()).resolves.not.toThrow();
      
      // Test Letter format
      component.onFormatChange('Letter');
      await expect(component.generatePDF()).resolves.not.toThrow();
      
      // Test Legal format
      component.onFormatChange('Legal');
      await expect(component.generatePDF()).resolves.not.toThrow();
    });

    it('should handle custom page dimensions', async () => {
      await component.updatePreview();
      
      // Set custom format
      component.onFormatChange('Custom');
      component.customWidth = 150;
      component.customHeight = 200;
      
      await expect(component.generatePDF()).resolves.not.toThrow();
    });

    it('should apply different orientations', async () => {
      await component.updatePreview();
      
      // Portrait orientation
      component.orientation = 'portrait';
      await expect(component.generatePDF()).resolves.not.toThrow();
      
      // Landscape orientation
      component.orientation = 'landscape';
      await expect(component.generatePDF()).resolves.not.toThrow();
    });

    it('should apply custom margins', async () => {
      await component.updatePreview();
      
      // Set custom margins
      component.margins = { top: 30, right: 25, bottom: 30, left: 25 };
      
      await expect(component.generatePDF()).resolves.not.toThrow();
      
      // Reset margins
      component.resetMargins();
      expect(component.margins.top).toBe(20);
    });
  });

  describe('Error Handling Integration', () => {
    it('should handle empty content gracefully across all features', async () => {
      component.markdownContent = '';
      
      // Should not crash when updating preview
      await expect(component.updatePreview()).resolves.not.toThrow();
      
      // Should show appropriate alerts for PDF generation
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      await component.generatePDF();
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      
      await component.exportDocument();
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      
      component.openPrintPreview();
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      
      alertSpy.mockRestore();
    });

    it('should handle invalid file uploads', async () => {
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      // Test with no files
      const emptyEvent = { target: { files: [] } } as any;
      await component.onFileSelect(emptyEvent);
      
      // Test with null files
      const nullEvent = { target: { files: null } } as any;
      await component.onFileSelect(nullEvent);
      
      // Should not crash
      expect(true).toBeTruthy();
      
      alertSpy.mockRestore();
    });
  });

  describe('User Interface Integration', () => {
    it('should update UI state correctly during operations', async () => {
      // Test loading states
      component.markdownContent = '# Test';
      
      // Should not be generating initially
      expect(component.isGenerating).toBe(false);
      expect(component.isExporting).toBe(false);
      
      // Update preview and verify state
      await component.updatePreview();
      expect(component.htmlPreview).toBeTruthy();
    });

    it('should handle drag and drop UI states', () => {
      // Test drag over
      const mockEvent = { preventDefault: jest.fn() } as any;
      component.onDragOver(mockEvent);
      expect(component.isDragOver).toBe(true);
      
      // Test drag leave
      component.onDragLeave();
      expect(component.isDragOver).toBe(false);
    });

    it('should toggle advanced options correctly', () => {
      expect(component.showAdvancedOptions).toBe(false);
      
      component.toggleAdvancedOptions();
      expect(component.showAdvancedOptions).toBe(true);
      
      component.toggleAdvancedOptions();
      expect(component.showAdvancedOptions).toBe(false);
    });
  });

  describe('Data Persistence Integration', () => {
    it('should maintain state consistency across operations', async () => {
      // Set initial state
      const originalMarkdown = '# Persistence Test';
      component.markdownContent = originalMarkdown;
      component.filename = 'persistence-test.pdf';
      
      // Update preview
      await component.updatePreview();
      
      // Change settings
      component.onFontSizeChange(18);
      component.selectedFormat = 'Letter';
      component.orientation = 'landscape';
      
      // Verify state is maintained
      expect(component.markdownContent).toBe(originalMarkdown);
      expect(component.filename).toBe('persistence-test.pdf');
      expect(component.displaySettings.fontSize).toBe(18);
      expect(component.selectedFormat).toBe('Letter');
      expect(component.orientation).toBe('landscape');
    });
  });
});
