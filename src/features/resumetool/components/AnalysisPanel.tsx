import { motion } from 'framer-motion'
import { Brain, FileText, Target, Zap, Download, Share2, Clock, Cpu, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'
import { AnalysisResult } from '../types'
import { PDFExportService } from '@/services/pdfExportService'
import { PDFTestService } from '@/services/pdfTestService'
import { useState } from 'react'

interface AnalysisPanelProps {
    isProcessing: boolean
    analysisResult: AnalysisResult | null
}

export const AnalysisPanel = ({ isProcessing, analysisResult }: AnalysisPanelProps) => {
    const [isExporting, setIsExporting] = useState(false)

    const handleExportPDF = async () => {
        if (!analysisResult) return

        setIsExporting(true)
        try {
            await PDFExportService.exportAnalysis(analysisResult, {
                fileName: `analyse-conformite-${new Date().toISOString().split('T')[0]}.pdf`,
                includeMetadata: true
            })
        } catch (error) {
            console.error('Erreur lors de l\'export PDF:', error)
            // Ici vous pourriez ajouter une notification d'erreur
        } finally {
            setIsExporting(false)
        }
    }

    const handleShareEmail = () => {
        if (!analysisResult) return

        // Création du contenu de l'email
        const subject = encodeURIComponent('Rapport d\'Analyse de Conformité - ComplySummarize IA')
        
        const emailBody = `
Bonjour,

Je partage avec vous un rapport d'analyse de conformité généré par ComplySummarize IA.

📊 SCORE DE CONFORMITÉ: ${analysisResult.complianceScore}%
🎯 NIVEAU DE RISQUE: ${analysisResult.riskLevel}

📋 RÉSUMÉ EXÉCUTIF:
${analysisResult.summary}

🔍 POINTS CLÉS IDENTIFIÉS:
${analysisResult.keyPoints.map((point, index) => `${index + 1}. ${point}`).join('\n')}

⚡ ACTIONS RECOMMANDÉES:
${analysisResult.suggestedActions.map((action, index) => `${index + 1}. ${action}`).join('\n')}

${analysisResult.metadata ? `
📈 INFORMATIONS TECHNIQUES:
- Modèle IA: ${analysisResult.metadata.model_used || 'N/A'}
- Temps de traitement: ${analysisResult.metadata.processing_time?.toFixed(2) || 'N/A'}s
- Tokens utilisés: ${analysisResult.metadata.tokens_used || 'N/A'}
- Pages analysées: ${analysisResult.metadata.document_info?.pages || 'N/A'}
` : ''}

Ce rapport a été généré automatiquement le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'})}.

Pour plus d'informations ou pour générer vos propres analyses, visitez ComplySummarize IA.

Cordialement
        `.trim()

        // URL Gmail avec paramètres pré-remplis
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${subject}&body=${encodeURIComponent(emailBody)}`
        
        // Ouvrir Gmail dans un nouvel onglet
        window.open(gmailUrl, '_blank')
    }

    return (
        <motion.div
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Analyse IA
            </h3>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto scrollbar-simple pr-2">
                {isProcessing ? (
                    <div className="py-8">
                        <Loader 
                            size="md" 
                            variant="analysis" 
                            text="Analyse des documents en cours..."
                        />
                    </div>
                ) : analysisResult ? (
                    <>
                        {/* Backend Metadata */}
                        {analysisResult.metadata && (
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                <h4 className="font-semibold text-white mb-2 flex items-center">
                                    <Cpu className="w-4 h-4 mr-2 text-blue-400" />
                                    Informations de Traitement
                                </h4>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    {analysisResult.metadata.model_used && (
                                        <div className="text-gray-300">
                                            <span className="text-blue-400">Modèle:</span> {analysisResult.metadata.model_used}
                                        </div>
                                    )}
                                    {analysisResult.metadata.processing_time && (
                                        <div className="text-gray-300 flex items-center">
                                            <Clock className="w-3 h-3 mr-1 text-emerald-400" />
                                            {analysisResult.metadata.processing_time.toFixed(2)}s
                                        </div>
                                    )}
                                    {analysisResult.metadata.tokens_used && (
                                        <div className="text-gray-300">
                                            <span className="text-purple-400">Tokens:</span> {analysisResult.metadata.tokens_used}
                                        </div>
                                    )}
                                    {analysisResult.metadata.document_info?.pages && (
                                        <div className="text-gray-300 flex items-center">
                                            <FileCheck className="w-3 h-3 mr-1 text-cyan-400" />
                                            {analysisResult.metadata.document_info.pages} page(s)
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Summary */}
                        <div>
                            <h4 className="font-semibold text-white mb-2 flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-blue-400" />
                                Résumé
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {analysisResult.summary}
                            </p>
                        </div>

                        {/* Key Points */}
                        <div>
                            <h4 className="font-semibold text-white mb-2 flex items-center">
                                <Target className="w-4 h-4 mr-2 text-emerald-400" />
                                Points Clés
                            </h4>
                            <ul className="space-y-2">
                                {analysisResult.keyPoints.map((point, index) => (
                                    <li key={index} className="text-sm text-gray-300 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Suggested Actions */}
                        <div>
                            <h4 className="font-semibold text-white mb-2 flex items-center">
                                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                                Actions Suggérées
                            </h4>
                            <ul className="space-y-2">
                                {analysisResult.suggestedActions.map((action, index) => (
                                    <li key={index} className="text-sm text-gray-300 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Compliance Score */}
                        <div className="p-4 bg-white/5 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">
                                Score de Conformité - Niveau: {analysisResult.riskLevel}
                            </h4>
                            <div className="flex items-center space-x-3">
                                <div className="flex-1 bg-gray-700 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${
                                            analysisResult.complianceScore >= 80 
                                                ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                                                : analysisResult.complianceScore >= 60
                                                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                : 'bg-gradient-to-r from-red-500 to-red-600'
                                        }`}
                                        style={{ width: `${analysisResult.complianceScore}%` }}
                                    ></div>
                                </div>
                                <span className="text-white font-medium">{analysisResult.complianceScore}%</span>
                            </div>
                        </div>

                        {/* Export Options */}
                        <div className="space-y-2">
                            <Button 
                                onClick={handleExportPDF}
                                disabled={isExporting}
                                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isExporting ? (
                                    <>
                                        <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                        Génération...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-4 h-4 mr-2" />
                                        Exporter PDF
                                    </>
                                )}
                            </Button>
                            <Button 
                                onClick={handleShareEmail}
                                variant="secondary" 
                                className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 py-2 text-sm"
                            >
                                <Share2 className="w-4 h-4 mr-2" />
                                Partager par Email
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <Brain className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400 text-sm">
                            Chargez des documents et lancez l'analyse pour voir les résultats
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    )
} 