// Jest setup for Angular testing
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialize Angular testing environment
declare const require: any;

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Global test setup
global.ResizeObserver = class ResizeObserver {
  constructor(callback: any) {}
  observe(target: Element): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock
});

// Mock FileReader
global.FileReader = class FileReader {
  result: any = null;
  error: any = null;
  readyState: number = 0;
  onload: any = null;
  onerror: any = null;
  
  readAsText(file: any) {
    setTimeout(() => {
      this.result = 'mock file content';
      if (this.onload) this.onload({ target: { result: this.result } });
    }, 0);
  }
} as any;

// Mock external libraries
jest.mock('marked', () => ({
  marked: jest.fn().mockResolvedValue('<p>Mock HTML</p>'),
  setOptions: jest.fn()
}));

jest.mock('jspdf', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
      addImage: jest.fn(),
      save: jest.fn(),
      internal: {
        pageSize: {
          getWidth: jest.fn().mockReturnValue(210),
          getHeight: jest.fn().mockReturnValue(297)
        }
      }
    }))
  };
});

jest.mock('html2canvas', () => {
  return jest.fn().mockResolvedValue({
    toDataURL: jest.fn().mockReturnValue('data:image/png;base64,mock')
  });
});

// Mock Prism
(global as any).Prism = {
  highlightElement: jest.fn()
};

// Mock KaTeX
(global as any).katex = {
  render: jest.fn()
};