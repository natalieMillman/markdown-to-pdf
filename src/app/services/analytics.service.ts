import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  /**
   * Track page view
   */
  trackPageView(pageTitle: string, pagePath: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', environment.googleAnalytics.measurementId, {
        page_title: pageTitle,
        page_path: pagePath
      });
    }
  }

  /**
   * Track custom events
   */
  trackEvent(eventName: string, parameters?: { [key: string]: any }): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }

  /**
   * Track PDF generation
   */
  trackPDFGeneration(format: string, filename: string): void {
    this.trackEvent('pdf_generation', {
      format: format,
      filename: filename,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track file upload
   */
  trackFileUpload(fileType: string, fileSize: number): void {
    this.trackEvent('file_upload', {
      file_type: fileType,
      file_size: fileSize,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track export action
   */
  trackExport(format: string, filename: string): void {
    this.trackEvent('document_export', {
      export_format: format,
      filename: filename,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track theme change
   */
  trackThemeChange(theme: string): void {
    this.trackEvent('theme_change', {
      theme: theme,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track display settings change
   */
  trackDisplaySettingsChange(setting: string, value: any): void {
    this.trackEvent('display_settings_change', {
      setting: setting,
      value: value,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track user engagement (time spent, interactions)
   */
  trackUserEngagement(action: string, details?: any): void {
    this.trackEvent('user_engagement', {
      action: action,
      details: details,
      timestamp: new Date()
    });
  }
}
