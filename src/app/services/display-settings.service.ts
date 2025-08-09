import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FontFamily {
  name: string;
  value: string;
  category: 'serif' | 'sans-serif' | 'monospace';
}

export interface DisplaySettings {
  fontFamily: FontFamily;
  fontSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class DisplaySettingsService {
  private readonly SETTINGS_KEY = 'markdown-pdf-display-settings';
  
  // Available font families
  public readonly fontFamilies: FontFamily[] = [
    // Sans-serif fonts
    { name: 'Inter (Default)', value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', category: 'sans-serif' },
    { name: 'Arial', value: 'Arial, sans-serif', category: 'sans-serif' },
    { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif', category: 'sans-serif' },
    { name: 'Verdana', value: 'Verdana, Geneva, sans-serif', category: 'sans-serif' },
    { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif', category: 'sans-serif' },
    
    // Serif fonts
    { name: 'Georgia', value: 'Georgia, "Times New Roman", serif', category: 'serif' },
    { name: 'Times New Roman', value: '"Times New Roman", Times, serif', category: 'serif' },
    { name: 'Book Antiqua', value: '"Book Antiqua", Palatino, serif', category: 'serif' },
    { name: 'Garamond', value: 'Garamond, serif', category: 'serif' },
    
    // Monospace fonts
    { name: 'Monaco', value: 'Monaco, "Lucida Console", monospace', category: 'monospace' },
    { name: 'Courier New', value: '"Courier New", Courier, monospace', category: 'monospace' },
    { name: 'Consolas', value: 'Consolas, "Liberation Mono", monospace', category: 'monospace' },
    { name: 'Source Code Pro', value: '"Source Code Pro", "Courier New", monospace', category: 'monospace' }
  ];

  // Default settings
  private defaultSettings: DisplaySettings = {
    fontFamily: this.fontFamilies[0], // Inter (Default)
    fontSize: 16
  };

  private settingsSubject = new BehaviorSubject<DisplaySettings>(this.defaultSettings);
  public settings$ = this.settingsSubject.asObservable();

  constructor() {
    this.loadSettings();
  }

  /**
   * Load settings from localStorage
   */
  private loadSettings(): void {
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) {
        const parsedSettings = JSON.parse(saved);
        // Ensure the font family exists in our list
        const fontFamily = this.fontFamilies.find(f => f.value === parsedSettings.fontFamily?.value) 
          || this.defaultSettings.fontFamily;
        
        const settings: DisplaySettings = {
          fontFamily,
          fontSize: this.validateFontSize(parsedSettings.fontSize) || this.defaultSettings.fontSize
        };
        
        this.settingsSubject.next(settings);
        this.applySettings(settings);
      } else {
        this.applySettings(this.defaultSettings);
      }
    } catch (error) {
      console.warn('Error loading display settings:', error);
      this.applySettings(this.defaultSettings);
    }
  }

  /**
   * Save settings to localStorage
   */
  private saveSettings(settings: DisplaySettings): void {
    try {
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn('Error saving display settings:', error);
    }
  }

  /**
   * Apply settings to the document
   */
  private applySettings(settings: DisplaySettings): void {
    // Apply font family to preview container
    const style = document.getElementById('dynamic-font-styles') || document.createElement('style');
    style.id = 'dynamic-font-styles';
    
    style.textContent = `
      .preview-container {
        font-family: ${settings.fontFamily.value} !important;
        font-size: ${settings.fontSize}px !important;
      }
      
      .preview-container h1 {
        font-size: ${settings.fontSize * 2}px !important;
      }
      
      .preview-container h2 {
        font-size: ${settings.fontSize * 1.5}px !important;
      }
      
      .preview-container h3 {
        font-size: ${settings.fontSize * 1.3}px !important;
      }
      
      .preview-container h4 {
        font-size: ${settings.fontSize * 1.1}px !important;
      }
      
      .preview-container h5 {
        font-size: ${settings.fontSize}px !important;
      }
      
      .preview-container h6 {
        font-size: ${settings.fontSize * 0.9}px !important;
      }
      
      .preview-container code {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        font-size: ${settings.fontSize * 0.9}px !important;
      }
      
      .preview-container pre code {
        font-size: ${settings.fontSize * 0.85}px !important;
      }
    `;
    
    if (!document.head.contains(style)) {
      document.head.appendChild(style);
    }
  }

  /**
   * Update font family
   */
  setFontFamily(fontFamily: FontFamily): void {
    const currentSettings = this.settingsSubject.value;
    const newSettings = { ...currentSettings, fontFamily };
    
    this.settingsSubject.next(newSettings);
    this.saveSettings(newSettings);
    this.applySettings(newSettings);
  }

  /**
   * Update font size
   */
  setFontSize(fontSize: number): void {
    const validSize = this.validateFontSize(fontSize);
    if (!validSize) return;

    const currentSettings = this.settingsSubject.value;
    const newSettings = { ...currentSettings, fontSize: validSize };
    
    this.settingsSubject.next(newSettings);
    this.saveSettings(newSettings);
    this.applySettings(newSettings);
  }

  /**
   * Validate font size
   */
  private validateFontSize(size: number): number | null {
    if (typeof size !== 'number' || size < 10 || size > 24) {
      return null;
    }
    return Math.round(size);
  }

  /**
   * Reset to default settings
   */
  resetToDefaults(): void {
    this.settingsSubject.next(this.defaultSettings);
    this.saveSettings(this.defaultSettings);
    this.applySettings(this.defaultSettings);
  }

  /**
   * Get current settings
   */
  getCurrentSettings(): DisplaySettings {
    return this.settingsSubject.value;
  }

  /**
   * Get font families by category
   */
  getFontsByCategory(category: 'serif' | 'sans-serif' | 'monospace'): FontFamily[] {
    return this.fontFamilies.filter(font => font.category === category);
  }
}
