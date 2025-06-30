import { motion } from 'framer-motion'
import { Download, FileText, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'
import { RefObject } from 'react'
import { Button } from '@/components/ui/Button'

interface DemoResultsProps {
    resultsRef: RefObject<HTMLDivElement>
}

export const DemoResults = ({ resultsRef }: DemoResultsProps) => {
    const mockResults = {
        documentTitle: "Politique RGPD - Version 2024",
        analysisDate: "15 janvier 2024",
        riskScore: 75,
        keyPoints: [
            {
                type: "critical",
                text: "Absence de mention du délai de conservation des données personnelles",
                icon: AlertTriangle,
                color: "text-red-400"
            },
            {
                type: "warning",
                text: "Procédure de consentement utilisateur à clarifier",
                icon: TrendingUp,
                color: "text-yellow-400"
            },
            {
                type: "success",
                text: "Droits des personnes concernées bien définis",
                icon: CheckCircle2,
                color: "text-emerald-400"
            },
            {
                type: "success",
                text: "Mesures techniques de sécurité conformes",
                icon: CheckCircle2,
                color: "text-emerald-400"
            }
        ],
        suggestions: [
            "Ajouter une section détaillée sur la durée de conservation",
            "Préciser les modalités de recueil du consentement",
            "Inclure les coordonnées du DPO dans le document",
            "Mettre à jour les références réglementaires"
        ],
        summary: "Ce document présente une bonne base de conformité RGPD mais nécessite quelques ajustements pour atteindre une conformité optimale. Les droits des utilisateurs sont correctement définis, mais la gestion des données et les procédures de consentement doivent être renforcées."
    }

    return (
        <section ref={resultsRef} className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Résultat de l'Analyse
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez le type de rapport détaillé que vous recevrez après l'analyse de vos documents
                    </p>
                </motion.div>

                {/* Results Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Summary Card */}
                    <motion.div
                        className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Résumé Exécutif</h3>
                                <p className="text-sm text-gray-400">{mockResults.documentTitle} • {mockResults.analysisDate}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-300">Score de Conformité</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${mockResults.riskScore}%` }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        />
                                    </div>
                                    <span className="text-white font-semibold">{mockResults.riskScore}%</span>
                                </div>
                            </div>
                            
                            <div className="bg-white/5 rounded-xl p-4">
                                <p className="text-gray-300 leading-relaxed">
                                    {mockResults.summary}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">Statistiques</h3>
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">4</div>
                                <div className="text-sm text-gray-400">Points Clés Identifiés</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">4</div>
                                <div className="text-sm text-gray-400">Suggestions d'Actions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">2min</div>
                                <div className="text-sm text-gray-400">Temps d'Analyse</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Key Points */}
                <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-white mb-6">Points Clés Identifiés</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockResults.keyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <point.icon className={`w-5 h-5 ${point.color} flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-300 text-sm leading-relaxed">{point.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Suggestions */}
                <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-white mb-6">Suggestions d'Actions</h3>
                    <div className="space-y-3">
                        {mockResults.suggestions.map((suggestion, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-semibold">{index + 1}</span>
                                </div>
                                <span className="text-gray-300 leading-relaxed">{suggestion}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Download CTA */}
                <motion.div
                    className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Download className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Rapport Prêt au Téléchargement
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Votre rapport d'analyse détaillé est maintenant disponible au téléchargement en format PDF professionnel, 
                        incluant tous les éléments d'analyse et recommandations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
                            <Download className="mr-2 w-5 h-5" />
                            Télécharger le Rapport PDF
                        </Button>
                        <Button 
                            variant="outline"
                            className="border border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-3"
                        >
                            Partager par Email
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 