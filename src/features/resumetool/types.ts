export interface Tool {
    id: string
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    description: string
    color: string
}

export interface AnalysisResult {
    summary: string
    keyPoints: string[]
    suggestedActions: string[]
    riskLevel: string
    complianceScore: number
    // Métadonnées du backend
    metadata?: {
        model_used?: string
        tokens_used?: number
        processing_time?: number
        document_info?: {
            filename: string
            file_size: number
            pages: number
            text_length: number
            extraction_method: string
        }
        filename?: string
    }
} 