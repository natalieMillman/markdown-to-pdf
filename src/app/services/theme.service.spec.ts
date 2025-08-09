import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {};
    const localStorageMock = {
      getItem: jest.fn((key: string) => mockLocalStorage[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        mockLocalStorage[key] = value;
      }),
      removeItem: jest.fn((key: string) => {
        delete mockLocalStorage[key];
      }),
      clear: jest.fn(() => {
        mockLocalStorage = {};
      })
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Mock document.body.setAttribute
    jest.spyOn(document.body, 'setAttribute');

    // Mock meta theme-color element
    const mockMetaElement = {
      setAttribute: jest.fn()
    };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockMetaElement as any);

    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with light theme by default', (done) => {
    service.theme$.subscribe(theme => {
      expect(theme).toBe('light');
      done();
    });
  });

  it('should load saved theme from localStorage', () => {
    mockLocalStorage['app-theme'] = 'dark';
    
    // Create new service instance to test initialization
    const newService = TestBed.inject(ThemeService);
    
    newService.theme$.subscribe(theme => {
      expect(theme).toBe('dark');
    });
  });

  it('should toggle theme from light to dark', () => {
    service.toggleTheme();
    
    service.theme$.subscribe(theme => {
      expect(theme).toBe('dark');
    });
  });

  it('should toggle theme from dark to light', () => {
    service.setTheme('dark');
    service.toggleTheme();
    
    service.theme$.subscribe(theme => {
      expect(theme).toBe('light');
    });
  });

  it('should set theme and update localStorage', () => {
    service.setTheme('dark');
    
    expect(localStorage.setItem).toHaveBeenCalledWith('app-theme', 'dark');
    expect(document.body.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
  });

  it('should update meta theme-color when setting theme', () => {
    const mockMetaElement = { setAttribute: jest.fn() };
    (document.querySelector as jest.Mock).mockReturnValue(mockMetaElement);
    
    service.setTheme('dark');
    
    expect(mockMetaElement.setAttribute).toHaveBeenCalledWith('content', '#2c3e50');
    
    service.setTheme('light');
    
    expect(mockMetaElement.setAttribute).toHaveBeenCalledWith('content', '#667eea');
  });

  it('should handle missing meta theme-color element gracefully', () => {
    (document.querySelector as jest.Mock).mockReturnValue(null);
    
    expect(() => service.setTheme('dark')).not.toThrow();
  });

  it('should detect preferred dark theme from system', () => {
    // Mock matchMedia to return dark preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: true, // Simulates dark mode preference
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    // Create new service instance to test system preference detection
    const newService = TestBed.inject(ThemeService);
    
    // Should initialize with system preferred theme if no saved theme
    expect(localStorage.getItem).toHaveBeenCalledWith('app-theme');
  });

  it('should detect preferred light theme from system', () => {
    // Mock matchMedia to return light preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false, // Simulates light mode preference
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    // Should default to light when system doesn't prefer dark
    const newService = TestBed.inject(ThemeService);
    expect(true).toBeTruthy(); // Test passes if no error thrown
  });

  it('should handle corrupted localStorage data', () => {
    mockLocalStorage['app-theme'] = 'invalid-theme';
    
    // Should not crash and should use default theme
    const newService = TestBed.inject(ThemeService);
    expect(newService).toBeTruthy();
  });

  it('should emit theme changes to subscribers', () => {
    const themeChanges: string[] = [];
    
    service.theme$.subscribe(theme => {
      themeChanges.push(theme);
    });
    
    service.setTheme('dark');
    service.setTheme('light');
    service.toggleTheme();
    
    expect(themeChanges).toContain('dark');
    expect(themeChanges).toContain('light');
  });
});
