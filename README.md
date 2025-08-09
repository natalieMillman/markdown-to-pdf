# Markdown to PDF Converter

A simple and elegant Angular 20 web application that converts markdown documents to PDF format with real-time preview.

## Features

- 📝 **Real-time Preview**: See your markdown rendered as you type
- 📄 **Advanced PDF Generation**: Convert markdown to beautifully formatted PDF documents
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
- **jsPDF**: PDF generation library
- **html2canvas**: HTML to canvas conversion for PDF rendering
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
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
3. **Configure PDF Settings**: 
   - Choose page format (A4, Letter, Legal, or Custom)
   - Select orientation (Portrait or Landscape)
   - Click "Show Advanced" to adjust margins and custom page sizes
4. **Enter Content**: Type or paste your markdown content in the left panel
5. **Live Preview**: Watch the real-time preview update in the right panel
6. **Print Preview**: Click "Print Preview" to see how your document will look when printed
7. **Set Filename**: Enter your desired PDF filename (auto-generated from uploaded files)
8. **Generate PDF**: Click the "Generate PDF" button to download your document with custom formatting
9. **Load Sample**: Use the "Load Sample" button to see example markdown content
10. **Clear Content**: Use the "Clear" button to start fresh

## Supported Markdown Features

- Headers (H1-H6)
- **Bold** and *italic* text
- `Inline code` and code blocks
- Lists (ordered and unordered)
- Links and images
- Blockquotes
- Tables
- Horizontal rules
- Task lists (checkboxes)

## Project Structure

```
src/
├── app/
│   ├── services/
│   │   ├── pdf.service.ts              # PDF generation service
│   │   ├── file.service.ts             # File upload and reading service
│   │   ├── theme.service.ts            # Dark/light theme management
│   │   └── print-preview.service.ts    # Print preview functionality
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
