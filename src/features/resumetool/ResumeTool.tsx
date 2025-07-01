'use client'

import { PageLayout } from '@/components/layout/PageLayout'
import { Brain, FileText, Target, Zap } from 'lucide-react'
import { useRef, useState } from 'react'

// Components
import { AnalysisPanel, ToolHeader, ToolsPanel, UploadPanel } from './components'

// Types
import type { AnalysisResult, Tool } from './types'

// Services
import { pdfService } from '@/services/pdfService'

export default function ResumeTool() {
    const toolRef = useRef<HTMLDivElement>(null)
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [selectedTool, setSelectedTool] = useState('analyze')
    const [isProcessing, setIsProcessing] = useState(false)
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
    const [error, setError] = useState<string | null>(null)

    const tools: Tool[] = [
        {
            id: 'analyze',
            name: 'Analyse Complète',
            icon: Brain,
            description: 'Analyse sémantique et extraction des points clés',
            color: 'from-purple-500 to-blue-500'
        },
        {
            id: 'summarize',
            name: 'Résumé Structuré',
            icon: FileText,
            description: 'Génération de résumé avec structure claire',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'extract',
            name: 'Points Clés',
            icon: Target,
            description: 'Extraction des informations essentielles',
            color: 'from-cyan-500 to-emerald-500'
        },
        {
            id: 'actions',
            name: 'Actions Suggérées',
            icon: Zap,
            description: 'Recommandations et plan d\'action',
            color: 'from-emerald-500 to-green-500'
        }
    ]

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            setUploadedFiles(Array.from(files))
            setError(null) // Reset error when new files are uploaded
        }
    }

    // Mapping des outils vers les types de résumé du backend
    const getsummaryType = (toolId: string): string => {
        switch (toolId) {
            case 'analyze': return 'detailed'
            case 'summarize': return 'executive'
            case 'extract': return 'bullet_points'
            case 'actions': return 'technical'
            default: return 'detailed'
        }
    }

    // Fonction pour traiter les documents avec le backend réel
    const processDocuments = async () => {
        if (uploadedFiles.length === 0) {
            setError("Veuillez d'abord uploader un fichier PDF")
            return
        }

        // Pour l'instant, on traite seulement le premier fichier
        const file = uploadedFiles[0]
        
        // Vérifier que c'est un PDF
        if (!file.type.includes('pdf')) {
            setError("Seuls les fichiers PDF sont supportés pour l'instant")
            return
        }

        setIsProcessing(true)
        setError(null)
        setAnalysisResult(null)

        try {
            console.log(`🔄 Traitement du fichier: ${file.name}`)
            console.log(`📋 Type de résumé: ${getsummaryType(selectedTool)}`)
            
            // Appel au service PDF
            const result = await pdfService.uploadAndAnalyzePDF(
                file, 
                getsummaryType(selectedTool)
            )
            
            console.log('✅ Résultat reçu:', result)
            setAnalysisResult(result)
            
        } catch (error) {
            console.error('❌ Erreur lors du traitement:', error)
            setError(error instanceof Error ? error.message : 'Erreur inconnue lors du traitement')
        } finally {
            setIsProcessing(false)
        }
    }

    // Fonction pour réinitialiser tous les états
    const resetAll = () => {
        setUploadedFiles([])
        setAnalysisResult(null)
        setError(null)
        setIsProcessing(false)
        setSelectedTool('analyze') // Retour à l'outil par défaut
        
        // Réinitialiser aussi l'input file
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
        if (fileInput) {
            fileInput.value = ''
        }
        
        console.log('🔄 Application réinitialisée')
    }

    return (
        <PageLayout>
            {/* Tool Interface */}
            <section ref={toolRef} className="relative z-10 px-6 py-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Tool Header */}
                    <ToolHeader />

                    {/* Error Display */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 text-sm">❌ {error}</p>
                        </div>
                    )}

                    {/* Main Interface */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[80vh]">
                        {/* Left Panel - Tools */}
                        <ToolsPanel
                            tools={tools}
                            selectedTool={selectedTool}
                            setSelectedTool={setSelectedTool}
                            processDocuments={processDocuments}
                            uploadedFiles={uploadedFiles}
                            isProcessing={isProcessing}
                            resetAll={resetAll}
                        />

                        {/* Right Panel - AI Response */}
                        <AnalysisPanel
                            isProcessing={isProcessing}
                            analysisResult={analysisResult}
                        />

                        {/* Center Panel - Upload & Documents */}
                        <UploadPanel
                            uploadedFiles={uploadedFiles}
                            handleFileUpload={handleFileUpload}
                        />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}