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
} 