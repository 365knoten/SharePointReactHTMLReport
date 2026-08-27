import { useState } from 'react'

interface ReportData {
  title: string
  description: string
  sections: Array<{
    id: string
    heading: string
    content: string
  }>
}

export default function App() {
  const [reportData] = useState<ReportData>({
    title: 'SharePoint HTML Report',
    description: 'Erstelle einen HTML-Report basierend auf SharePoint-Daten',
    sections: [
      {
        id: 'section-1',
        heading: 'Überblick',
        content: 'Dies ist ein Beispiel-Report. Ersetze diesen Inhalt mit deinen echten Daten.',
      },
      {
        id: 'section-2',
        heading: 'Daten',
        content: 'Hier können deine SharePoint-Daten angezeigt werden.',
      },
      {
        id: 'section-3',
        heading: 'Zusammenfassung',
        content: 'Füge hier eine Zusammenfassung deiner Daten ein.',
      },
    ],
  })

  return (
    <div className="container">
      <header className="header">
        <h1>{reportData.title}</h1>
        <p className="subtitle">{reportData.description}</p>
      </header>

      <main className="main">
        {reportData.sections.map((section) => (
          <section key={section.id} className="section">
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>© 2026 SharePoint HTML Report - Erstellt mit React & Vite</p>
      </footer>
    </div>
  )
}
