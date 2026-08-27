# SharePoint HTML Report

Vite + React Projekt für die Erstellung von **Self-Contained SharePoint HTML-Reports**.
Alle CSS und JavaScript werden inline in einer einzigen HTML-Datei gebündelt.

## Quick Start

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (öffnet automatisch im Browser)
npm run dev
```

Der Dev-Server läuft auf `http://localhost:5173`

## Build für SharePoint /_html

```bash
npm run build
```

**Resultat:** Eine einzelne `dist/index.html` mit inlinedem CSS und JavaScript – bereit für SharePoint /_html Upload!

## Struktur

```
src/
├── main.tsx       # Entry Point
├── App.tsx        # Haupt-React-Komponente
└── index.css      # Globale Styles
scripts/
└── build-inline.js # Post-Build: inline CSS/JS
```

## Verwendung

1. **App.tsx bearbeiten** – Passe die `ReportData` Struktur und Komponente an
2. **Daten integrieren** – Importiere SharePoint-Daten oder APIs
3. **Styles anpassen** – Bearbeite `index.css`
4. **Bauen** – `npm run build` erstellt die finale Single-File HTML

## Features

- ⚡ Vite für schnelle Entwicklung
- ⚛️ React 18
- 📱 Responsive Design  
- 🎨 Modernes Styling mit CSS Grid
- 🔧 TypeScript Support
- 📦 **Single-File HTML Output** – alle CSS/JS inlined
- 🚀 SharePoint /_html ready

## Deployment zu SharePoint

Nach `npm run build`:
1. Öffne `dist/index.html` im Browser
2. Kopiere den gesamten HTML-Code
3. Füge ihn als HTML-Report in SharePoint /_html ein
4. Fertig! Der Report lädt ohne externe Dependencies.
