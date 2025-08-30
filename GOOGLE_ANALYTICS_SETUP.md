# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your Markdown to PDF Converter application.

## 🚀 Quick Setup

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Set up a data stream for your website
4. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Update Environment Files

Replace `GA_MEASUREMENT_ID` with your actual measurement ID in these files:

**Development Environment:**
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX' // Your actual GA4 measurement ID
  }
};
```

**Production Environment:**
```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX' // Your actual GA4 measurement ID
  }
};
```

### 3. Update index.html (Optional)

If you want to hardcode the ID in your HTML (not recommended for production), update:

```html
<!-- src/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📊 What Gets Tracked

### Automatic Tracking
- **Page Views**: Every time the app loads
- **App Initialization**: Theme and display settings on startup

### User Actions
- **Theme Changes**: Light/dark mode switches
- **File Uploads**: File type and size information
- **PDF Generation**: Export format and filename
- **Document Exports**: HTML, DOCX, EPUB exports
- **Display Settings**: Font family and size changes
- **User Engagement**: Custom events and interactions

### Event Examples
```typescript
// Theme change
this.analyticsService.trackThemeChange('dark');

// File upload
this.analyticsService.trackFileUpload('text/markdown', 1024);

// PDF generation
this.analyticsService.trackPDFGeneration('A4', 'document.pdf');

// Export action
this.analyticsService.trackExport('html', 'document.html');
```

## 🔧 Customization

### Add New Events
```typescript
// In your component
constructor(private analyticsService: AnalyticsService) {}

// Track custom events
this.analyticsService.trackEvent('button_click', {
  button_name: 'generate_pdf',
  user_type: 'premium'
});
```

### Modify Existing Events
Edit `src/app/services/analytics.service.ts` to customize event parameters or add new tracking methods.

## 🚨 Privacy & Compliance

### GDPR Compliance
- Consider implementing cookie consent banners
- Respect user privacy preferences
- Anonymize IP addresses if required

### Data Retention
- Google Analytics data retention is controlled by your GA4 property settings
- Default retention is 26 months for standard properties

## 🧪 Testing

### Development Testing
1. Open browser developer tools
2. Check Network tab for requests to `googletagmanager.com`
3. Verify events in Google Analytics Real-Time reports

### Production Verification
1. Deploy your application
2. Check Google Analytics Real-Time reports
3. Verify events are being received

## 📱 Mobile & PWA Support

The analytics service works with:
- Desktop browsers
- Mobile browsers
- Progressive Web Apps (PWA)
- Angular Universal (SSR)

## 🚀 Advanced Features

### Enhanced Ecommerce (Optional)
If you plan to add premium features, you can extend the analytics service:

```typescript
trackPurchase(transactionId: string, value: number, currency: string = 'USD'): void {
  this.trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency
  });
}
```

### User Properties
Track user segments and demographics:

```typescript
setUserProperty(property: string, value: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', environment.googleAnalytics.measurementId, {
      user_properties: {
        [property]: value
      }
    });
  }
}
```

## 🔍 Troubleshooting

### Common Issues

**Events not showing in GA4:**
- Verify measurement ID is correct
- Check browser console for errors
- Ensure gtag script is loading
- Wait 24-48 hours for data to appear

**Script not loading:**
- Check network connectivity
- Verify script URL is accessible
- Check for ad blockers or privacy extensions

**TypeScript errors:**
- Ensure `@types/gtag` is installed (if needed)
- Check global interface declaration in analytics service

### Debug Mode
Enable debug mode in development:

```typescript
// In analytics service
trackEvent(eventName: string, parameters?: { [key: string]: any }): void {
  if (typeof window !== 'undefined' && window.gtag) {
    // Add debug logging in development
    if (!environment.production) {
      console.log('Analytics Event:', eventName, parameters);
    }
    window.gtag('event', eventName, parameters);
  }
}
```

## 📚 Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [gtag.js API Reference](https://developers.google.com/gtagjs/reference)
- [Angular Analytics Best Practices](https://angular.io/guide/analytics)

## 🎯 Next Steps

1. ✅ Set up Google Analytics property
2. ✅ Update environment files with your measurement ID
3. ✅ Test tracking in development
4. ✅ Deploy and verify production tracking
5. ✅ Set up custom dashboards and reports
6. ✅ Configure goals and conversions

---

**Need Help?** Check the troubleshooting section or refer to Google Analytics documentation for detailed setup instructions.
