import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PdfService } from './services/pdf.service';
import { FileService } from './services/file.service';
import { ThemeService } from './services/theme.service';
import { PrintPreviewService } from './services/print-preview.service';
import { SyntaxMathService } from './services/syntax-math.service';
import { ExportService } from './services/export.service';
import { DisplaySettingsService } from './services/display-settings.service';
import { BehaviorSubject } from 'rxjs';

describe('AppComponent (Jest)', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    const mockPdfService = jest.fn().mockReturnValue({
      markdownToHtml: jest.fn().mockResolvedValue('<p>Mock HTML</p>'),
      generatePDFFromMarkdown: jest.fn().mockResolvedValue(undefined)
    })();
    const mockFileService = jest.fn().mockReturnValue({
      readFileAsText: jest.fn().mockResolvedValue('# Mock File Content')
    })();
    const mockThemeService = jest.fn().mockReturnValue({
      toggleTheme: jest.fn(),
      setTheme: jest.fn(),
      theme$: new BehaviorSubject('light')
    })();
    const mockPrintPreviewService = jest.fn().mockReturnValue({
      openPrintPreview: jest.fn()
    })();
    const mockSyntaxMathService = jest.fn().mockReturnValue({
      isReady: jest.fn().mockReturnValue(true),
      processContent: jest.fn()
    })();
    const mockExportService = jest.fn().mockReturnValue({
      exportHTML: jest.fn(),
      exportDOCX: jest.fn(),
      exportEPUB: jest.fn()
    })();
    const mockDisplaySettingsService = jest.fn().mockReturnValue({
      getCurrentSettings: jest.fn().mockReturnValue({
        fontFamily: { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
        fontSize: 16
      }),
      setFontFamily: jest.fn(),
      setFontSize: jest.fn(),
      resetToDefaults: jest.fn(),
      getFontsByCategory: jest.fn().mockReturnValue([
        { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' }
      ]),
      settings$: new BehaviorSubject({
        fontFamily: { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
        fontSize: 16
      }),
      fontFamilies: [
        { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' }
      ]
    })();
    


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
  });

  it('should have theme toggle functionality', () => {
    expect(component.toggleTheme).toBeDefined();
    expect(typeof component.toggleTheme).toBe('function');
  });

  it('should have PDF generation functionality', () => {
    expect(component.generatePDF).toBeDefined();
    expect(typeof component.generatePDF).toBe('function');
  });

  it('should have export functionality', () => {
    expect(component.exportDocument).toBeDefined();
    expect(typeof component.exportDocument).toBe('function');
  });
});
