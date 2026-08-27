import { ReportData } from './ReportData';


export interface AppProps {
  reportData: ReportData;
}

export default function App(params: AppProps) {
  const { reportData } = params;

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
