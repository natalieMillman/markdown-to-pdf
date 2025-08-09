import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  /**
   * Read file content as text
   */
  readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.isValidMarkdownFile(file)) {
        reject(new Error('Please select a valid markdown file (.md, .markdown, or .txt)'));
        return;
      }

      const reader = new FileReader();
      
      reader.onload = (event) => {
        const content = event.target?.result as string;
        resolve(content);
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file. Please try again.'));
      };
      
      reader.readAsText(file);
    });
  }

  /**
   * Validate if file is a markdown file
   */
  isValidMarkdownFile(file: File): boolean {
    const validExtensions = ['.md', '.markdown', '.txt'];
    const fileName = file.name.toLowerCase();
    
    return validExtensions.some(ext => fileName.endsWith(ext)) || 
           file.type === 'text/markdown' || 
           file.type === 'text/plain';
  }

  /**
   * Format file size for display
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
