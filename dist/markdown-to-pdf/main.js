"use strict";
(self["webpackChunkmarkdown_to_pdf"] = self["webpackChunkmarkdown_to_pdf"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/pdf.service */ 3724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/file.service */ 4704);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/analytics.service */ 2210);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/theme.service */ 487);
/* harmony import */ var _services_print_preview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/print-preview.service */ 4640);
/* harmony import */ var _services_syntax_math_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/syntax-math.service */ 2150);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/export.service */ 8892);
/* harmony import */ var _services_display_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/display-settings.service */ 842);















function AppComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_div_31_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.clearUploadedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " \u274C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.uploadedFileName);
  }
}
function AppComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Reading file...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function AppComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", ctx_r3.pdfFormats[key_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.pdfFormats[key_r5].name, " ");
  }
}
function AppComponent_div_62_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 83)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Custom Page Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 84)(4, "div", 10)(5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Width (mm):");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_div_2_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.customWidth, $event) || (ctx_r3.customWidth = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 10)(9, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Height (mm):");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_div_2_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.customHeight, $event) || (ctx_r3.customHeight = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.customWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.customHeight);
  }
}
function AppComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "hr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppComponent_div_62_div_2_Template, 12, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 72)(4, "div", 73)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Page Margins (mm)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_div_62_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.resetMargins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " \uD83D\uDD04 Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 74)(10, "div", 10)(11, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Top:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.margins.top, $event) || (ctx_r3.margins.top = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10)(15, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Right:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.margins.right, $event) || (ctx_r3.margins.right = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 10)(19, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Bottom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.margins.bottom, $event) || (ctx_r3.margins.bottom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 10)(23, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Left:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_62_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r3.margins.left, $event) || (ctx_r3.margins.left = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.selectedFormat.name === "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.margins.top);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.margins.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.margins.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.margins.left);
  }
}
function AppComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_div_79_Template_div_click_0_listener() {
      const format_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.selectedExportFormat = format_r9.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const format_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("selected", ctx_r3.selectedExportFormat === format_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](format_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](format_r9.label);
  }
}
function AppComponent_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", font_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", font_r10.name, " ");
  }
}
function AppComponent_option_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", font_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", font_r11.name, " ");
  }
}
function AppComponent_option_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", font_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", font_r12.name, " ");
  }
}
class AppComponent {
  constructor(pdfService, fileService, analyticsService, themeService, printPreviewService, syntaxMathService, exportService, displaySettingsService) {
    this.pdfService = pdfService;
    this.fileService = fileService;
    this.analyticsService = analyticsService;
    this.themeService = themeService;
    this.printPreviewService = printPreviewService;
    this.syntaxMathService = syntaxMathService;
    this.exportService = exportService;
    this.displaySettingsService = displaySettingsService;
    this.title = 'Markdown to PDF Converter';
    this.markdownContent = `# Welcome to Markdown to PDF Converter

This is a **simple** and *elegant* tool to convert your markdown documents to PDF format.

## Features

- Real-time markdown preview
- Beautiful PDF generation
- Responsive design
- Easy to use interface

## How to use

1. Type or paste your markdown content in the left panel
2. See the live preview on the right panel
3. Click "Generate PDF" to download your document

### Code Example with Syntax Highlighting

\`\`\`javascript
function calculateCircleArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}

// Example usage
const area = calculateCircleArea(5);
console.log(\`Area: \${area.toFixed(2)}\`);
\`\`\`

### Mathematical Expressions

**Inline math:** The area of a circle is $A = \\pi r^2$ where $r$ is the radius.

**Display math:**
$$A = \\pi r^2$$

### Quote

> "The best way to predict the future is to create it." - Peter Drucker

### List

- Item 1
- Item 2
- Item 3

**Happy writing!** 📝`;
    this.htmlPreview = '';
    this.isGenerating = false;
    this.filename = 'document.pdf';
    this.isDragOver = false;
    this.uploadedFileName = '';
    this.isUploading = false;
    this.isDarkMode = false;
    // PDF Configuration
    this.pdfFormats = _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.PDF_FORMATS;
    this.selectedFormat = _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.PDF_FORMATS['A4'];
    this.orientation = 'portrait';
    this.margins = {
      ..._services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MARGINS
    };
    this.customWidth = 210;
    this.customHeight = 297;
    this.showAdvancedOptions = false;
    this.fontFamilies = [];
    this.selectedExportFormat = 'html';
    this.exportFormats = [{
      value: 'html',
      label: 'HTML',
      icon: '🌐'
    }, {
      value: 'docx',
      label: 'Word Document',
      icon: '📄'
    }, {
      value: 'epub',
      label: 'E-Book',
      icon: '📚'
    }];
    this.isExporting = false;
    this.updatePreview();
    // Subscribe to theme changes
    this.themeService.theme$.subscribe(theme => {
      this.isDarkMode = theme === 'dark';
    });
    // Initialize display settings
    this.fontFamilies = this.displaySettingsService.fontFamilies;
    this.displaySettings = this.displaySettingsService.getCurrentSettings();
    // Subscribe to display settings changes
    this.displaySettingsService.settings$.subscribe(settings => {
      this.displaySettings = settings;
    });
  }
  ngOnInit() {
    // Track initial page view
    this.analyticsService.trackPageView(this.title, '/');
    // Track app initialization
    this.analyticsService.trackUserEngagement('app_initialized', {
      theme: this.isDarkMode ? 'dark' : 'light',
      display_settings: this.displaySettings
    });
  }
  updatePreview() {
    var _this = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.htmlPreview = yield _this.pdfService.markdownToHtml(_this.markdownContent);
    })();
  }
  generatePDF() {
    var _this2 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.markdownContent.trim()) {
        alert('Please enter some markdown content first.');
        return;
      }
      _this2.isGenerating = true;
      try {
        const config = {
          format: _this2.selectedFormat.name === 'Custom' ? {
            name: 'Custom',
            width: _this2.customWidth,
            height: _this2.customHeight
          } : _this2.selectedFormat,
          orientation: _this2.orientation,
          margins: {
            ..._this2.margins
          }
        };
        yield _this2.pdfService.generatePDFFromMarkdown(_this2.markdownContent, _this2.filename, config);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
      } finally {
        _this2.isGenerating = false;
      }
    })();
  }
  clearContent() {
    var _this3 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (confirm('Are you sure you want to clear all content?')) {
        _this3.markdownContent = '';
        yield _this3.updatePreview();
      }
    })();
  }
  loadSample() {
    var _this4 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.markdownContent = `# Sample Document

## Introduction

This is a sample markdown document to demonstrate the **Markdown to PDF** converter.

### Features Showcase

1. **Headers** - Different levels of headings
2. **Text Formatting** - *italic*, **bold**, and \`code\`
3. **Lists** - Both ordered and unordered
4. **Code Blocks** - Syntax highlighted code
5. **Quotes** - Blockquotes for emphasis
6. **Links** - [Visit GitHub](https://github.com)

### Code Examples with Syntax Highlighting

**Python:**
\`\`\`python
def fibonacci(n):
    """Calculate the nth Fibonacci number using recursion."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
\`\`\`

**JavaScript:**
\`\`\`javascript
const calculateArea = (radius) => {
    const pi = Math.PI;
    return pi * radius ** 2;
};

console.log(\`Circle area: \${calculateArea(5)}\`);
\`\`\`

**TypeScript:**
\`\`\`typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

const createUser = (userData: User): User => {
    return { ...userData };
};
\`\`\`

### Mathematical Expressions

**Inline Math:** The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ and Euler's identity is $e^{i\\pi} + 1 = 0$.

**Display Math:**
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

**Matrix Example:**
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix} \\begin{bmatrix}
x \\\\
y
\\end{bmatrix} = \\begin{bmatrix}
ax + by \\\\
cx + dy
\\end{bmatrix}$$

### Important Quote

> "Documentation is a love letter that you write to your future self." - Damian Conway

### Task List

- [x] Create markdown parser
- [x] Implement PDF generation
- [x] Add beautiful styling
- [ ] Add more export formats
- [ ] Implement file upload

### Table Example

| Feature | Status | Priority |
|---------|--------|----------|
| PDF Export | ✅ Complete | High |
| Live Preview | ✅ Complete | High |
| File Upload | 🚧 Planned | Medium |
| Themes | 💡 Idea | Low |

---

**Thank you for using our Markdown to PDF converter!** 

*Generated on ${new Date().toLocaleDateString()}*`;
      yield _this4.updatePreview();
    })();
  }
  // File Upload Methods
  onFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      this.handleFileUpload(file);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFileUpload(files[0]);
    }
  }
  handleFileUpload(file) {
    var _this5 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isUploading = true;
      _this5.uploadedFileName = '';
      try {
        const content = yield _this5.fileService.readFileAsText(file);
        _this5.markdownContent = content;
        _this5.uploadedFileName = file.name;
        // Update filename for PDF generation (remove extension and add .pdf)
        const nameWithoutExt = file.name.replace(/\.[^/.]+$/, '');
        _this5.filename = `${nameWithoutExt}.pdf`;
        yield _this5.updatePreview();
      } catch (error) {
        console.error('Error uploading file:', error);
        alert(error instanceof Error ? error.message : 'Error uploading file. Please try again.');
      } finally {
        _this5.isUploading = false;
      }
    })();
  }
  clearUploadedFile() {
    this.uploadedFileName = '';
    this.markdownContent = '';
    this.filename = 'document.pdf';
    this.updatePreview();
  }
  // Theme Methods
  toggleTheme() {
    this.themeService.toggleTheme();
    // Track theme change
    const newTheme = this.themeService.getCurrentTheme();
    this.analyticsService.trackThemeChange(newTheme);
  }
  // Print Preview Method
  openPrintPreview() {
    if (!this.markdownContent.trim()) {
      alert('Please enter some markdown content first.');
      return;
    }
    const title = this.filename.replace('.pdf', '') || 'Markdown Document';
    this.printPreviewService.openPrintPreview(this.htmlPreview, title);
  }
  // PDF Configuration Methods
  onFormatChange() {
    if (this.selectedFormat.name === 'Custom') {
      this.customWidth = this.selectedFormat.width;
      this.customHeight = this.selectedFormat.height;
    }
  }
  resetMargins() {
    this.margins = {
      ..._services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MARGINS
    };
  }
  toggleAdvancedOptions() {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }
  getFormatKeys() {
    return Object.keys(this.pdfFormats);
  }
  getPageDimensions() {
    const format = this.selectedFormat.name === 'Custom' ? {
      width: this.customWidth,
      height: this.customHeight
    } : this.selectedFormat;
    const width = this.orientation === 'portrait' ? format.width : format.height;
    const height = this.orientation === 'portrait' ? format.height : format.width;
    return `${width} × ${height} mm`;
  }
  // Display Settings Methods
  onFontFamilyChange(fontValue) {
    const fontFamily = this.fontFamilies.find(f => f.value === fontValue);
    if (fontFamily) {
      this.displaySettingsService.setFontFamily(fontFamily);
    }
  }
  getSansSerifFonts() {
    return this.displaySettingsService.getFontsByCategory('sans-serif');
  }
  getSerifFonts() {
    return this.displaySettingsService.getFontsByCategory('serif');
  }
  getMonospaceFonts() {
    return this.displaySettingsService.getFontsByCategory('monospace');
  }
  onFontSizeChange(fontSize) {
    if (fontSize >= 10 && fontSize <= 24) {
      this.displaySettingsService.setFontSize(fontSize);
    }
  }
  resetDisplaySettings() {
    this.displaySettingsService.resetToDefaults();
  }
  // Export Methods
  exportDocument() {
    var _this6 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.markdownContent.trim()) {
        alert('Please enter some markdown content first.');
        return;
      }
      _this6.isExporting = true;
      try {
        const baseFilename = _this6.filename.replace('.pdf', '');
        const exportOptions = {
          title: baseFilename || 'Markdown Document',
          author: 'Markdown to PDF Converter',
          fontSize: _this6.displaySettings.fontSize,
          fontFamily: _this6.displaySettings.fontFamily.value
        };
        switch (_this6.selectedExportFormat) {
          case 'html':
            yield _this6.exportService.exportHTML(_this6.htmlPreview, `${baseFilename}.html`, exportOptions);
            break;
          case 'docx':
            yield _this6.exportService.exportDOCX(_this6.htmlPreview, `${baseFilename}.docx`, exportOptions);
            break;
          case 'epub':
            yield _this6.exportService.exportEPUB(_this6.htmlPreview, `${baseFilename}.epub`, exportOptions);
            break;
        }
      } catch (error) {
        console.error('Error exporting document:', error);
        alert('Error exporting document. Please try again.');
      } finally {
        _this6.isExporting = false;
      }
    })();
  }
  getExportButtonText() {
    const format = this.exportFormats.find(f => f.value === this.selectedExportFormat);
    if (this.isExporting) {
      return `🔄 Exporting ${format?.label}...`;
    }
    return `${format?.icon} Export ${format?.label}`;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.PdfService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_print_preview_service__WEBPACK_IMPORTED_MODULE_5__.PrintPreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_syntax_math_service__WEBPACK_IMPORTED_MODULE_6__.SyntaxMathService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_export_service__WEBPACK_IMPORTED_MODULE_7__.ExportService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_display_settings_service__WEBPACK_IMPORTED_MODULE_8__.DisplaySettingsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 125,
      vars: 37,
      consts: [["fileInput", ""], [1, "container"], [1, "header"], [1, "header-content"], [1, "title-section"], [1, "header-controls"], [1, "theme-toggle-container"], [1, "theme-label"], [1, "btn", "btn-theme-toggle", 3, "click", "title"], [1, "card"], [1, "form-group"], [1, "form-label"], [1, "file-upload-area", 3, "dragover", "dragleave", "drop", "click"], [1, "upload-content"], [1, "upload-icon"], [1, "upload-text"], [1, "upload-subtitle"], ["type", "file", "accept", ".md,.markdown,.txt,text/markdown,text/plain", 2, "display", "none", 3, "change"], ["class", "uploaded-file-info", 4, "ngIf"], ["class", "upload-progress", 4, "ngIf"], [1, "pdf-config-header"], ["type", "button", 1, "btn", "btn-toggle", 3, "click"], [1, "pdf-config-grid"], ["for", "filename", 1, "form-label"], ["id", "filename", "type", "text", "placeholder", "Enter filename (e.g., my-document.pdf)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "format", 1, "form-label"], ["id", "format", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "orientation", 1, "form-label"], ["id", "orientation", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "portrait"], ["value", "landscape"], [1, "page-size-display"], ["class", "advanced-config", 4, "ngIf"], [1, "button-group"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click"], [1, "export-format-section"], [1, "export-format-grid"], ["class", "export-format-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "display-settings-header"], ["type", "button", 1, "btn", "btn-reset", 3, "click"], [1, "display-settings-grid"], ["for", "fontFamily", 1, "form-label"], ["id", "fontFamily", 1, "form-control", 3, "change", "value"], ["label", "Sans-serif"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Serif"], ["label", "Monospace"], ["for", "fontSize", 1, "form-label"], [1, "font-size-controls"], ["id", "fontSize", "type", "range", "min", "10", "max", "24", "step", "1", 1, "font-size-slider", 3, "input", "value"], [1, "font-size-buttons"], [1, "btn", "btn-font-size", 3, "click", "disabled"], [1, "font-size-display"], [1, "font-preview"], [1, "grid"], ["for", "markdown", 1, "form-label"], ["id", "markdown", "placeholder", "Type your markdown here...\n          \nExample:\n# My Document\nThis is **bold** and *italic* text.\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log('Hello World!');\n```", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "preview-container", 3, "innerHTML"], [1, "uploaded-file-info"], [1, "file-info"], [1, "file-icon"], [1, "file-name"], ["title", "Remove file", 1, "btn-clear-file", 3, "click"], [1, "upload-progress"], [1, "loading-spinner"], [3, "ngValue"], [1, "advanced-config"], [1, "config-divider"], ["class", "custom-size-controls", 4, "ngIf"], [1, "margins-controls"], [1, "margins-header"], [1, "margins-grid"], ["for", "marginTop", 1, "form-label"], ["id", "marginTop", "type", "number", "min", "0", "max", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "marginRight", 1, "form-label"], ["id", "marginRight", "type", "number", "min", "0", "max", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "marginBottom", 1, "form-label"], ["id", "marginBottom", "type", "number", "min", "0", "max", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "marginLeft", 1, "form-label"], ["id", "marginLeft", "type", "number", "min", "0", "max", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "custom-size-controls"], [1, "size-inputs"], ["for", "customWidth", 1, "form-label"], ["id", "customWidth", "type", "number", "min", "50", "max", "500", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "customHeight", 1, "form-label"], ["id", "customHeight", "type", "number", "min", "50", "max", "500", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "export-format-option", 3, "click"], [1, "format-icon"], [1, "format-label"], [3, "value"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\uD83D\uDCC4 Markdown to PDF");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Convert your markdown documents to beautiful PDFs instantly");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleTheme());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Upload Markdown File:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragover", function AppComponent_Template_div_dragover_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onDragOver($event));
          })("dragleave", function AppComponent_Template_div_dragleave_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onDragLeave($event));
          })("drop", function AppComponent_Template_div_drop_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onDrop($event));
          })("click", function AppComponent_Template_div_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 13)(20, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\uD83D\uDCC1");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 15)(23, "p")(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Click to browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " or drag and drop your markdown file here");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Supports .md, .markdown, and .txt files");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 17, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AppComponent_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFileSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AppComponent_div_31_Template, 8, 1, "div", 18)(32, AppComponent_div_32_Template, 4, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 9)(34, "div", 20)(35, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "PDF Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleAdvancedOptions());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 22)(40, "div", 10)(41, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "PDF Filename:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.filename, $event) || (ctx.filename = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 10)(45, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Page Format:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.selectedFormat, $event) || (ctx.selectedFormat = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AppComponent_Template_select_change_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFormatChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, AppComponent_option_48_Template, 2, 2, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 10)(50, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Orientation:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.orientation, $event) || (ctx.orientation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "\uD83D\uDCC4 Portrait");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "\uD83D\uDCC4 Landscape");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 10)(58, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Page Size:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, AppComponent_div_62_Template, 26, 5, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 34)(64, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.generatePDF());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.exportDocument());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_68_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openPrintPreview());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, " \uD83D\uDDA8\uFE0F Print Preview ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.loadSample());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, " \uD83D\uDCCB Load Sample ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.clearContent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, " \uD83D\uDDD1\uFE0F Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 38)(75, "div", 10)(76, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Export Format:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, AppComponent_div_79_Template, 5, 4, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 9)(81, "div", 41)(82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Display Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.resetDisplaySettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, " \uD83D\uDD04 Reset ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 43)(87, "div", 10)(88, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Font Family:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AppComponent_Template_select_change_90_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFontFamilyChange($event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "optgroup", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, AppComponent_option_92_Template, 2, 2, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "optgroup", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, AppComponent_option_94_Template, 2, 2, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "optgroup", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, AppComponent_option_96_Template, 2, 2, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 10)(98, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 51)(101, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function AppComponent_Template_input_input_101_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFontSizeChange(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 53)(103, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFontSizeChange(ctx.displaySettings.fontSize - 1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, " \u2212 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFontSizeChange(ctx.displaySettings.fontSize + 1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, " + ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "div", 10)(110, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "Preview:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, " The quick brown fox jumps over the lazy dog. 1234567890 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "div", 57)(115, "div", 9)(116, "div", 10)(117, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "Markdown Content:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "textarea", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.markdownContent, $event) || (ctx.markdownContent = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function AppComponent_Template_textarea_input_119_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.updatePreview());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 9)(121, "div", 10)(122, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "Live Preview:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.isDarkMode ? "Dark Mode" : "Light Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.isDarkMode ? "Switch to light mode" : "Switch to dark mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.isDarkMode ? "\u2600\uFE0F" : "\uD83C\uDF19", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("drag-over", ctx.isDragOver)("uploading", ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.uploadedFileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.showAdvancedOptions ? "\uD83D\uDD3C Hide Advanced" : "\uD83D\uDD3D Show Advanced", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.filename);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getFormatKeys());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.orientation);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getPageDimensions());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAdvancedOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isGenerating);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.isGenerating ? "\uD83D\uDD04 Generating..." : "\uD83D\uDCE5 Generate PDF", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isExporting || !ctx.markdownContent.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.getExportButtonText(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.markdownContent.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.exportFormats);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.displaySettings.fontFamily.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getSansSerifFonts());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getSerifFonts());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getMonospaceFonts());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Font Size: ", ctx.displaySettings.fontSize, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.displaySettings.fontSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.displaySettings.fontSize <= 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.displaySettings.fontSize, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.displaySettings.fontSize >= 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx.displaySettings.fontFamily.value)("font-size", ctx.displaySettings.fontSize, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.markdownContent);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx.htmlPreview, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
      styles: ["\n\n.container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in;\n}\n\n\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.theme-toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 8px 16px;\n  border-radius: 25px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n\n.theme-toggle-container[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.theme-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 500;\n  white-space: nowrap;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.btn-theme-toggle[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  font-size: 1.1rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n\n.btn-theme-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.5);\n  transform: scale(1.1);\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  transform: none !important;\n  box-shadow: none !important;\n}\n\n.preview-container[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n  border: 2px dashed #e9ecef;\n  transition: border-color 0.3s ease;\n}\n\n.preview-container[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n}\n\n\n\n.preview-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.preview-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n\n.preview-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 4px;\n}\n\n.preview-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #5a6fd8;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.btn[_ngcontent-%COMP%]:disabled::before {\n  content: '';\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n\n\n.file-upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed #dee2e6;\n  border-radius: 12px;\n  padding: 40px 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: #f8f9fa;\n  position: relative;\n  width: 100%;\n}\n\n.file-upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n  transform: translateY(-2px);\n}\n\n.file-upload-area.drag-over[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);\n}\n\n.file-upload-area.uploading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n\n.upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  opacity: 0.7;\n}\n\n.upload-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n}\n\n.upload-text[_ngcontent-%COMP%]   .upload-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-top: 4px;\n}\n\n.uploaded-file-info[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: #e8f5e8;\n  border: 1px solid #c3e6c3;\n  border-radius: 8px;\n}\n\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.file-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: #2d5a2d;\n}\n\n.btn-clear-file[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n\n.btn-clear-file[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 0, 0, 0.1);\n}\n\n.upload-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 16px;\n  padding: 12px;\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 8px;\n  color: #856404;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px;\n  }\n  \n  .theme-toggle-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 6px 12px;\n  }\n  \n  .theme-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .btn-theme-toggle[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 1rem;\n  }\n  \n  textarea.form-control[_ngcontent-%COMP%] {\n    min-height: 200px;\n  }\n  \n  .preview-container[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  \n  .file-upload-area[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n  \n  .upload-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .upload-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  \n\n  .pdf-config-grid[_ngcontent-%COMP%], \n   .display-settings-grid[_ngcontent-%COMP%], \n   .export-format-grid[_ngcontent-%COMP%], \n   .margins-grid[_ngcontent-%COMP%], \n   .size-inputs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: 15px !important;\n  }\n  \n  \n\n  .card[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .form-label[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  \n\n  .button-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n  }\n  \n  .button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .file-upload-area[_ngcontent-%COMP%] {\n    padding: 25px 12px;\n  }\n  \n  .upload-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .upload-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .upload-text[_ngcontent-%COMP%]   .upload-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n\n\n.pdf-config-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.pdf-config-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n\n.btn-toggle[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n}\n\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background: #dee2e6;\n  transform: translateY(-1px);\n}\n\n.pdf-config-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.page-size-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  font-weight: 600;\n  color: #495057;\n  text-align: center;\n}\n\n.advanced-config[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n  }\n}\n\n.config-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px solid #e9ecef;\n  margin: 20px 0;\n}\n\n.custom-size-controls[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.custom-size-controls[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 15px;\n  font-size: 1rem;\n}\n\n.size-inputs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n\n.margins-controls[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 15px;\n  font-size: 1rem;\n}\n\n.margins-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.btn-reset[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n}\n\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.margins-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 15px;\n}\n\n\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .pdf-config-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .page-size-display[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  border-color: #576574;\n  color: #bdc3c7;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .custom-size-controls[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .margins-controls[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .config-divider[_ngcontent-%COMP%] {\n  border-top-color: #576574;\n}\n\n\n\n@media (max-width: 768px) {\n  .pdf-config-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .margins-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  \n  .size-inputs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .pdf-config-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  \n  .margins-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .margins-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  \n  .size-inputs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n\n\n\n.export-format-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e9ecef;\n}\n\n.export-format-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 8px;\n}\n\n.export-format-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: #f8f9fa;\n}\n\n.export-format-option[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n  transform: translateY(-2px);\n}\n\n.export-format-option.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);\n}\n\n.format-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.format-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  text-align: center;\n  color: #495057;\n}\n\n.export-format-option.selected[_ngcontent-%COMP%]   .format-label[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n}\n\n\n\n.display-settings-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.display-settings-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n\n.display-settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.font-size-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.font-size-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: #e9ecef;\n  outline: none;\n  -webkit-appearance: none;\n}\n\n.font-size-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #667eea;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);\n}\n\n.font-size-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #667eea;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);\n}\n\n.font-size-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n\n.btn-font-size[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #dee2e6;\n  background: #f8f9fa;\n  color: #495057;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-font-size[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n\n.btn-font-size[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.font-size-display[_ngcontent-%COMP%] {\n  min-width: 50px;\n  text-align: center;\n  font-weight: 600;\n  color: #495057;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n}\n\n.font-preview[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px dashed #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n  text-align: center;\n  color: #495057;\n  transition: all 0.3s ease;\n}\n\n\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .export-format-section[_ngcontent-%COMP%] {\n  border-top-color: #576574;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .export-format-option[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  border-color: #576574;\n  color: #ecf0f1;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .export-format-option[_ngcontent-%COMP%]:hover {\n  background: #34495e;\n  border-color: #667eea;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .export-format-option.selected[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .format-label[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .export-format-option.selected[_ngcontent-%COMP%]   .format-label[_ngcontent-%COMP%] {\n  color: #a8d2ff;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .display-settings-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .font-size-slider[_ngcontent-%COMP%] {\n  background: #576574;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .btn-font-size[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  border-color: #576574;\n  color: #bdc3c7;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .btn-font-size[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #34495e;\n  border-color: #667eea;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .font-size-display[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n}\n\nbody[data-theme=\"dark\"][_ngcontent-%COMP%]   .font-preview[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  border-color: #576574;\n  color: #bdc3c7;\n}\n\n\n\n@media (max-width: 768px) {\n  .export-format-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  \n  .export-format-option[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 12px 16px;\n  }\n  \n  .display-settings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  \n  .display-settings-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n  \n  .font-size-buttons[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  \n  \n\n  .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  \n  \n\n  .form-label[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .export-format-option[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  \n  .format-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .format-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .font-size-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  .btn-font-size[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Us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QzNCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQSwwREFBMEQ7RUFDMUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBLDRDQUE0QztFQUM1QztJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb21wb25lbnQtc3BlY2lmaWMgc3R5bGVzICovXG4uY29udGFpbmVyIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluO1xufVxuXG4vKiBIZWFkZXIgTGF5b3V0ICovXG4uaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gIGZsZXg6IDE7XG59XG5cbi5oZWFkZXItY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi50aGVtZS10b2dnbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnRoZW1lLXRvZ2dsZS1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnRoZW1lLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5idG4tdGhlbWUtdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnRuLXRoZW1lLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmNhcmQge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmRpc2FibGVkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByZXZpZXctY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZTllY2VmO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG4ucHJldmlldy1jb250YWluZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG59XG5cbi8qIEN1c3RvbSBzY3JvbGxiYXIgZm9yIHByZXZpZXcgKi9cbi5wcmV2aWV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4ucHJldmlldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJldmlldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJldmlldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVhNmZkODtcbn1cblxuLyogTG9hZGluZyBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmJ0bjpkaXNhYmxlZDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi8qIEZpbGUgVXBsb2FkIFN0eWxlcyAqL1xuLmZpbGUtdXBsb2FkLWFyZWEge1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpbGUtdXBsb2FkLWFyZWE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG4gIGJhY2tncm91bmQ6ICNmMGYyZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmZpbGUtdXBsb2FkLWFyZWEuZHJhZy1vdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcbn1cblxuLmZpbGUtdXBsb2FkLWFyZWEudXBsb2FkaW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnVwbG9hZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4udXBsb2FkLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnVwbG9hZC10ZXh0IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4udXBsb2FkLXRleHQgLnVwbG9hZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4udXBsb2FkZWQtZmlsZS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI2U4ZjVlODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZmlsZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5maWxlLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmZpbGUtbmFtZSB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMmQ1YTJkO1xufVxuXG4uYnRuLWNsZWFyLWZpbGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uYnRuLWNsZWFyLWZpbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbn1cblxuLnVwbG9hZC1wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmVhYTc7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICM4NTY0MDQ7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzY2N2VlYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuICBcbiAgLnRoZW1lLXRvZ2dsZS1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICB9XG4gIFxuICAudGhlbWUtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBcbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuICBcbiAgLnByZXZpZXctY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxuICBcbiAgLmZpbGUtdXBsb2FkLWFyZWEge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgfVxuICBcbiAgLnVwbG9hZC1pY29uIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBcbiAgLnVwbG9hZC10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIFxuICAvKiBFbnN1cmUgYWxsIGdyaWRzIHN0YWNrIHByb3Blcmx5IG9uIG1vYmlsZSAqL1xuICAucGRmLWNvbmZpZy1ncmlkLFxuICAuZGlzcGxheS1zZXR0aW5ncy1ncmlkLFxuICAuZXhwb3J0LWZvcm1hdC1ncmlkLFxuICAubWFyZ2lucy1ncmlkLFxuICAuc2l6ZS1pbnB1dHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gICAgZ2FwOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIENlbnRlciBhbGwgY29udGVudCBvbiBtb2JpbGUgKi9cbiAgLmNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogTWFrZSBidXR0b25zIGZ1bGwgd2lkdGggb24gbW9iaWxlICovXG4gIC5idXR0b24tZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIC5idXR0b24tZ3JvdXAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgXG4gIC5maWxlLXVwbG9hZC1hcmVhIHtcbiAgICBwYWRkaW5nOiAyNXB4IDEycHg7XG4gIH1cbiAgXG4gIC51cGxvYWQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIFxuICAudXBsb2FkLXRleHQgcCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG4gIFxuICAudXBsb2FkLXRleHQgLnVwbG9hZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLyogUERGIENvbmZpZ3VyYXRpb24gU3R5bGVzICovXG4ucGRmLWNvbmZpZy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wZGYtY29uZmlnLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnRuLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ0bi10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5wZGYtY29uZmlnLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBhZ2Utc2l6ZS1kaXNwbGF5IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogJ01vbmFjbycsICdNZW5sbycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkdmFuY2VkLWNvbmZpZyB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4uY29uZmlnLWRpdmlkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTllY2VmO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmN1c3RvbS1zaXplLWNvbnRyb2xzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmN1c3RvbS1zaXplLWNvbnRyb2xzIGg0IHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNpemUtaW5wdXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE1cHg7XG59XG5cbi5tYXJnaW5zLWNvbnRyb2xzIGg0IHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1hcmdpbnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYnRuLXJlc2V0IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnRuLXJlc2V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5tYXJnaW5zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4vKiBEYXJrIG1vZGUgc3R5bGVzIGZvciBQREYgY29uZmlnICovXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5wZGYtY29uZmlnLWhlYWRlciBoMyB7XG4gIGNvbG9yOiAjZWNmMGYxO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5wYWdlLXNpemUtZGlzcGxheSB7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGJvcmRlci1jb2xvcjogIzU3NjU3NDtcbiAgY29sb3I6ICNiZGMzYzc7XG59XG5cbmJvZHlbZGF0YS10aGVtZT1cImRhcmtcIl0gLmN1c3RvbS1zaXplLWNvbnRyb2xzIGg0LFxuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAubWFyZ2lucy1jb250cm9scyBoNCB7XG4gIGNvbG9yOiAjZWNmMGYxO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5jb25maWctZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM1NzY1NzQ7XG59XG5cbi8qIFJlc3BvbnNpdmUgUERGIGNvbmZpZyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wZGYtY29uZmlnLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAubWFyZ2lucy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAuc2l6ZS1pbnB1dHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAucGRmLWNvbmZpZy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1hcmdpbnMtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tYXJnaW5zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogOHB4O1xuICB9XG4gIFxuICAuc2l6ZS1pbnB1dHMge1xuICAgIGdhcDogOHB4O1xuICB9XG59XG5cbi8qIEV4cG9ydCBGb3JtYXQgU3R5bGVzICovXG4uZXhwb3J0LWZvcm1hdC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uZXhwb3J0LWZvcm1hdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5leHBvcnQtZm9ybWF0LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4uZXhwb3J0LWZvcm1hdC1vcHRpb246aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG4gIGJhY2tncm91bmQ6ICNmMGYyZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmV4cG9ydC1mb3JtYXQtb3B0aW9uLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcbn1cblxuLmZvcm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb3JtYXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmV4cG9ydC1mb3JtYXQtb3B0aW9uLnNlbGVjdGVkIC5mb3JtYXQtbGFiZWwge1xuICBjb2xvcjogIzY2N2VlYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogRGlzcGxheSBTZXR0aW5ncyBTdHlsZXMgKi9cbi5kaXNwbGF5LXNldHRpbmdzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRpc3BsYXktc2V0dGluZ3MtaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5kaXNwbGF5LXNldHRpbmdzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmZvbnQtc2l6ZS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmZvbnQtc2l6ZS1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uZm9udC1zaXplLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xufVxuXG4uZm9udC1zaXplLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG59XG5cbi5mb250LXNpemUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5idG4tZm9udC1zaXplIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLWZvbnQtc2l6ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlci1jb2xvcjogI2FkYjViZDtcbn1cblxuLmJ0bi1mb250LXNpemU6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5mb250LXNpemUtZGlzcGxheSB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1mYW1pbHk6ICdNb25hY28nLCAnTWVubG8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbi5mb250LXByZXZpZXcge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4vKiBEYXJrIG1vZGUgc3R5bGVzIGZvciBuZXcgY29tcG9uZW50cyAqL1xuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAuZXhwb3J0LWZvcm1hdC1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzU3NjU3NDtcbn1cblxuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAuZXhwb3J0LWZvcm1hdC1vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBib3JkZXItY29sb3I6ICM1NzY1NzQ7XG4gIGNvbG9yOiAjZWNmMGYxO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5leHBvcnQtZm9ybWF0LW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcbn1cblxuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAuZXhwb3J0LWZvcm1hdC1vcHRpb24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMikgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjIpIDEwMCUpO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5mb3JtYXQtbGFiZWwge1xuICBjb2xvcjogI2JkYzNjNztcbn1cblxuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAuZXhwb3J0LWZvcm1hdC1vcHRpb24uc2VsZWN0ZWQgLmZvcm1hdC1sYWJlbCB7XG4gIGNvbG9yOiAjYThkMmZmO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5kaXNwbGF5LXNldHRpbmdzLWhlYWRlciBoMyB7XG4gIGNvbG9yOiAjZWNmMGYxO1xufVxuXG5ib2R5W2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5mb250LXNpemUtc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzU3NjU3NDtcbn1cblxuYm9keVtkYXRhLXRoZW1lPVwiZGFya1wiXSAuYnRuLWZvbnQtc2l6ZSB7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGJvcmRlci1jb2xvcjogIzU3NjU3NDtcbiAgY29sb3I6ICNiZGMzYzc7XG59XG5cbmJvZHlbZGF0YS10aGVtZT1cImRhcmtcIl0gLmJ0bi1mb250LXNpemU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG59XG5cbmJvZHlbZGF0YS10aGVtZT1cImRhcmtcIl0gLmZvbnQtc2l6ZS1kaXNwbGF5IHtcbiAgY29sb3I6ICNiZGMzYzc7XG59XG5cbmJvZHlbZGF0YS10aGVtZT1cImRhcmtcIl0gLmZvbnQtcHJldmlldyB7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGJvcmRlci1jb2xvcjogIzU3NjU3NDtcbiAgY29sb3I6ICNiZGMzYzc7XG59XG5cbi8qIFJlc3BvbnNpdmUgc3R5bGVzIGZvciBuZXcgY29tcG9uZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5leHBvcnQtZm9ybWF0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogOHB4O1xuICB9XG4gIFxuICAuZXhwb3J0LWZvcm1hdC1vcHRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgfVxuICBcbiAgLmRpc3BsYXktc2V0dGluZ3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG4gIFxuICAuZGlzcGxheS1zZXR0aW5ncy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZvbnQtc2l6ZS1idXR0b25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC8qIEVuc3VyZSBhbGwgZm9ybSBjb250cm9scyBhcmUgcHJvcGVybHkgc2l6ZWQgb24gbW9iaWxlICovXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICBcbiAgLyogQ2VudGVyIGFsbCBsYWJlbHMgYW5kIGNvbnRlbnQgb24gbW9iaWxlICovXG4gIC5mb3JtLWxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5leHBvcnQtZm9ybWF0LW9wdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICB9XG4gIFxuICAuZm9ybWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIFxuICAuZm9ybWF0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmZvbnQtc2l6ZS1idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICB9XG4gIFxuICAuYnRuLWZvbnQtc2l6ZSB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2210:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AnalyticsService {
  constructor() {}
  /**
   * Track page view
   */
  trackPageView(pageTitle, pagePath) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleAnalytics.measurementId, {
        page_title: pageTitle,
        page_path: pagePath
      });
    }
  }
  /**
   * Track custom events
   */
  trackEvent(eventName, parameters) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }
  /**
   * Track PDF generation
   */
  trackPDFGeneration(format, filename) {
    this.trackEvent('pdf_generation', {
      format: format,
      filename: filename,
      timestamp: new Date().toISOString()
    });
  }
  /**
   * Track file upload
   */
  trackFileUpload(fileType, fileSize) {
    this.trackEvent('file_upload', {
      file_type: fileType,
      file_size: fileSize,
      timestamp: new Date().toISOString()
    });
  }
  /**
   * Track export action
   */
  trackExport(format, filename) {
    this.trackEvent('document_export', {
      export_format: format,
      filename: filename,
      timestamp: new Date().toISOString()
    });
  }
  /**
   * Track theme change
   */
  trackThemeChange(theme) {
    this.trackEvent('theme_change', {
      theme: theme,
      timestamp: new Date().toISOString()
    });
  }
  /**
   * Track display settings change
   */
  trackDisplaySettingsChange(setting, value) {
    this.trackEvent('display_settings_change', {
      setting: setting,
      value: value,
      timestamp: new Date().toISOString()
    });
  }
  /**
   * Track user engagement (time spent, interactions)
   */
  trackUserEngagement(action, details) {
    this.trackEvent('user_engagement', {
      action: action,
      details: details,
      timestamp: new Date()
    });
  }
  static {
    this.ɵfac = function AnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyticsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 842:
/*!******************************************************!*\
  !*** ./src/app/services/display-settings.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplaySettingsService: () => (/* binding */ DisplaySettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class DisplaySettingsService {
  constructor() {
    this.SETTINGS_KEY = 'markdown-pdf-display-settings';
    // Available font families
    this.fontFamilies = [
    // Sans-serif fonts
    {
      name: 'Inter (Default)',
      value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      category: 'sans-serif'
    }, {
      name: 'Arial',
      value: 'Arial, sans-serif',
      category: 'sans-serif'
    }, {
      name: 'Helvetica',
      value: 'Helvetica, Arial, sans-serif',
      category: 'sans-serif'
    }, {
      name: 'Verdana',
      value: 'Verdana, Geneva, sans-serif',
      category: 'sans-serif'
    }, {
      name: 'Tahoma',
      value: 'Tahoma, Geneva, sans-serif',
      category: 'sans-serif'
    },
    // Serif fonts
    {
      name: 'Georgia',
      value: 'Georgia, "Times New Roman", serif',
      category: 'serif'
    }, {
      name: 'Times New Roman',
      value: '"Times New Roman", Times, serif',
      category: 'serif'
    }, {
      name: 'Book Antiqua',
      value: '"Book Antiqua", Palatino, serif',
      category: 'serif'
    }, {
      name: 'Garamond',
      value: 'Garamond, serif',
      category: 'serif'
    },
    // Monospace fonts
    {
      name: 'Monaco',
      value: 'Monaco, "Lucida Console", monospace',
      category: 'monospace'
    }, {
      name: 'Courier New',
      value: '"Courier New", Courier, monospace',
      category: 'monospace'
    }, {
      name: 'Consolas',
      value: 'Consolas, "Liberation Mono", monospace',
      category: 'monospace'
    }, {
      name: 'Source Code Pro',
      value: '"Source Code Pro", "Courier New", monospace',
      category: 'monospace'
    }];
    // Default settings
    this.defaultSettings = {
      fontFamily: this.fontFamilies[0],
      // Inter (Default)
      fontSize: 16
    };
    this.settingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.defaultSettings);
    this.settings$ = this.settingsSubject.asObservable();
    this.loadSettings();
  }
  /**
   * Load settings from localStorage
   */
  loadSettings() {
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) {
        const parsedSettings = JSON.parse(saved);
        // Ensure the font family exists in our list
        const fontFamily = this.fontFamilies.find(f => f.value === parsedSettings.fontFamily?.value) || this.defaultSettings.fontFamily;
        const settings = {
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
  saveSettings(settings) {
    try {
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn('Error saving display settings:', error);
    }
  }
  /**
   * Apply settings to the document
   */
  applySettings(settings) {
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
  setFontFamily(fontFamily) {
    const currentSettings = this.settingsSubject.value;
    const newSettings = {
      ...currentSettings,
      fontFamily
    };
    this.settingsSubject.next(newSettings);
    this.saveSettings(newSettings);
    this.applySettings(newSettings);
  }
  /**
   * Update font size
   */
  setFontSize(fontSize) {
    const validSize = this.validateFontSize(fontSize);
    if (!validSize) return;
    const currentSettings = this.settingsSubject.value;
    const newSettings = {
      ...currentSettings,
      fontSize: validSize
    };
    this.settingsSubject.next(newSettings);
    this.saveSettings(newSettings);
    this.applySettings(newSettings);
  }
  /**
   * Validate font size
   */
  validateFontSize(size) {
    if (typeof size !== 'number' || size < 10 || size > 24) {
      return null;
    }
    return Math.round(size);
  }
  /**
   * Reset to default settings
   */
  resetToDefaults() {
    this.settingsSubject.next(this.defaultSettings);
    this.saveSettings(this.defaultSettings);
    this.applySettings(this.defaultSettings);
  }
  /**
   * Get current settings
   */
  getCurrentSettings() {
    return this.settingsSubject.value;
  }
  /**
   * Get font families by category
   */
  getFontsByCategory(category) {
    return this.fontFamilies.filter(font => font.category === category);
  }
  static {
    this.ɵfac = function DisplaySettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisplaySettingsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DisplaySettingsService,
      factory: DisplaySettingsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8892:
/*!********************************************!*\
  !*** ./src/app/services/export.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportService: () => (/* binding */ ExportService)
/* harmony export */ });
/* harmony import */ var _Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! docx */ 6078);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ 5834);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class ExportService {
  constructor() {}
  /**
   * Export HTML with proper styling
   */
  exportHTML(htmlContent, filename, options) {
    var _this = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const styledHTML = _this.createStyledHTML(htmlContent, options);
      _this.downloadFile(styledHTML, filename, 'text/html');
    })();
  }
  /**
   * Export DOCX document
   */
  exportDOCX(htmlContent, filename, options) {
    var _this2 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const doc = new docx__WEBPACK_IMPORTED_MODULE_1__.Document({
          sections: [{
            properties: {},
            children: _this2.htmlToDocxElements(htmlContent, options)
          }]
        });
        const buffer = yield docx__WEBPACK_IMPORTED_MODULE_1__.Packer.toBuffer(doc);
        _this2.downloadFile(buffer, filename, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      } catch (error) {
        console.error('Error generating DOCX:', error);
        throw new Error('Failed to generate DOCX. Please try again.');
      }
    })();
  }
  /**
   * Export EPUB e-book
   */
  exportEPUB(htmlContent, filename, options) {
    var _this3 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const zip = new jszip__WEBPACK_IMPORTED_MODULE_2__();
        // Create EPUB structure
        zip.file('mimetype', 'application/epub+zip');
        // META-INF folder
        const metaInf = zip.folder('META-INF');
        metaInf?.file('container.xml', _this3.createContainerXML());
        // OEBPS folder
        const oebps = zip.folder('OEBPS');
        oebps?.file('content.opf', _this3.createContentOPF(options));
        oebps?.file('toc.ncx', _this3.createTocNCX(options));
        oebps?.file('chapter1.xhtml', _this3.createChapterXHTML(htmlContent, options));
        oebps?.file('styles.css', _this3.createEPUBStyles(options));
        const blob = yield zip.generateAsync({
          type: 'blob'
        });
        _this3.downloadFile(blob, filename, 'application/epub+zip');
      } catch (error) {
        console.error('Error generating EPUB:', error);
        throw new Error('Failed to generate EPUB. Please try again.');
      }
    })();
  }
  /**
   * Create styled HTML document
   */
  createStyledHTML(content, options) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${options.title}</title>
    <style>
        body {
            font-family: ${options.fontFamily};
            font-size: ${options.fontSize}px;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
            background: white;
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: bold;
        }
        h1 { font-size: 2em; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px; }
        h2 { font-size: 1.5em; color: #34495e; }
        h3 { font-size: 1.3em; color: #34495e; }
        p { margin-bottom: 16px; }
        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 16px 0;
        }
        blockquote {
            border-left: 4px solid #3498db;
            padding-left: 16px;
            margin: 16px 0;
            color: #555;
            font-style: italic;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        .katex { font-size: 1.1em; }
        .katex-display { margin: 20px 0; text-align: center; }
    </style>
</head>
<body>
    <h1>${options.title}</h1>
    ${content}
</body>
</html>`;
  }
  /**
   * Convert HTML to DOCX elements (simplified)
   */
  htmlToDocxElements(htmlContent, options) {
    const elements = [];
    // Add title
    elements.push(new docx__WEBPACK_IMPORTED_MODULE_1__.Paragraph({
      children: [new docx__WEBPACK_IMPORTED_MODULE_1__.TextRun({
        text: options.title,
        bold: true,
        size: Math.round(options.fontSize * 1.5)
      })],
      heading: docx__WEBPACK_IMPORTED_MODULE_1__.HeadingLevel.TITLE,
      alignment: docx__WEBPACK_IMPORTED_MODULE_1__.AlignmentType.CENTER
    }));
    // Simple HTML to DOCX conversion (basic implementation)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const paragraphs = textContent.split('\n\n').filter(p => p.trim());
    paragraphs.forEach(paragraph => {
      if (paragraph.trim()) {
        elements.push(new docx__WEBPACK_IMPORTED_MODULE_1__.Paragraph({
          children: [new docx__WEBPACK_IMPORTED_MODULE_1__.TextRun({
            text: paragraph.trim(),
            size: options.fontSize
          })],
          spacing: {
            after: 200
          }
        }));
      }
    });
    return elements;
  }
  /**
   * Create EPUB container.xml
   */
  createContainerXML() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
    </rootfiles>
</container>`;
  }
  /**
   * Create EPUB content.opf
   */
  createContentOPF(options) {
    const author = options.author || 'Unknown Author';
    return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="2.0">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
        <dc:title>${options.title}</dc:title>
        <dc:creator opf:role="aut">${author}</dc:creator>
        <dc:language>en</dc:language>
        <dc:identifier id="bookid">urn:uuid:${this.generateUUID()}</dc:identifier>
        <meta name="cover" content="cover"/>
    </metadata>
    <manifest>
        <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
        <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
        <item id="css" href="styles.css" media-type="text/css"/>
    </manifest>
    <spine toc="ncx">
        <itemref idref="chapter1"/>
    </spine>
</package>`;
  }
  /**
   * Create EPUB toc.ncx
   */
  createTocNCX(options) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
    <head>
        <meta name="dtb:uid" content="urn:uuid:${this.generateUUID()}"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle>
        <text>${options.title}</text>
    </docTitle>
    <navMap>
        <navPoint id="navpoint-1" playOrder="1">
            <navLabel>
                <text>Chapter 1</text>
            </navLabel>
            <content src="chapter1.xhtml"/>
        </navPoint>
    </navMap>
</ncx>`;
  }
  /**
   * Create EPUB chapter XHTML
   */
  createChapterXHTML(content, options) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>${options.title}</title>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
    <h1>${options.title}</h1>
    ${content}
</body>
</html>`;
  }
  /**
   * Create EPUB styles
   */
  createEPUBStyles(options) {
    return `body {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize}px;
    line-height: 1.6;
    margin: 20px;
    color: #333;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: bold;
}

