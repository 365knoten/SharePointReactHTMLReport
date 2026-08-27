
export interface ReportData {
    title: string
    description: string
    sections: Array<{
        id: string
        heading: string
        content: string
    }>
}
