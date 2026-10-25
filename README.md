# Markdown to PDF Converter

> **The hosted version is retired.** It was served from AWS Amplify until 2026-10-25 ([issue #14](https://github.com/natalieMillman/markdown-to-pdf/issues/14), plan in [SUNSET.md](SUNSET.md)). Conversion and export run entirely in the browser, so a local copy does everything the hosted one did: see [Getting Started](#getting-started).

A simple and elegant Angular 20 web application that converts markdown documents to PDF format with real-time preview.

## Features

- 📝 **Real-time Preview**: See your markdown rendered as you type
- 📄 **Advanced PDF Generation**: Convert markdown to beautifully formatted PDF documents
- 📤 **Multiple Export Formats**: Export to HTML, DOCX (Word), and EPUB (e-book) formats
- 🎨 **Syntax Highlighting**: Beautiful code highlighting for 25+ programming languages
- 🧮 **Math Support**: LaTeX math rendering with KaTeX for academic and technical documents
- 🔤 **Font Customization**: Choose from serif, sans-serif, and monospace font families
- 📏 **Font Size Control**: Adjustable font size (10-24px) for optimal readability
- 📐 **Multiple PDF Formats**: Support for A4, Letter, Legal, and custom page sizes
- 🔄 **Page Orientation**: Portrait and landscape orientation options
- 📏 **Margin Controls**: Adjustable page margins for perfect formatting
- 📁 **File Upload**: Upload markdown files via drag-and-drop or file picker
- 🖨️ **Print Preview**: Preview documents in print-optimized format before generating PDF
- 🌙 **Dark Mode**: Toggle between light and dark themes with system preference detection
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds
- 📱 **Mobile Friendly**: Works on desktop, tablet, and mobile devices
- 🚀 **Fast & Lightweight**: Built with Angular 20 standalone components
- 💾 **Custom Filenames**: Choose your own PDF filename
- 📋 **Sample Content**: Load sample markdown to get started quickly

## Technologies Used

- **Angular 20**: Latest version with standalone components
- **marked**: Markdown parser and compiler
- **Prism.js**: Syntax highlighting for code blocks
- **KaTeX**: Fast math typesetting for the web
- **jsPDF**: PDF generation library
- **docx**: Microsoft Word document generation
- **JSZip**: EPUB and archive file creation
- **html2canvas**: HTML to canvas conversion for PDF rendering
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js 22.22.3 or a later 22.x, 24.15.0 or a later 24.x, or 26 and up (what Angular 22 requires)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/natalieMillman/markdown-to-pdf.git
   cd markdown-to-pdf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## How to Use

1. **Toggle Theme**: Use the moon/sun button in the header to switch between light and dark modes
2. **Upload File** (Optional): Drag and drop a markdown file or click to browse and select
3. **Customize Display Settings**:
   - Choose font family (serif, sans-serif, or monospace)
   - Adjust font size (10-24px) with slider or +/- buttons
   - Preview changes in real-time
4. **Configure PDF Settings**: 
   - Choose page format (A4, Letter, Legal, or Custom)
   - Select orientation (Portrait or Landscape)
   - Click "Show Advanced" to adjust margins and custom page sizes
5. **Select Export Format**: Choose from PDF, HTML, DOCX, or EPUB
6. **Enter Content**: Type or paste your markdown content in the left panel
7. **Live Preview**: Watch the real-time preview update in the right panel
8. **Print Preview**: Click "Print Preview" to see how your document will look when printed
9. **Set Filename**: Enter your desired filename (auto-generated from uploaded files)
10. **Export Document**: Click the export button to download in your chosen format
11. **Load Sample**: Use the "Load Sample" button to see example markdown content
12. **Clear Content**: Use the "Clear" button to start fresh

## Supported Markdown Features

- Headers (H1-H6)
- **Bold** and *italic* text
- `Inline code` and syntax-highlighted code blocks
- Mathematical expressions (inline: `$x^2$` and display: `$$\int f(x)dx$$`)
- Lists (ordered and unordered)
- Links and images
- Blockquotes
- Tables
- Horizontal rules
- Task lists (checkboxes)

### Supported Programming Languages

JavaScript, TypeScript, Python, Java, C#, C++, C, HTML, CSS, SCSS, JSON, XML, YAML, Markdown, Bash, Shell, SQL, PHP, Ruby, Go, Rust, Swift, Kotlin, Dart, R, MATLAB, LaTeX, Dockerfile, and more.

### Mathematical Expressions

- **Inline Math**: Use `$...$` for inline expressions like $E = mc^2$
- **Display Math**: Use `$$...$$` for centered equations like $$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$
- **Matrices, Fractions, Integrals**: Full LaTeX math syntax support
- **Error Handling**: Invalid expressions display gracefully with error indicators

## Project Structure

```
src/
├── app/
│   ├── services/
│   │   ├── pdf.service.ts              # PDF generation service
│   │   ├── export.service.ts           # Multi-format export (HTML, DOCX, EPUB)
│   │   ├── file.service.ts             # File upload and reading service
│   │   ├── theme.service.ts            # Dark/light theme management
│   │   ├── display-settings.service.ts # Font and display customization
│   │   ├── print-preview.service.ts    # Print preview functionality
│   │   └── syntax-math.service.ts      # Syntax highlighting and math rendering
│   ├── app.component.ts                # Main app component
│   ├── app.component.html              # App template
│   └── app.component.css               # App styles
├── assets/                         # Static assets
├── styles.css                      # Global styles
├── index.html                      # Main HTML file
└── main.ts                         # App bootstrap
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Angular](https://angular.io/) - The web framework
- [marked](https://marked.js.org/) - Markdown parser
- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation
- [html2canvas](https://html2canvas.hertzen.com/) - HTML to canvas conversion
