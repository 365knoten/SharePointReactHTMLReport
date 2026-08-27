/// <reference types="vite/client" />

declare module 'virtual:sharepoint-data' {
  import { ReportData } from './src/ReportData'
  const data: ReportData
  export default data
}
