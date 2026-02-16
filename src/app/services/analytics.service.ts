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

  constructor() {
    this.initWebVitals();
  }

  /**
   * Initialize Core Web Vitals tracking (LCP, CLS, INP, FCP, TTFB)
   * These metrics are used by Google for search ranking signals.
   */
  private async initWebVitals(): Promise<void> {
    try {
      const { onCLS, onINP, onLCP, onFCP, onTTFB } = await import('web-vitals');

      onCLS((metric) => {
        this.trackEvent('web_vitals', {
          metric_name: 'CLS',
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_id: metric.id
        });
      });

      onINP((metric) => {
        this.trackEvent('web_vitals', {
          metric_name: 'INP',
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_id: metric.id
        });
      });

      onLCP((metric) => {
        this.trackEvent('web_vitals', {
          metric_name: 'LCP',
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_id: metric.id
        });
      });

      onFCP((metric) => {
        this.trackEvent('web_vitals', {
          metric_name: 'FCP',
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_id: metric.id
        });
      });

      onTTFB((metric) => {
        this.trackEvent('web_vitals', {
          metric_name: 'TTFB',
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_id: metric.id
        });
      });
    } catch (error) {
      // Silently fail — web vitals tracking is non-critical
      console.warn('Web Vitals tracking unavailable:', error);
    }
  }

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
