import { motion } from 'framer-motion'
import { Clock, Shield, Zap } from 'lucide-react'
import { RefObject } from 'react'

interface FeaturesSectionProps {
    featuresRef: RefObject<HTMLDivElement>
}

export const FeaturesSection = ({ featuresRef }: FeaturesSectionProps) => {
    return (
        <section ref={featuresRef} id="features" className="relative z-10 px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Pourquoi Choisir ComplySummarize IA ?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        La plateforme d'analyse de documents de conformité la plus avancée, alimentée par une IA de pointe
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 - Real-Time Analysis */}
                    <div className="feature-card group perspective-1000">
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden group-hover:border-purple-500/30 transition-all duration-500">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                    Analyse en Temps Réel
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                    Évaluation instantanée des risques de conformité et analyse des écarts réglementaires. Obtenez des résultats en moins de 30 secondes avec une précision IA.
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                        </div>
                    </div>

                    {/* Card 2 - Multi-Regulatory Support */}
                    <div className="feature-card group perspective-1000">
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                                    Support Multi-Réglementaire
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                    RGPD, SOX, HIPAA, PCI-DSS et plus de 50 autres cadres de conformité. Restez à la pointe des réglementations évolutives.
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-cyan-500/10 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                        </div>
                    </div>

                    {/* Card 3 - Smart Insights & Actions */}
                    <div className="feature-card group perspective-1000">
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                                    Insights Intelligents & Actions
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                    Résumés générés par IA, scores de risque et recommandations exploitables pour améliorer votre posture de conformité.
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-500/10 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 