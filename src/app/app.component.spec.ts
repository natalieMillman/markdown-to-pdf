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

describe('AppComponent (Karma/Jasmine)', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    const mockPdfService = jasmine.createSpyObj('PdfService', ['markdownToHtml', 'generatePDFFromMarkdown']);
    const mockFileService = jasmine.createSpyObj('FileService', ['readFileAsText']);
    const mockThemeService = jasmine.createSpyObj('ThemeService', ['toggleTheme', 'setTheme']);
    const mockPrintPreviewService = jasmine.createSpyObj('PrintPreviewService', ['openPrintPreview']);
    const mockSyntaxMathService = jasmine.createSpyObj('SyntaxMathService', ['isReady', 'processContent']);
    const mockExportService = jasmine.createSpyObj('ExportService', ['exportHTML', 'exportDOCX', 'exportEPUB']);
    const mockDisplaySettingsService = jasmine.createSpyObj('DisplaySettingsService', [
      'getCurrentSettings', 'setFontFamily', 'setFontSize', 'resetToDefaults', 'getFontsByCategory'
    ]);

    // Set up return values
    mockPdfService.markdownToHtml.and.returnValue(Promise.resolve('<p>Mock HTML</p>'));
    mockPdfService.generatePDFFromMarkdown.and.returnValue(Promise.resolve());
    mockFileService.readFileAsText.and.returnValue(Promise.resolve('# Mock File Content'));
    mockSyntaxMathService.isReady.and.returnValue(true);
    
    // Set up observables
    mockThemeService.theme$ = new BehaviorSubject('light');
    mockDisplaySettingsService.settings$ = new BehaviorSubject({
      fontFamily: { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
      fontSize: 16
    });
    mockDisplaySettingsService.fontFamilies = [
      { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' }
    ];
    mockDisplaySettingsService.getCurrentSettings.and.returnValue({
      fontFamily: { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' },
      fontSize: 16
    });
    mockDisplaySettingsService.getFontsByCategory.and.returnValue([
      { name: 'Inter', value: 'Inter, sans-serif', category: 'sans-serif' }
    ]);

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
