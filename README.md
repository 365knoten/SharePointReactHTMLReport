# SharePoint OneUp Report – Demo-Projekt

Dieses Repository ist ein **Demo-Projekt / Projektstarter** für einen React-basierten **SharePoint OneUp Report**.

Man kann hier in React einen Report erstellen, der dann als eine einzelne HTML-Datei erzeugt wird. Diese Datei kann anschließend in SharePoint als OneUp Report ausgeführt werden – alle CSS und JavaScript werden dabei inline in die HTML-Datei gebündelt, sodass keine externen Abhängigkeiten benötigt werden.

## Quick Start

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (öffnet automatisch im Browser)
npm run dev
```

Der Dev-Server läuft auf `http://localhost:5173`

## Build & Deployment als SharePoint OneUp Report

1. Report-Inhalt in `src/App.tsx` (und ggf. `src/index.css`) anpassen.
2. Build ausführen:

   ```bash
   npm run build
   ```

   **Resultat:** Eine einzelne `dist/index.html` mit inlinedem CSS und JavaScript – bereit für den SharePoint-Upload!

3. Die resultierende `index.html` aus dem `dist`-Ordner in eine beliebige Bibliothek in SharePoint hochladen.
4. Die hochgeladene Datei in SharePoint öffnen – der Report läuft als OneUp Report direkt im Browser, ohne weitere externe Abhängigkeiten.

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
- 🚀 SharePoint OneUp Report ready
