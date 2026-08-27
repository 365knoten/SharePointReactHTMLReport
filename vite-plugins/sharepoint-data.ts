import { Plugin, ResolvedConfig } from 'vite'
import path from 'path';
import fs from 'fs';

const DATA_FOLDER = "SP-DATA"
const DATA_FILE_NAME = "sp-data.json"

/*
   function load(id, options) {
      if (id === 'virtual:sharepoint-data') {
        const isDev = this.environment?.command === 'serve' || this.meta?.watchFiles

        if (isDev) {
          // In Development: importiere lokale ReportData
          return `
            import defaultReportData from './ReportData'
            export default defaultReportData
          `
        } else {
          // In Production: lade aus window.__LD_RESULTS__
          return `
            export default (typeof window !== 'undefined' && window.__LD_RESULTS__)
              ? window.__LD_RESULTS__
              : {}
          `
        }
      }
    };
*/



export function sharepointDataPlugin(): Plugin[] {
  let config: ResolvedConfig;
  return [
    {
      name: 'sharepoint-data-plugin:serve',
      apply: 'serve',
      resolveId(id) {
        if (id === 'virtual:sharepoint-data') {
          return id
        }
      },
      async configResolved(_config) {
        config = _config;
      },
      load(id, options) {
        console.log("Importing from current path")
        if (id === 'virtual:sharepoint-data') {
          const filePath = path.resolve(config.root, DATA_FOLDER, DATA_FILE_NAME);
          console.log(`Loading sp-data.json from: ${filePath}`);
          const raw = fs.readFileSync(filePath, 'utf-8'); // Ensure the file exists and is readable
          return `          
            export default ${ raw }
          `
        }
      },
    },
    {
      name: 'sharepoint-data-plugin:dist',
      apply: 'build',
      resolveId(id) {
        if (id === 'virtual:sharepoint-data') {
          return id
        }
      },

      load(id, options) {
        if (id === 'virtual:sharepoint-data') {
          return `
            export default (typeof window !== 'undefined' && window.__LD_RESULTS__)
              ? window.__LD_RESULTS__
              : {}
          `
        }
      },
    },

  ]
}
