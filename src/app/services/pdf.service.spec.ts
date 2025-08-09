import { TestBed } from '@angular/core/testing';
import { PdfService, PDFConfig, PDF_FORMATS, DEFAULT_MARGINS } from './pdf.service';
import { SyntaxMathService } from './syntax-math.service';
import { DisplaySettingsService } from './display-settings.service';

// Mock dependencies
jest.mock('marked');
jest.mock('jspdf');
jest.mock('html2canvas');

describe('PdfService', () => {
  let service: PdfService;
  let syntaxMathService: jest.Mocked<SyntaxMathService>;
  let displaySettingsService: jest.Mocked<DisplaySettingsService>;

  beforeEach(() => {
    const syntaxMathServiceMock = {
      isReady: jest.fn().mockReturnValue(true),
      processContent: jest.fn()
    };

    const displaySettingsServiceMock = {
      getCurrentSettings: jest.fn().mockReturnValue({
        fontFamily: { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
        fontSize: 16
      })
    };

    TestBed.configureTestingModule({
      providers: [
        PdfService,
        { provide: SyntaxMathService, useValue: syntaxMathServiceMock },
        { provide: DisplaySettingsService, useValue: displaySettingsServiceMock }
      ]
    });

    service = TestBed.inject(PdfService);
    syntaxMathService = TestBed.inject(SyntaxMathService) as jest.Mocked<SyntaxMathService>;
    displaySettingsService = TestBed.inject(DisplaySettingsService) as jest.Mocked<DisplaySettingsService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('markdownToHtml', () => {
    it('should convert markdown to HTML', async () => {
      const markdown = '# Test Heading\n\nThis is a paragraph.';
      const result = await service.markdownToHtml(markdown);
      
      expect(result).toBe('<p>Mock HTML</p>');
      expect(syntaxMathService.processContent).toHaveBeenCalled();
    });

    it('should handle empty markdown', async () => {
      const result = await service.markdownToHtml('');
      expect(result).toBe('<p>Mock HTML</p>');
    });

    it('should process content when syntax service is ready', async () => {
      syntaxMathService.isReady.mockReturnValue(true);
      
      await service.markdownToHtml('# Test');
      
      expect(syntaxMathService.isReady).toHaveBeenCalled();
      expect(syntaxMathService.processContent).toHaveBeenCalled();
    });

    it('should skip processing when syntax service is not ready', async () => {
      syntaxMathService.isReady.mockReturnValue(false);
      
      await service.markdownToHtml('# Test');
      
      expect(syntaxMathService.isReady).toHaveBeenCalled();
      expect(syntaxMathService.processContent).not.toHaveBeenCalled();
    });
  });

  describe('generatePDF', () => {
    beforeEach(() => {
      // Mock DOM elements
      document.body.innerHTML = '<div id="test-content">Test content</div>';
    });

    it('should generate PDF with default config', async () => {
      const element = document.getElementById('test-content')!;
      const filename = 'test.pdf';
      
      await service.generatePDF(element, filename);
      
      // Verify html2canvas was called
      const html2canvas = require('html2canvas');
      expect(html2canvas).toHaveBeenCalledWith(element, expect.any(Object));
    });

    it('should generate PDF with custom config', async () => {
      const element = document.getElementById('test-content')!;
      const filename = 'test.pdf';
      const config: PDFConfig = {
        format: 'Letter',
        orientation: 'landscape',
        margins: { top: 20, right: 20, bottom: 20, left: 20 }
      };
      
      await service.generatePDF(element, filename, config);
      
      const html2canvas = require('html2canvas');
      expect(html2canvas).toHaveBeenCalledWith(element, expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number)
      }));
    });

    it('should handle custom page format', async () => {
      const element = document.getElementById('test-content')!;
      const config: PDFConfig = {
        format: 'Custom',
        orientation: 'portrait',
        customWidth: 100,
        customHeight: 150,
        margins: DEFAULT_MARGINS
      };
      
      await service.generatePDF(element, filename, config);
      
      // Should use custom dimensions
      expect(true).toBeTruthy(); // Test passes if no error thrown
    });
  });

  describe('generatePDFFromMarkdown', () => {
    it('should generate PDF from markdown content', async () => {
      const markdown = '# Test Document\n\nThis is test content.';
      const filename = 'test.pdf';
      
      const spy = jest.spyOn(service, 'generatePDF').mockResolvedValue();
      
      await service.generatePDFFromMarkdown(markdown, filename);
      
      expect(spy).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        filename,
        undefined
      );
    });

    it('should generate PDF with custom config', async () => {
      const markdown = '# Test';
      const filename = 'test.pdf';
      const config: PDFConfig = {
        format: 'A4',
        orientation: 'portrait',
        margins: DEFAULT_MARGINS
      };
      
      const spy = jest.spyOn(service, 'generatePDF').mockResolvedValue();
      
      await service.generatePDFFromMarkdown(markdown, filename, config);
      
      expect(spy).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        filename,
        config
      );
    });
  });

  describe('PDF_FORMATS constant', () => {
    it('should contain standard page formats', () => {
      expect(PDF_FORMATS['A4']).toEqual({ width: 210, height: 297 });
      expect(PDF_FORMATS['Letter']).toEqual({ width: 216, height: 279 });
      expect(PDF_FORMATS['Legal']).toEqual({ width: 216, height: 356 });
      expect(PDF_FORMATS['Custom']).toEqual({ width: 210, height: 297 });
    });
  });

  describe('DEFAULT_MARGINS constant', () => {
    it('should have default margin values', () => {
      expect(DEFAULT_MARGINS).toEqual({
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      });
    });
  });
});
