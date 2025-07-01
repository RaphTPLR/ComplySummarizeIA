import { motion } from 'framer-motion'
import { Upload, Scan, Brain, Download, ArrowRight, FileText, CheckCircle, TrendingUp } from 'lucide-react'
import { RefObject, useState } from 'react'
import { Button } from '@/components/ui/Button'

interface DemoStepsProps {
    stepsRef: RefObject<HTMLDivElement>
}

export const DemoSteps = ({ stepsRef }: DemoStepsProps) => {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        {
            id: 1,
            title: "Upload du Document",
            description: "L'utilisateur télécharge son document de conformité (PDF) via notre interface sécurisée.",
            icon: Upload,
            color: "from-purple-500 to-purple-600",
            details: [
                "Support format (PDF)",
                "Upload sécurisé avec chiffrement",
                "Validation automatique du format",
                "Taille maximum 50MB par document"
            ],
            mockup: "📄 Document_Conformite_RGPD.pdf"
        },
        {
            id: 2,
            title: "Transcription IA",
            description: "Notre IA avancée analyse et transcrit le contenu, en identifiant la structure et les éléments clés.",
            icon: Scan,
            color: "from-blue-500 to-cyan-500",
            details: [
                "OCR intelligent pour documents scannés",
                "Reconnaissance de la structure documentaire",
                "Extraction des métadonnées",
                "Identification des sections importantes"
            ],
            mockup: "🤖 Analyse en cours... 89% complété"
        },
        {
            id: 3,
            title: "Analyse & Résumé",
            description: "L'IA génère un résumé structuré, identifie les points clés et propose des suggestions d'actions.",
            icon: Brain,
            color: "from-emerald-500 to-green-500",
            details: [
                "Résumé structuré par sections",
                "Identification des points critiques",
                "Score de risque de conformité",
                "Suggestions d'actions personnalisées"
            ],
            mockup: "📊 Risque: Moyen | Points clés: 12 | Actions: 5"
        },
        {
            id: 4,
            title: "Export & Téléchargement",
            description: "Le rapport final est généré et peut être téléchargé en PDF, avec options de personnalisation.",
            icon: Download,
            color: "from-pink-500 to-rose-500",
            details: [
                "Export PDF professionnel",
                "Branding personnalisable",
                "Historique des analyses",
                "Partage sécurisé par lien"
            ],
            mockup: "📋 Rapport_Analyse_Final.pdf généré"
        }
    ]

    // Get the current step's icon component
    const CurrentStepIcon = steps[activeStep].icon

    return (
        <section ref={stepsRef} className="relative z-10 px-6 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Parcours Utilisateur en 4 Étapes
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        De l'upload à l'export, découvrez comment ComplySummarize IA 
                        transforme vos documents en intelligence exploitable
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center space-x-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <motion.button
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                                        index <= activeStep 
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                                            : 'bg-white/10 text-gray-400'
                                    }`}
                                    onClick={() => setActiveStep(index)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {step.id}
                                </motion.button>
                                {index < steps.length - 1 && (
                                    <div className={`w-16 h-1 mx-2 rounded transition-colors duration-300 ${
                                        index < activeStep ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-white/20'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Step Display */}
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Step Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className={`w-16 h-16 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center`}>
                                    <CurrentStepIcon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-purple-400 font-medium">Étape {steps[activeStep].id}</div>
                                    <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {steps[activeStep].description}
                            </p>

                            <div className="space-y-3">
                                {steps[activeStep].details.map((detail, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span className="text-gray-300">{detail}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Mockup */}
                        <div className="relative">
                            <motion.div
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <FileText className="w-10 h-10 text-gray-300" />
                                </div>
                                <div className="text-lg font-mono text-white mb-4">
                                    {steps[activeStep].mockup}
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(activeStep + 1) * 25}%` }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    />
                                </div>
                                <p className="text-sm text-gray-400">
                                    Progression: {(activeStep + 1) * 25}% complété
                                </p>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse delay-1000" />
                        </div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-center mt-12 space-x-4">
                    <Button
                        variant="outline"
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className="border border-white/20 bg-white/5 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                        Étape Précédente
                    </Button>
                    <Button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
                    >
                        Étape Suivante
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Auto-progression indicator */}
                <motion.div 
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-sm text-gray-500">
                        💡 Cliquez sur les numéros ou utilisez les boutons pour naviguer entre les étapes
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 