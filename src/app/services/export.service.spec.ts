import { TestBed } from '@angular/core/testing';
import { ExportService, ExportOptions } from './export.service';

// Mock file-saver
jest.mock('file-saver', () => ({
  saveAs: jest.fn()
}));

// Mock docx
jest.mock('docx', () => ({
  Document: jest.fn().mockImplementation(() => ({})),
  Packer: {
    toBuffer: jest.fn().mockResolvedValue(new ArrayBuffer(8))
  },
  Paragraph: jest.fn(),
  TextRun: jest.fn(),
  HeadingLevel: {
    HEADING_1: 'HEADING_1',
    HEADING_2: 'HEADING_2',
    HEADING_3: 'HEADING_3'
  },
  AlignmentType: {}
}));

// Mock jszip
jest.mock('jszip', () => {
  return jest.fn().mockImplementation(() => ({
    folder: jest.fn().mockReturnValue({
      file: jest.fn()
    }),
    file: jest.fn(),
    generateAsync: jest.fn().mockResolvedValue(new Blob(['mock zip content'], { type: 'application/zip' }))
  }));
});

describe('ExportService', () => {
  let service: ExportService;
  const { saveAs } = require('file-saver');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportService);
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('exportHTML', () => {
    it('should export HTML with default options', async () => {
      const htmlContent = '<h1>Test</h1><p>Content</p>';
      const filename = 'test.html';
      const options: ExportOptions = {
        title: 'Test Document',
        author: 'Test Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await service.exportHTML(htmlContent, filename, options);

      expect(saveAs).toHaveBeenCalledWith(
        expect.any(Blob),
        filename
      );

      // Check that the blob contains expected content
      const blobCall = (saveAs as jest.Mock).mock.calls[0][0];
      expect(blobCall.type).toBe('text/html;charset=utf-8');
    });

    it('should include custom styles in HTML export', async () => {
      const htmlContent = '<h1>Test</h1>';
      const options: ExportOptions = {
        title: 'Custom Title',
        author: 'Author',
        fontSize: 18,
        fontFamily: 'Georgia'
      };

      await service.exportHTML(htmlContent, 'test.html', options);

      expect(saveAs).toHaveBeenCalled();
      
      // Verify the blob was created
      const blobCall = (saveAs as jest.Mock).mock.calls[0][0];
      expect(blobCall).toBeInstanceOf(Blob);
    });

    it('should handle empty HTML content', async () => {
      const options: ExportOptions = {
        title: 'Empty',
        author: 'Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await service.exportHTML('', 'empty.html', options);

      expect(saveAs).toHaveBeenCalled();
    });
  });

  describe('exportDOCX', () => {
    it('should export DOCX document', async () => {
      const htmlContent = '<h1>Test Heading</h1><p>Test paragraph</p>';
      const filename = 'test.docx';
      const options: ExportOptions = {
        title: 'Test Document',
        author: 'Test Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await service.exportDOCX(htmlContent, filename, options);

      expect(saveAs).toHaveBeenCalledWith(
        expect.any(Blob),
        filename
      );

      // Check that DOCX components were used
      const { Document, Packer } = require('docx');
      expect(Document).toHaveBeenCalled();
      expect(Packer.toBuffer).toHaveBeenCalled();
    });

    it('should handle different HTML elements', async () => {
      const htmlContent = `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Paragraph</p>
        <pre>Code block</pre>
      `;
      const options: ExportOptions = {
        title: 'Complex Document',
        author: 'Author',
        fontSize: 14,
        fontFamily: 'Times New Roman'
      };

      await service.exportDOCX(htmlContent, 'complex.docx', options);

      expect(saveAs).toHaveBeenCalled();
    });

    it('should handle empty HTML for DOCX', async () => {
      const options: ExportOptions = {
        title: 'Empty',
        author: 'Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await service.exportDOCX('', 'empty.docx', options);

      expect(saveAs).toHaveBeenCalled();
    });
  });

  describe('exportEPUB', () => {
    it('should export EPUB document', async () => {
      const htmlContent = '<h1>Chapter 1</h1><p>Content</p>';
      const filename = 'test.epub';
      const options: ExportOptions = {
        title: 'Test Book',
        author: 'Test Author',
        fontSize: 16,
        fontFamily: 'Georgia'
      };

      await service.exportEPUB(htmlContent, filename, options);

      expect(saveAs).toHaveBeenCalledWith(
        expect.any(Blob),
        filename
      );

      // Check that JSZip was used
      const JSZip = require('jszip');
      expect(JSZip).toHaveBeenCalled();
    });

    it('should create proper EPUB structure', async () => {
      const htmlContent = '<h1>Test</h1>';
      const options: ExportOptions = {
        title: 'EPUB Test',
        author: 'Author',
        fontSize: 14,
        fontFamily: 'serif'
      };

      const mockZip = {
        folder: jest.fn().mockReturnValue({
          file: jest.fn()
        }),
        file: jest.fn(),
        generateAsync: jest.fn().mockResolvedValue(new Blob(['epub content']))
      };
      
      const JSZip = require('jszip');
      JSZip.mockReturnValue(mockZip);

      await service.exportEPUB(htmlContent, 'test.epub', options);

      // Verify EPUB structure was created
      expect(mockZip.folder).toHaveBeenCalledWith('OEBPS');
      expect(mockZip.folder).toHaveBeenCalledWith('META-INF');
      expect(mockZip.file).toHaveBeenCalledWith('mimetype', 'application/epub+zip', { compression: 'STORE' });
    });

    it('should handle custom font settings in EPUB', async () => {
      const options: ExportOptions = {
        title: 'Custom Font Book',
        author: 'Author',
        fontSize: 20,
        fontFamily: 'Monaco'
      };

      await service.exportEPUB('<p>Test</p>', 'custom.epub', options);

      expect(saveAs).toHaveBeenCalled();
    });
  });

  describe('generateUuid', () => {
    it('should generate valid UUID format', () => {
      // Access private method through service instance
      const uuid = (service as any).generateUuid();
      
      // UUID format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuid).toMatch(uuidRegex);
    });

    it('should generate unique UUIDs', () => {
      const uuid1 = (service as any).generateUuid();
      const uuid2 = (service as any).generateUuid();
      
      expect(uuid1).not.toBe(uuid2);
    });
  });

  describe('Error handling', () => {
    it('should handle export errors gracefully', async () => {
      // Mock saveAs to throw error
      (saveAs as jest.Mock).mockImplementation(() => {
        throw new Error('Save failed');
      });

      const options: ExportOptions = {
        title: 'Test',
        author: 'Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await expect(service.exportHTML('<p>test</p>', 'test.html', options))
        .rejects.toThrow('Save failed');
    });

    it('should handle DOCX generation errors', async () => {
      const { Packer } = require('docx');
      Packer.toBuffer.mockRejectedValue(new Error('DOCX generation failed'));

      const options: ExportOptions = {
        title: 'Test',
        author: 'Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await expect(service.exportDOCX('<p>test</p>', 'test.docx', options))
        .rejects.toThrow('DOCX generation failed');
    });

    it('should handle EPUB generation errors', async () => {
      const mockZip = {
        folder: jest.fn().mockReturnValue({ file: jest.fn() }),
        file: jest.fn(),
        generateAsync: jest.fn().mockRejectedValue(new Error('ZIP generation failed'))
      };
      
      const JSZip = require('jszip');
      JSZip.mockReturnValue(mockZip);

      const options: ExportOptions = {
        title: 'Test',
        author: 'Author',
        fontSize: 16,
        fontFamily: 'Arial'
      };

      await expect(service.exportEPUB('<p>test</p>', 'test.epub', options))
        .rejects.toThrow('ZIP generation failed');
    });
  });
});
