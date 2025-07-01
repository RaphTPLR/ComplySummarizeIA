import type { AnalysisResult } from '@/features/resumetool/types'

export interface PDFUploadResponse {
    success: boolean
    message: string
    document_id?: string
    filename?: string
    file_size?: number
    pages?: number
    text_preview?: string
    error?: string
}

export interface PDFSummaryResponse {
    success: boolean
    summary?: string
    summary_type?: string
    model_used?: string
    tokens_used?: number
    processing_time?: number
    document_analysis?: {
        filename: string
        file_size: number
        pages: number
        text_length: number
        extraction_method: string
    }
    error?: string
}

class PDFService {
    /**
     * Vérifie le statut de l'API backend
     */
    async checkHealth(): Promise<{ status: string; service: string }> {
        // Note: on utilise une URL complète car l'interceptor ajoute déjà l'URL de base
        const response = await fetch('http://localhost:5000/')
        if (!response.ok) {
            throw new Error('Backend non disponible')
        }
        return response.json()
    }

    /**
     * Récupère la configuration du backend
     */
    async getConfig(): Promise<any> {
        const response = await fetch('http://localhost:5000/api/config')
        if (!response.ok) {
            throw new Error('Impossible de récupérer la configuration')
        }
        return response.json()
    }

    /**
     * Upload et analyse un fichier PDF
     */
    async uploadAndAnalyzePDF(
        file: File, 
        summaryType: string = 'detailed'
    ): Promise<AnalysisResult> {
        try {
            // Créer FormData pour l'upload
            const formData = new FormData()
            formData.append('file', file)
            formData.append('summary_type', summaryType)

            // Faire la requête directement (pas via l'interceptor car il n'est pas configuré pour le backend Python)
            const response = await fetch('http://localhost:5000/api/summarize', {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Erreur inconnue' }))
                throw new Error(errorData.error || `Erreur HTTP ${response.status}`)
            }

            const data: PDFSummaryResponse = await response.json()

            if (!data.success) {
                throw new Error(data.error || 'Échec de l\'analyse du PDF')
            }

            // Convertir la réponse du backend vers le format attendu par le frontend
            return this.transformBackendResponse(data, file.name)

        } catch (error) {
            console.error('Erreur lors de l\'upload PDF:', error)
            throw error
        }
    }

    /**
     * Transforme la réponse du backend vers le format AnalysisResult
     */
    private transformBackendResponse(
        backendResponse: PDFSummaryResponse, 
        filename: string
    ): AnalysisResult {
        // Extraire des points clés du résumé (simulation basée sur le résumé)
        const summary = backendResponse.summary || "Aucun résumé généré"
        const keyPoints = this.extractKeyPointsFromSummary(summary)
        const suggestedActions = this.generateSuggestedActions(summary)
        
        // Calculer un score de conformité basé sur la longueur et la qualité du résumé
        const complianceScore = this.calculateComplianceScore(summary, backendResponse.document_analysis)
        
        // Déterminer le niveau de risque
        const riskLevel = this.determineRiskLevel(complianceScore)

        return {
            summary,
            keyPoints,
            suggestedActions,
            riskLevel,
            complianceScore,
            // Informations supplémentaires du backend
            metadata: {
                model_used: backendResponse.model_used,
                tokens_used: backendResponse.tokens_used,
                processing_time: backendResponse.processing_time,
                document_info: backendResponse.document_analysis,
                filename
            }
        }
    }

    /**
     * Extrait des points clés du résumé
     */
    private extractKeyPointsFromSummary(summary: string): string[] {
        // Logique simple pour extraire des points clés
        const sentences = summary.split(/[.!?]+/).filter(s => s.trim().length > 20)
        
        // Prendre les 4 premières phrases significatives comme points clés
        const keyPoints = sentences.slice(0, 4).map(sentence => 
            sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1)
        )

        // Si pas assez de contenu, ajouter des points génériques
        if (keyPoints.length < 2) {
            keyPoints.push(
                "Document analysé avec succès",
                "Contenu extrait et traité par IA",
                "Prêt pour exploitation des données"
            )
        }

        return keyPoints
    }

    /**
     * Génère des actions suggérées basées sur le résumé
     */
    private generateSuggestedActions(summary: string): string[] {
        const baseActions = [
            "Réviser le contenu du document",
            "Partager les insights avec l'équipe",
            "Archiver le document traité",
            "Planifier les actions de suivi"
        ]

        // Ajouter des actions spécifiques selon le contenu
        const lowerSummary = summary.toLowerCase()
        const specificActions: string[] = []

        if (lowerSummary.includes('conformité') || lowerSummary.includes('rgpd')) {
            specificActions.push("Vérifier la conformité RGPD")
        }
        
        if (lowerSummary.includes('contrat') || lowerSummary.includes('accord')) {
            specificActions.push("Examiner les clauses contractuelles")
        }
        
        if (lowerSummary.includes('financier') || lowerSummary.includes('budget')) {
            specificActions.push("Analyser l'impact financier")
        }

        return [...specificActions, ...baseActions].slice(0, 4)
    }

    /**
     * Calcule un score de conformité
     */
    private calculateComplianceScore(summary: string, docAnalysis?: any): number {
        let score = 50 // Score de base

        // Bonus pour la longueur du résumé
        if (summary.length > 200) score += 20
        if (summary.length > 500) score += 10

        // Bonus pour les informations du document
        if (docAnalysis?.pages && docAnalysis.pages > 1) score += 10
        if (docAnalysis?.text_length && docAnalysis.text_length > 1000) score += 10

        // Limiter entre 0 et 100
        return Math.min(Math.max(score, 0), 100)
    }

    /**
     * Détermine le niveau de risque
     */
    private determineRiskLevel(score: number): string {
        if (score >= 80) return "Faible"
        if (score >= 60) return "Moyen"
        return "Élevé"
    }
}

export const pdfService = new PDFService() 