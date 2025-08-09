import { TestBed } from '@angular/core/testing';
import { DisplaySettingsService, FontFamily, DisplaySettings } from './display-settings.service';

describe('DisplaySettingsService', () => {
  let service: DisplaySettingsService;
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

    // Mock CSS custom properties
    jest.spyOn(document.documentElement.style, 'setProperty');

    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaySettingsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have predefined font families', () => {
    expect(service.fontFamilies.length).toBeGreaterThan(0);
    
    // Check for expected categories
    const categories = service.fontFamilies.map(f => f.category);
    expect(categories).toContain('sans-serif');
    expect(categories).toContain('serif');
    expect(categories).toContain('monospace');
  });

  it('should initialize with default settings', () => {
    const settings = service.getCurrentSettings();
    
    expect(settings.fontFamily.name).toBe('Inter');
    expect(settings.fontSize).toBe(16);
  });

  it('should load saved settings from localStorage', () => {
    const savedSettings = {
      fontFamily: { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
      fontSize: 18
    };
    mockLocalStorage['displaySettings'] = JSON.stringify(savedSettings);
    
    // Create new service instance
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    expect(settings.fontFamily.name).toBe('Arial');
    expect(settings.fontSize).toBe(18);
  });

  it('should handle corrupted localStorage data', () => {
    mockLocalStorage['displaySettings'] = 'invalid-json';
    
    // Should not crash and should use defaults
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    expect(settings.fontFamily.name).toBe('Inter');
    expect(settings.fontSize).toBe(16);
  });

  it('should set font family and save to localStorage', () => {
    const newFont: FontFamily = { name: 'Georgia', value: 'Georgia, serif', category: 'serif' };
    
    service.setFontFamily(newFont);
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'displaySettings',
      expect.stringContaining('Georgia')
    );
    
    const settings = service.getCurrentSettings();
    expect(settings.fontFamily.name).toBe('Georgia');
  });

  it('should set font size and save to localStorage', () => {
    service.setFontSize(20);
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'displaySettings',
      expect.stringContaining('20')
    );
    
    const settings = service.getCurrentSettings();
    expect(settings.fontSize).toBe(20);
  });

  it('should emit settings changes', () => {
    const settingsChanges: DisplaySettings[] = [];
    
    service.settings$.subscribe(settings => {
      settingsChanges.push(settings);
    });
    
    const newFont: FontFamily = { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' };
    service.setFontFamily(newFont);
    service.setFontSize(18);
    
    expect(settingsChanges.length).toBeGreaterThan(1);
    expect(settingsChanges[settingsChanges.length - 1].fontSize).toBe(18);
  });

  it('should reset to default settings', () => {
    // Change settings first
    const customFont: FontFamily = { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' };
    service.setFontFamily(customFont);
    service.setFontSize(20);
    
    // Reset to defaults
    service.resetToDefaults();
    
    const settings = service.getCurrentSettings();
    expect(settings.fontFamily.name).toBe('Inter');
    expect(settings.fontSize).toBe(16);
  });

  it('should apply CSS custom properties', () => {
    const newFont: FontFamily = { name: 'Georgia', value: 'Georgia, serif', category: 'serif' };
    service.setFontFamily(newFont);
    service.setFontSize(18);
    
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--app-font-family',
      'Georgia, serif'
    );
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--app-font-size',
      '18px'
    );
  });

  it('should get fonts by category', () => {
    const sansSerifFonts = service.getFontsByCategory('sans-serif');
    const serifFonts = service.getFontsByCategory('serif');
    const monospaceFonts = service.getFontsByCategory('monospace');
    
    expect(sansSerifFonts.length).toBeGreaterThan(0);
    expect(serifFonts.length).toBeGreaterThan(0);
    expect(monospaceFonts.length).toBeGreaterThan(0);
    
    expect(sansSerifFonts.every(f => f.category === 'sans-serif')).toBe(true);
    expect(serifFonts.every(f => f.category === 'serif')).toBe(true);
    expect(monospaceFonts.every(f => f.category === 'monospace')).toBe(true);
  });

  it('should validate font size range', () => {
    const savedSettings = {
      fontFamily: { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
      fontSize: 50 // Out of range
    };
    mockLocalStorage['displaySettings'] = JSON.stringify(savedSettings);
    
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    // Should clamp to valid range
    expect(settings.fontSize).toBe(24); // Max value
  });

  it('should validate minimum font size', () => {
    const savedSettings = {
      fontFamily: { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
      fontSize: 5 // Below minimum
    };
    mockLocalStorage['displaySettings'] = JSON.stringify(savedSettings);
    
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    // Should clamp to minimum
    expect(settings.fontSize).toBe(10); // Min value
  });

  it('should handle invalid font family in saved settings', () => {
    const savedSettings = {
      fontFamily: { name: 'NonExistent', value: 'NonExistent, sans-serif', category: 'sans-serif' },
      fontSize: 16
    };
    mockLocalStorage['displaySettings'] = JSON.stringify(savedSettings);
    
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    // Should fall back to default font
    expect(settings.fontFamily.name).toBe('Inter');
  });

  it('should handle missing fontSize in saved settings', () => {
    const savedSettings = {
      fontFamily: { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' }
      // fontSize missing
    };
    mockLocalStorage['displaySettings'] = JSON.stringify(savedSettings);
    
    const newService = TestBed.inject(DisplaySettingsService);
    const settings = newService.getCurrentSettings();
    
    // Should use default fontSize
    expect(settings.fontSize).toBe(16);
  });
});
