import { TestBed } from '@angular/core/testing';
import { FileService } from './file.service';

describe('FileService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('readFileAsText', () => {
    it('should read file content as text', async () => {
      const mockFile = new File(['test content'], 'test.txt', { type: 'text/plain' });
      
      const result = await service.readFileAsText(mockFile);
      
      expect(result).toBe('mock file content');
    });

    it('should reject when no file is provided', async () => {
      await expect(service.readFileAsText(null as any)).rejects.toThrow('No file selected.');
    });

    it('should reject when file reading fails', async () => {
      const mockFile = new File(['test'], 'test.txt', { type: 'text/plain' });
      
      // Mock FileReader to simulate error
      const originalFileReader = global.FileReader;
      global.FileReader = class MockFileReader {
        result: any = null;
        error: any = new Error('Read error');
        readyState: number = 0;
        onload: any = null;
        onerror: any = null;
        
        readAsText(file: any) {
          setTimeout(() => {
            if (this.onerror) this.onerror({ target: { error: this.error } });
          }, 0);
        }
      } as any;

      await expect(service.readFileAsText(mockFile)).rejects.toThrow('Failed to read file: Read error');
      
      // Restore original FileReader
      global.FileReader = originalFileReader;
    });

    it('should handle different file types', async () => {
      const markdownFile = new File(['# Test'], 'test.md', { type: 'text/markdown' });
      const textFile = new File(['Plain text'], 'test.txt', { type: 'text/plain' });
      
      const mdResult = await service.readFileAsText(markdownFile);
      const txtResult = await service.readFileAsText(textFile);
      
      expect(mdResult).toBe('mock file content');
      expect(txtResult).toBe('mock file content');
    });

    it('should handle large files', async () => {
      const largeContent = 'x'.repeat(10000);
      const largeFile = new File([largeContent], 'large.txt', { type: 'text/plain' });
      
      const result = await service.readFileAsText(largeFile);
      
      expect(result).toBe('mock file content');
    });

    it('should handle files with special characters', async () => {
      const specialFile = new File(['🚀 Special chars: åäö'], 'special.txt', { type: 'text/plain' });
      
      const result = await service.readFileAsText(specialFile);
      
      expect(result).toBe('mock file content');
    });
  });
});
