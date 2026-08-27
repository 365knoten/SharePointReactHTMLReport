import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import defaultReportData from 'virtual:sharepoint-data'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App reportData={defaultReportData} />
  </React.StrictMode>,
)
