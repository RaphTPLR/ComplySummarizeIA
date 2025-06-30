'use client'

import { PageLayout } from '@/components/layout/PageLayout'
import { Brain, FileText, Target, Zap } from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import { AnalysisPanel, ToolHeader, ToolsPanel, UploadPanel } from './components'

// Types
import type { AnalysisResult, Tool } from './types'

export default function ResumeTool() {
    const toolRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [selectedTool, setSelectedTool] = useState('analyze')
    const [isProcessing, setIsProcessing] = useState(false)
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

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
        }
    }

    // Une fois l'api connectée, faire en sorte de faire une requête à l'api pour analyser les documents
    const processDocuments = async () => {
        setIsProcessing(true)
        // Simulate processing
        setTimeout(() => {
            setAnalysisResult({
                summary: "Document analysé avec succès. Le document présente les politiques de conformité RGPD avec 15 sections principales identifiées.",
                keyPoints: [
                    "Consentement explicite requis pour le traitement des données",
                    "Droit à l'effacement des données personnelles",
                    "Notification obligatoire en cas de violation dans les 72h",
                    "Désignation d'un DPO pour les entreprises de plus de 250 employés"
                ],
                suggestedActions: [
                    "Mettre à jour la politique de confidentialité",
                    "Former les équipes sur les nouvelles procédures",
                    "Implémenter un système de gestion des consentements",
                    "Effectuer un audit de conformité trimestriel"
                ],
                riskLevel: "Moyen",
                complianceScore: 85
            })
            setIsProcessing(false)
        }, 3000)
    }

    return (
        <PageLayout>
            {/* Tool Interface */}
            <section ref={toolRef} className="relative z-10 px-6 py-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Tool Header */}
                    <ToolHeader />

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