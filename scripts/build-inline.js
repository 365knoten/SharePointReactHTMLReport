import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '../dist')
const indexHtml = path.join(distDir, 'index.html')

if (!fs.existsSync(indexHtml)) {
  console.error('❌ dist/index.html nicht gefunden. Führe erst "npm run build" aus.')
  process.exit(1)
}

let html = fs.readFileSync(indexHtml, 'utf-8')

// CSS inlinen
html = html.replace(/<link rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g, (match, href) => {
  const cssPath = path.join(distDir, href)
  if (fs.existsSync(cssPath)) {
    const css = fs.readFileSync(cssPath, 'utf-8')
    console.log(`✅ CSS inlined: ${href}`)
    return `<style>${css}</style>`
  }
  console.warn(`⚠️ CSS nicht gefunden: ${cssPath}`)
  return match
})

// JavaScript sammeln (nicht direkt ersetzen)
const scripts = []
html = html.replace(/<script[^>]*src="([^"]*)"[^>]*>\s*<\/script>/g, (match, src) => {
  const jsPath = path.join(distDir, src)
  if (fs.existsSync(jsPath)) {
    const js = fs.readFileSync(jsPath, 'utf-8')
    console.log(`✅ JS inlined: ${src}`)
    scripts.push(js)
    return '' // Script-Tag entfernen
  }
  console.warn(`⚠️ JS nicht gefunden: ${jsPath}`)
  return match
})

// Scripts am Ende des Body einfügen (VOR </body>)
const scriptTags = scripts.map(js => `<script>${js}</script>`).join('\n')
html = html.replace('</body>', `${scriptTags}\n</body>`)

// Finale HTML speichern
fs.writeFileSync(indexHtml, html, 'utf-8')
console.log(`\n✨ Fertig! Single-File HTML erstellt: dist/index.html`)
