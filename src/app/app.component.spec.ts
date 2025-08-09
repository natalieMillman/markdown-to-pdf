import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PdfService, PDFConfig, PDF_FORMATS, DEFAULT_MARGINS } from './services/pdf.service';
import { FileService } from './services/file.service';
import { ThemeService } from './services/theme.service';
import { PrintPreviewService } from './services/print-preview.service';
import { SyntaxMathService } from './services/syntax-math.service';
import { ExportService, ExportFormat } from './services/export.service';
import { DisplaySettingsService, FontFamily, DisplaySettings } from './services/display-settings.service';
import { BehaviorSubject, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockPdfService: jest.Mocked<PdfService>;
  let mockFileService: jest.Mocked<FileService>;
  let mockThemeService: jest.Mocked<ThemeService>;
  let mockPrintPreviewService: jest.Mocked<PrintPreviewService>;
  let mockSyntaxMathService: jest.Mocked<SyntaxMathService>;
  let mockExportService: jest.Mocked<ExportService>;
  let mockDisplaySettingsService: jest.Mocked<DisplaySettingsService>;

  const mockDisplaySettings: DisplaySettings = {
    fontFamily: { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
    fontSize: 16
  };

  const mockFontFamilies: FontFamily[] = [
    { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
    { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
    { name: 'Georgia', value: 'Georgia, serif', category: 'serif' },
    { name: 'Monaco', value: 'Monaco, monospace', category: 'monospace' }
  ];

  beforeEach(async () => {
    // Create service mocks
    mockPdfService = {
      markdownToHtml: jest.fn().mockResolvedValue('<p>Mock HTML</p>'),
      generatePDFFromMarkdown: jest.fn().mockResolvedValue(undefined)
    } as any;

    mockFileService = {
      readFileAsText: jest.fn().mockResolvedValue('# Mock File Content')
    } as any;

    const themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
    mockThemeService = {
      theme$: themeSubject.asObservable(),
      toggleTheme: jest.fn(),
      setTheme: jest.fn()
    } as any;

    mockPrintPreviewService = {
      openPrintPreview: jest.fn()
    } as any;

    mockSyntaxMathService = {
      isReady: jest.fn().mockReturnValue(true),
      processContent: jest.fn()
    } as any;

    mockExportService = {
      exportHTML: jest.fn().mockResolvedValue(undefined),
      exportDOCX: jest.fn().mockResolvedValue(undefined),
      exportEPUB: jest.fn().mockResolvedValue(undefined)
    } as any;

    const settingsSubject = new BehaviorSubject<DisplaySettings>(mockDisplaySettings);
    mockDisplaySettingsService = {
      settings$: settingsSubject.asObservable(),
      fontFamilies: mockFontFamilies,
      getCurrentSettings: jest.fn().mockReturnValue(mockDisplaySettings),
      setFontFamily: jest.fn(),
      setFontSize: jest.fn(),
      resetToDefaults: jest.fn(),
      getFontsByCategory: jest.fn().mockImplementation((category: string) => 
        mockFontFamilies.filter(f => f.category === category)
      )
    } as any;

    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule],
      providers: [
        { provide: PdfService, useValue: mockPdfService },
        { provide: FileService, useValue: mockFileService },
        { provide: ThemeService, useValue: mockThemeService },
        { provide: PrintPreviewService, useValue: mockPrintPreviewService },
        { provide: SyntaxMathService, useValue: mockSyntaxMathService },
        { provide: ExportService, useValue: mockExportService },
        { provide: DisplaySettingsService, useValue: mockDisplaySettingsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.markdownContent).toContain('# Welcome to Markdown to PDF Converter');
    expect(component.filename).toBe('document.pdf');
    expect(component.selectedFormat).toBe('A4');
    expect(component.orientation).toBe('portrait');
    expect(component.isDarkMode).toBe(false);
  });

  describe('Markdown and HTML Preview', () => {
    it('should update HTML preview when markdown changes', async () => {
      component.markdownContent = '# Test Heading';
      
      await component.updatePreview();
      
      expect(mockPdfService.markdownToHtml).toHaveBeenCalledWith('# Test Heading');
      expect(component.htmlPreview).toBe('<p>Mock HTML</p>');
    });

    it('should handle empty markdown content', async () => {
      component.markdownContent = '';
      
      await component.updatePreview();
      
      expect(mockPdfService.markdownToHtml).toHaveBeenCalledWith('');
    });

    it('should clear content and reset preview', async () => {
      component.markdownContent = '# Test';
      component.htmlPreview = '<h1>Test</h1>';
      
      await component.clearContent();
      
      expect(component.markdownContent).toBe('');
      expect(component.htmlPreview).toBe('<p>Mock HTML</p>');
    });
  });

  describe('File Operations', () => {
    it('should handle file selection', async () => {
      const mockFile = new File(['# File Content'], 'test.md', { type: 'text/markdown' });
      const mockEvent = { target: { files: [mockFile] } } as any;
      
      await component.onFileSelect(mockEvent);
      
      expect(mockFileService.readFileAsText).toHaveBeenCalledWith(mockFile);
      expect(component.markdownContent).toBe('# Mock File Content');
      expect(component.uploadedFileName).toBe('test.md');
    });

    it('should handle drag over events', () => {
      const mockEvent = { preventDefault: jest.fn() } as any;
      
      component.onDragOver(mockEvent);
      
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(component.isDragOver).toBe(true);
    });

    it('should handle drag leave events', () => {
      component.isDragOver = true;
      
      component.onDragLeave();
      
      expect(component.isDragOver).toBe(false);
    });

    it('should handle file drop', async () => {
      const mockFile = new File(['# Dropped Content'], 'dropped.md', { type: 'text/markdown' });
      const mockEvent = {
        preventDefault: jest.fn(),
        dataTransfer: { files: [mockFile] }
      } as any;
      
      await component.onDrop(mockEvent);
      
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(component.isDragOver).toBe(false);
      expect(mockFileService.readFileAsText).toHaveBeenCalledWith(mockFile);
    });

    it('should clear uploaded file', () => {
      component.uploadedFileName = 'test.md';
      
      component.clearUploadedFile();
      
      expect(component.uploadedFileName).toBe('');
    });
  });

  describe('PDF Generation', () => {
    it('should generate PDF with current settings', async () => {
      component.markdownContent = '# Test Document';
      component.filename = 'test.pdf';
      
      await component.generatePDF();
      
      expect(mockPdfService.generatePDFFromMarkdown).toHaveBeenCalledWith(
        '# Test Document',
        'test.pdf',
        expect.any(Object)
      );
    });

    it('should show alert for empty content', async () => {
      component.markdownContent = '';
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      await component.generatePDF();
      
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      expect(mockPdfService.generatePDFFromMarkdown).not.toHaveBeenCalled();
      
      alertSpy.mockRestore();
    });

    it('should handle PDF generation errors', async () => {
      component.markdownContent = '# Test';
      mockPdfService.generatePDFFromMarkdown.mockRejectedValue(new Error('PDF generation failed'));
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      await component.generatePDF();
      
      expect(alertSpy).toHaveBeenCalledWith('Error generating PDF. Please try again.');
      
      alertSpy.mockRestore();
    });
  });

  describe('Theme Management', () => {
    it('should toggle theme', () => {
      component.toggleTheme();
      
      expect(mockThemeService.toggleTheme).toHaveBeenCalled();
    });

    it('should update isDarkMode when theme changes', () => {
      const themeSubject = new BehaviorSubject<'light' | 'dark'>('dark');
      mockThemeService.theme$ = themeSubject.asObservable();
      
      // Create new component to test subscription
      const newFixture = TestBed.createComponent(AppComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.isDarkMode).toBe(true);
    });
  });

  describe('PDF Configuration', () => {
    it('should change PDF format', () => {
      component.onFormatChange('Letter');
      
      expect(component.selectedFormat).toBe('Letter');
    });

    it('should reset margins to defaults', () => {
      component.margins = { top: 30, right: 30, bottom: 30, left: 30 };
      
      component.resetMargins();
      
      expect(component.margins).toEqual(DEFAULT_MARGINS);
    });

    it('should toggle advanced options', () => {
      component.showAdvancedOptions = false;
      
      component.toggleAdvancedOptions();
      
      expect(component.showAdvancedOptions).toBe(true);
    });

    it('should get format keys', () => {
      const keys = component.getFormatKeys();
      
      expect(keys).toEqual(Object.keys(PDF_FORMATS));
    });

    it('should get page dimensions', () => {
      component.selectedFormat = 'A4';
      component.orientation = 'portrait';
      
      const dimensions = component.getPageDimensions();
      
      expect(dimensions).toBe('210 × 297 mm');
    });

    it('should get landscape dimensions', () => {
      component.selectedFormat = 'A4';
      component.orientation = 'landscape';
      
      const dimensions = component.getPageDimensions();
      
      expect(dimensions).toBe('297 × 210 mm');
    });
  });

  describe('Display Settings', () => {
    it('should change font family', () => {
      const newFont: FontFamily = { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' };
      
      component.onFontFamilyChange('Arial, sans-serif');
      
      expect(mockDisplaySettingsService.setFontFamily).toHaveBeenCalledWith(newFont);
    });

    it('should change font size', () => {
      component.onFontSizeChange(18);
      
      expect(mockDisplaySettingsService.setFontSize).toHaveBeenCalledWith(18);
    });

    it('should not change font size outside valid range', () => {
      component.onFontSizeChange(5); // Below minimum
      component.onFontSizeChange(30); // Above maximum
      
      expect(mockDisplaySettingsService.setFontSize).not.toHaveBeenCalled();
    });

    it('should reset display settings', () => {
      component.resetDisplaySettings();
      
      expect(mockDisplaySettingsService.resetToDefaults).toHaveBeenCalled();
    });

    it('should get fonts by category', () => {
      const sansSerifFonts = component.getSansSerifFonts();
      const serifFonts = component.getSerifFonts();
      const monospaceFonts = component.getMonospaceFonts();
      
      expect(sansSerifFonts.length).toBeGreaterThan(0);
      expect(serifFonts.length).toBeGreaterThan(0);
      expect(monospaceFonts.length).toBeGreaterThan(0);
    });
  });

  describe('Export Functionality', () => {
    beforeEach(() => {
      component.markdownContent = '# Test Document';
      component.htmlPreview = '<h1>Test Document</h1>';
    });

    it('should export HTML document', async () => {
      component.selectedExportFormat = 'html';
      
      await component.exportDocument();
      
      expect(mockExportService.exportHTML).toHaveBeenCalledWith(
        '<h1>Test Document</h1>',
        'document.html',
        expect.any(Object)
      );
    });

    it('should export DOCX document', async () => {
      component.selectedExportFormat = 'docx';
      
      await component.exportDocument();
      
      expect(mockExportService.exportDOCX).toHaveBeenCalledWith(
        '<h1>Test Document</h1>',
        'document.docx',
        expect.any(Object)
      );
    });

    it('should export EPUB document', async () => {
      component.selectedExportFormat = 'epub';
      
      await component.exportDocument();
      
      expect(mockExportService.exportEPUB).toHaveBeenCalledWith(
        '<h1>Test Document</h1>',
        'document.epub',
        expect.any(Object)
      );
    });

    it('should show alert for empty content during export', async () => {
      component.markdownContent = '';
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      await component.exportDocument();
      
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      expect(mockExportService.exportHTML).not.toHaveBeenCalled();
      
      alertSpy.mockRestore();
    });

    it('should handle export errors', async () => {
      mockExportService.exportHTML.mockRejectedValue(new Error('Export failed'));
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      await component.exportDocument();
      
      expect(alertSpy).toHaveBeenCalledWith('Error exporting document. Please try again.');
      
      alertSpy.mockRestore();
    });

    it('should get correct export button text', () => {
      component.selectedExportFormat = 'html';
      component.isExporting = false;
      
      const buttonText = component.getExportButtonText();
      
      expect(buttonText).toBe('🌐 Export HTML');
    });

    it('should show loading text when exporting', () => {
      component.selectedExportFormat = 'docx';
      component.isExporting = true;
      
      const buttonText = component.getExportButtonText();
      
      expect(buttonText).toBe('🔄 Exporting Word Document...');
    });
  });

  describe('Print Preview', () => {
    it('should open print preview', () => {
      component.htmlPreview = '<h1>Test Content</h1>';
      
      component.openPrintPreview();
      
      expect(mockPrintPreviewService.openPrintPreview).toHaveBeenCalledWith(
        '<h1>Test Content</h1>',
        'Document Print Preview'
      );
    });

    it('should show alert for empty content in print preview', () => {
      component.htmlPreview = '';
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      component.openPrintPreview();
      
      expect(alertSpy).toHaveBeenCalledWith('Please enter some markdown content first.');
      expect(mockPrintPreviewService.openPrintPreview).not.toHaveBeenCalled();
      
      alertSpy.mockRestore();
    });
  });

  describe('Sample Content', () => {
    it('should load sample content', async () => {
      await component.loadSample();
      
      expect(component.markdownContent).toContain('# Welcome to Markdown to PDF Converter');
      expect(mockPdfService.markdownToHtml).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle file reading errors', async () => {
      mockFileService.readFileAsText.mockRejectedValue(new Error('File read failed'));
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      const mockFile = new File(['content'], 'test.md');
      const mockEvent = { target: { files: [mockFile] } } as any;
      
      await component.onFileSelect(mockEvent);
      
      expect(alertSpy).toHaveBeenCalledWith('Error reading file: File read failed');
      
      alertSpy.mockRestore();
    });

    it('should handle preview update errors', async () => {
      mockPdfService.markdownToHtml.mockRejectedValue(new Error('Preview failed'));
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      await component.updatePreview();
      
      expect(consoleSpy).toHaveBeenCalledWith('Error updating preview:', expect.any(Error));
      
      consoleSpy.mockRestore();
    });
  });
});