h1 { font-size: 2em; color: #2c3e50; }
h2 { font-size: 1.5em; color: #34495e; }
h3 { font-size: 1.3em; color: #34495e; }

p { margin-bottom: 16px; }

code {
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}

pre {
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 6px;
    overflow-x: auto;
    margin: 16px 0;
}

blockquote {
    border-left: 4px solid #3498db;
    padding-left: 16px;
    margin: 16px 0;
    color: #555;
    font-style: italic;
}`;
  }
  /**
   * Generate UUID for EPUB
   */
  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
  /**
   * Download file helper
   */
  downloadFile(content, filename, mimeType) {
    let blob;
    if (content instanceof Blob) {
      blob = content;
    } else if (content instanceof ArrayBuffer) {
      blob = new Blob([content], {
        type: mimeType
      });
    } else {
      blob = new Blob([content], {
        type: mimeType
      });
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  static {
    this.ɵfac = function ExportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ExportService,
      factory: ExportService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4704:
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileService: () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FileService {
  constructor() {}
  /**
   * Read file content as text
   */
  readFileAsText(file) {
    return new Promise((resolve, reject) => {
      if (!this.isValidMarkdownFile(file)) {
        reject(new Error('Please select a valid markdown file (.md, .markdown, or .txt)'));
        return;
      }
      const reader = new FileReader();
      reader.onload = event => {
        const content = event.target?.result;
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
  isValidMarkdownFile(file) {
    const validExtensions = ['.md', '.markdown', '.txt'];
    const fileName = file.name.toLowerCase();
    return validExtensions.some(ext => fileName.endsWith(ext)) || file.type === 'text/markdown' || file.type === 'text/plain';
  }
  /**
   * Format file size for display
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  static {
    this.ɵfac = function FileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FileService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FileService,
      factory: FileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3724:
/*!*****************************************!*\
  !*** ./src/app/services/pdf.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MARGINS: () => (/* binding */ DEFAULT_MARGINS),
/* harmony export */   PDF_FORMATS: () => (/* binding */ PDF_FORMATS),
/* harmony export */   PdfService: () => (/* binding */ PdfService)
/* harmony export */ });
/* harmony import */ var _Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ 997);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ 822);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _syntax_math_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syntax-math.service */ 2150);
/* harmony import */ var _display_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-settings.service */ 842);







const PDF_FORMATS = {
  A4: {
    name: 'A4',
    width: 210,
    height: 297
  },
  LETTER: {
    name: 'Letter',
    width: 216,
    height: 279
  },
  LEGAL: {
    name: 'Legal',
    width: 216,
    height: 356
  },
  CUSTOM: {
    name: 'Custom',
    width: 210,
    height: 297
  }
};
const DEFAULT_MARGINS = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
};
class PdfService {
  constructor(syntaxMathService, displaySettingsService) {
    this.syntaxMathService = syntaxMathService;
    this.displaySettingsService = displaySettingsService;
    this.configureMarked();
  }
  configureMarked() {
    // Configure marked options (syntax highlighting handled in post-processing)
    marked__WEBPACK_IMPORTED_MODULE_1__.marked.setOptions({
      breaks: true,
      gfm: true
    });
  }
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  /**
   * Convert markdown text to HTML with syntax highlighting and math support
   */
  markdownToHtml(markdown) {
    var _this = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // First convert markdown to HTML
      let html = yield (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(markdown);
      // Create a temporary element to process the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      // Apply syntax highlighting and math rendering
      if (_this.syntaxMathService.isReady()) {
        _this.syntaxMathService.processContent(tempDiv);
        html = tempDiv.innerHTML;
      }
      return html;
    })();
  }
  /**
   * Generate PDF from HTML content with configuration
   */
  generatePDF(_x) {
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (htmlContent, filename = 'document.pdf', config) {
      try {
        // Use default config if not provided
        const pdfConfig = config || {
          format: PDF_FORMATS['A4'],
          orientation: 'portrait',
          margins: DEFAULT_MARGINS
        };
        // Calculate dimensions based on orientation
        const pageWidth = pdfConfig.orientation === 'portrait' ? pdfConfig.format.width : pdfConfig.format.height;
        const pageHeight = pdfConfig.orientation === 'portrait' ? pdfConfig.format.height : pdfConfig.format.width;
        // Calculate content area
        const contentWidth = pageWidth - pdfConfig.margins.left - pdfConfig.margins.right;
        const contentHeight = pageHeight - pdfConfig.margins.top - pdfConfig.margins.bottom;
        // Create a temporary container for the HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlContent;
        tempContainer.style.width = `${contentWidth}mm`;
        tempContainer.style.padding = `${pdfConfig.margins.top}mm ${pdfConfig.margins.right}mm ${pdfConfig.margins.bottom}mm ${pdfConfig.margins.left}mm`;
        tempContainer.style.backgroundColor = 'white';
        tempContainer.style.fontFamily = 'Arial, sans-serif';
        tempContainer.style.fontSize = '12px';
        tempContainer.style.lineHeight = '1.6';
        tempContainer.style.color = '#333';
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '0';
        tempContainer.style.boxSizing = 'border-box';
        // Add CSS styles for PDF formatting
        const style = document.createElement('style');
        style.textContent = `
        h1, h2, h3, h4, h5, h6 {
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        h1 { font-size: 24px; color: #2c3e50; }
        h2 { font-size: 20px; color: #34495e; }
        h3 { font-size: 18px; color: #34495e; }
        h4 { font-size: 16px; color: #34495e; }
        h5 { font-size: 14px; color: #34495e; }
        h6 { font-size: 12px; color: #34495e; }
        p { margin-bottom: 12px; }
        code {
          background-color: #f4f4f4;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
        }
        pre {
          background-color: #f4f4f4;
          padding: 12px;
          border-radius: 5px;
          overflow-x: auto;
          margin: 12px 0;
        }
        blockquote {
          border-left: 4px solid #ddd;
          padding-left: 12px;
          margin: 12px 0;
          color: #666;
          font-style: italic;
        }
        ul, ol {
          padding-left: 20px;
          margin-bottom: 12px;
        }
        li {
          margin-bottom: 4px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin: 12px 0;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
      `;
        tempContainer.appendChild(style);
        // Add to document temporarily
        document.body.appendChild(tempContainer);
        // Convert HTML to canvas
        const canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(tempContainer, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });
        // Remove temporary container
        document.body.removeChild(tempContainer);
        // Create PDF with custom configuration
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]({
          orientation: pdfConfig.orientation,
          unit: 'mm',
          format: [pageWidth, pageHeight]
        });
        const imgWidth = pageWidth;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        // Add additional pages if needed
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        // Save the PDF
        pdf.save(filename);
      } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. Please try again.');
      }
    }).apply(this, arguments);
  }
  /**
   * Generate PDF directly from markdown with configuration
   */
  generatePDFFromMarkdown(_x2) {
    var _this2 = this;
    return (0,_Users_natalie_millman_Dev_Project_Markdown_markdown_to_pdf_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (markdown, filename = 'document.pdf', config) {
      const html = yield _this2.markdownToHtml(markdown);
      yield _this2.generatePDF(html, filename, config);
    }).apply(this, arguments);
  }
  static {
    this.ɵfac = function PdfService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PdfService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_syntax_math_service__WEBPACK_IMPORTED_MODULE_4__.SyntaxMathService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_display_settings_service__WEBPACK_IMPORTED_MODULE_5__.DisplaySettingsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: PdfService,
      factory: PdfService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4640:
/*!***************************************************!*\
  !*** ./src/app/services/print-preview.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintPreviewService: () => (/* binding */ PrintPreviewService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PrintPreviewService {
  constructor() {}
  /**
   * Open print preview in a new window
   */
  openPrintPreview(htmlContent, title = 'Markdown Document') {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
      alert('Please allow popups to use print preview feature.');
      return;
    }
    const printDocument = this.generatePrintDocument(htmlContent, title);
    printWindow.document.write(printDocument);
    printWindow.document.close();
    // Wait for content to load, then focus the window
    printWindow.onload = () => {
      printWindow.focus();
    };
  }
  /**
   * Generate a complete HTML document for printing
   */
  generatePrintDocument(content, title) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Print Preview</title>
    <style>
        /* Print-optimized styles */
        @page {
            margin: 2cm;
            size: A4;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 21cm;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: bold;
            page-break-after: avoid;
        }
        
        h1 {
            font-size: 28px;
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 24px;
            color: #34495e;
            border-bottom: 2px solid #bdc3c7;
            padding-bottom: 8px;
        }
        
        h3 {
            font-size: 20px;
            color: #34495e;
        }
        
        h4 {
            font-size: 18px;
            color: #34495e;
        }
        
        h5 {
            font-size: 16px;
            color: #34495e;
        }
        
        h6 {
            font-size: 14px;
            color: #34495e;
        }
        
        p {
            margin-bottom: 16px;
            text-align: justify;
            orphans: 2;
            widows: 2;
        }
        
        code {
            background-color: #f8f8f8;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', 'Monaco', monospace;
            font-size: 0.9em;
            border: 1px solid #e1e1e8;
        }
        
        pre {
            background-color: #f8f8f8;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 16px 0;
            border: 1px solid #e1e1e8;
            page-break-inside: avoid;
        }
        
        pre code {
            background: none;
            padding: 0;
            border: none;
            font-size: 0.85em;
        }
        
        blockquote {
            border-left: 4px solid #3498db;
            padding-left: 16px;
            margin: 16px 0;
            color: #555;
            font-style: italic;
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 0 6px 6px 0;
        }
        
        ul, ol {
            padding-left: 24px;
            margin-bottom: 16px;
        }
        
        li {
            margin-bottom: 6px;
            page-break-inside: avoid;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
            page-break-inside: avoid;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
        }
        
        hr {
            border: none;
            border-top: 2px solid #bdc3c7;
            margin: 24px 0;
            page-break-after: avoid;
        }
        
        a {
            color: #3498db;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        /* Print-specific styles */
        @media print {
            body {
                padding: 0;
            }
            
            .no-print {
                display: none !important;
            }
            
            a[href]:after {
                content: " (" attr(href) ")";
                font-size: 0.8em;
                color: #666;
            }
            
            a[href^="#"]:after {
                content: "";
            }
        }
        
        /* Print controls */
        .print-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border: 1px solid #ddd;
            z-index: 1000;
        }
        
        .print-controls button {
            margin: 0 5px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .print-btn {
            background: #3498db;
            color: white;
        }
        
        .print-btn:hover {
            background: #2980b9;
        }
        
        .close-btn {
            background: #95a5a6;
            color: white;
        }
        
        .close-btn:hover {
            background: #7f8c8d;
        }
        
        @media print {
            .print-controls {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="print-controls no-print">
        <button class="print-btn" onclick="window.print()">🖨️ Print</button>
        <button class="close-btn" onclick="window.close()">❌ Close</button>
    </div>
    
    <div class="content">
        ${content}
    </div>
    
    <script>
        // Auto-focus for better user experience
        window.focus();
        
        // Handle keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'p':
                        e.preventDefault();
                        window.print();
                        break;
                    case 'w':
                        e.preventDefault();
                        window.close();
                        break;
                }
            }
            if (e.key === 'Escape') {
                window.close();
            }
        });
    </script>
</body>
</html>`;
  }
  static {
    this.ɵfac = function PrintPreviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrintPreviewService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PrintPreviewService,
      factory: PrintPreviewService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2150:
/*!*************************************************!*\
  !*** ./src/app/services/syntax-math.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyntaxMathService: () => (/* binding */ SyntaxMathService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SyntaxMathService {
  constructor() {}
  /**
   * Apply syntax highlighting to code blocks
   */
  highlightCodeBlocks(element) {
    if (typeof Prism !== 'undefined') {
      // Find all code blocks
      const codeBlocks = element.querySelectorAll('pre code');
      codeBlocks.forEach(block => {
        // Auto-detect language from class name
        const className = block.className;
        const languageMatch = className.match(/language-(\w+)/);
        if (languageMatch) {
          const language = languageMatch[1];
          // Ensure the language is loaded
          if (Prism.languages[language]) {
            Prism.highlightElement(block);
          } else {
            // Fallback to plain text highlighting
            block.classList.add('language-plaintext');
            Prism.highlightElement(block);
          }
        } else {
          // Add generic highlighting for code without specified language
          block.classList.add('language-plaintext');
          Prism.highlightElement(block);
        }
      });
    }
  }
  /**
   * Render math expressions using KaTeX
   */
  renderMath(element) {
    if (typeof katex !== 'undefined') {
      // Render inline math ($ ... $)
      this.renderInlineMath(element);
      // Render display math ($$ ... $$)
      this.renderDisplayMath(element);
    }
  }
  /**
   * Render inline math expressions
   */
  renderInlineMath(element) {
    const mathRegex = /\$([^$\n]+?)\$/g;
    this.processTextNodes(element, mathRegex, (match, mathContent) => {
      try {
        const rendered = katex.renderToString(mathContent.trim(), {
          throwOnError: false,
          displayMode: false
        });
        return `<span class="katex-inline">${rendered}</span>`;
      } catch (error) {
        console.warn('KaTeX inline rendering error:', error);
        return `<code class="math-error">$${mathContent}$</code>`;
      }
    });
  }
  /**
   * Render display math expressions
   */
  renderDisplayMath(element) {
    const mathRegex = /\$\$([^$]+?)\$\$/g;
    this.processTextNodes(element, mathRegex, (match, mathContent) => {
      try {
        const rendered = katex.renderToString(mathContent.trim(), {
          throwOnError: false,
          displayMode: true
        });
        return `<div class="katex-display">${rendered}</div>`;
      } catch (error) {
        console.warn('KaTeX display rendering error:', error);
        return `<div class="math-error">$$${mathContent}$$</div>`;
      }
    });
  }
  /**
   * Process text nodes and replace math expressions
   */
  processTextNodes(element, regex, replacer) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: node => {
        // Skip text nodes inside code blocks and math elements
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'CODE' || parent.tagName === 'PRE' || parent.classList.contains('katex') || parent.classList.contains('katex-display') || parent.classList.contains('katex-inline'))) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    textNodes.forEach(textNode => {
      const text = textNode.textContent || '';
      if (regex.test(text)) {
        const newHTML = text.replace(regex, replacer);
        if (newHTML !== text) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newHTML;
          // Replace the text node with the rendered content
          const parent = textNode.parentNode;
          if (parent) {
            while (tempDiv.firstChild) {
              parent.insertBefore(tempDiv.firstChild, textNode);
            }
            parent.removeChild(textNode);
          }
        }
      }
    });
  }
  /**
   * Apply both syntax highlighting and math rendering
   */
  processContent(element) {
    // First render math (before syntax highlighting to avoid conflicts)
    this.renderMath(element);
    // Then apply syntax highlighting
    this.highlightCodeBlocks(element);
  }
  /**
   * Get supported programming languages for syntax highlighting
   */
  getSupportedLanguages() {
    return ['javascript', 'typescript', 'python', 'java', 'csharp', 'cpp', 'c', 'html', 'css', 'scss', 'json', 'xml', 'yaml', 'markdown', 'bash', 'shell', 'sql', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'dart', 'r', 'matlab', 'latex', 'dockerfile'];
  }
  /**
   * Check if libraries are loaded
   */
  isReady() {
    return typeof Prism !== 'undefined' && typeof katex !== 'undefined';
  }
  static {
    this.ɵfac = function SyntaxMathService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SyntaxMathService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SyntaxMathService,
      factory: SyntaxMathService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 487:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ThemeService {
  constructor() {
    this.THEME_KEY = 'markdown-pdf-theme';
    this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('light');
    this.theme$ = this.themeSubject.asObservable();
    this.initializeTheme();
  }
  initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.setTheme(initialTheme);
  }
  setTheme(theme) {
    this.themeSubject.next(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    document.body.setAttribute('data-theme', theme);
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);
  }
  toggleTheme() {
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  getCurrentTheme() {
    return this.themeSubject.value;
  }
  isDarkMode() {
    return this.themeSubject.value === 'dark';
  }
  updateMetaThemeColor(theme) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = theme === 'dark' ? '#1a1a1a' : '#667eea';
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = color;
      document.head.appendChild(meta);
    }
  }
  static {
    this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  googleAnalytics: {
    measurementId: 'G-N4THX35J6Z'
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map