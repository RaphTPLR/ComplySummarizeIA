import { motion } from 'framer-motion'
import { Check, X, AlertCircle, TrendingUp, Users, Clock } from 'lucide-react'
import { RefObject } from 'react'

interface FeaturesComparisonProps {
    comparisonRef: RefObject<HTMLDivElement>
}

export const FeaturesComparison = ({ comparisonRef }: FeaturesComparisonProps) => {
    const comparisonData = [
        {
            category: "Analyse de Documents",
            traditional: "Révision manuelle, plusieurs jours",
            complySummarize: "IA automatisée, <30 secondes",
            advantage: true
        },
        {
            category: "Précision d'Analyse",
            traditional: "Variable selon l'expert (70-90%)",
            complySummarize: "Consistante à 99,7%",
            advantage: true
        },
        {
            category: "Coût par Document",
            traditional: "€150-500 par analyse",
            complySummarize: "€5-25 par analyse",
            advantage: true
        },
        {
            category: "Support Multi-Langues",
            traditional: "Limité aux experts disponibles",
            complySummarize: "25+ langues supportées",
            advantage: true
        },
        {
            category: "Disponibilité",
            traditional: "Heures de bureau uniquement",
            complySummarize: "24/7 en temps réel",
            advantage: true
        },
        {
            category: "Nuances Juridiques Complexes",
            traditional: "Expertise humaine approfondie",
            complySummarize: "Peut nécessiter validation humaine",
            advantage: false
        },
        {
            category: "Personnalisation Extrême",
            traditional: "Adaptation totale possible",
            complySummarize: "Limitée aux templates disponibles",
            advantage: false
        },
        {
            category: "Responsabilité Légale",
            traditional: "Expert juridique responsable",
            complySummarize: "IA assistée, validation recommandée",
            advantage: false
        }
    ]

    const overallAdvantages = [
        {
            icon: Clock,
            title: "Efficacité Temporelle",
            description: "Réduction de 95% du temps d'analyse",
            impact: "Critique"
        },
        {
            icon: TrendingUp,
            title: "Réduction des Coûts",
            description: "Diminution de 80% des coûts d'analyse",
            impact: "Élevé"
        },
        {
            icon: Users,
            title: "Scalabilité",
            description: "Traitement illimité de documents simultanés",
            impact: "Élevé"
        },
        {
            icon: Check,
            title: "Consistance",
            description: "Résultats uniformes indépendamment du volume",
            impact: "Moyen"
        }
    ]

    const limitations = [
        {
            icon: AlertCircle,
            title: "Dépendance Technologique",
            description: "Nécessite connexion internet et infrastructure cloud",
            severity: "Moyen"
        },
        {
            icon: AlertCircle,
            title: "Cas d'Usage Complexes",
            description: "Peut nécessiter expertise humaine pour validation finale",
            severity: "Moyen"
        },
        {
            icon: AlertCircle,
            title: "Courbe d'Apprentissage",
            description: "Formation initiale requise pour optimiser l'utilisation",
            severity: "Faible"
        }
    ]

    return (
        <section ref={comparisonRef} className="relative z-10 px-6 py-20">
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
                        ComplySummarize IA vs Solutions Traditionnelles
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comparaison objective avec transparence sur les avantages et limitations
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Comparaison Détaillée</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 text-gray-300 font-medium">Critère</th>
                                    <th className="text-left py-4 px-4 text-gray-300 font-medium">Solutions Traditionnelles</th>
                                    <th className="text-left py-4 px-4 text-gray-300 font-medium">ComplySummarize IA</th>
                                    <th className="text-center py-4 px-4 text-gray-300 font-medium">Avantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <motion.tr
                                        key={row.category}
                                        className="border-b border-white/5"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <td className="py-4 px-4 text-white font-medium">{row.category}</td>
                                        <td className="py-4 px-4 text-gray-300">{row.traditional}</td>
                                        <td className="py-4 px-4 text-gray-300">{row.complySummarize}</td>
                                        <td className="py-4 px-4 text-center">
                                            {row.advantage ? (
                                                <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-400 mx-auto" />
                                            )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Advantages and Limitations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Avantages Principaux */}
                    <motion.div
                        className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <Check className="w-8 h-8 text-emerald-400 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Avantages Principaux</h3>
                        </div>
                        <div className="space-y-6">
                            {overallAdvantages.map((advantage, index) => {
                                const AdvantageIcon = advantage.icon
                                return (
                                    <motion.div
                                        key={advantage.title}
                                        className="flex items-start space-x-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <AdvantageIcon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <h4 className="text-white font-semibold mr-2">{advantage.title}</h4>
                                                <span className={`text-xs px-2 py-1 rounded-full ${
                                                    advantage.impact === 'Critique' ? 'bg-red-500/20 text-red-400' :
                                                    advantage.impact === 'Élevé' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                    Impact {advantage.impact}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm">{advantage.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Limitations & Considérations */}
                    <motion.div
                        className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <AlertCircle className="w-8 h-8 text-yellow-400 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Limitations & Considérations</h3>
                        </div>
                        <div className="space-y-6">
                            {limitations.map((limitation, index) => {
                                const LimitationIcon = limitation.icon
                                return (
                                    <motion.div
                                        key={limitation.title}
                                        className="flex items-start space-x-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <LimitationIcon className="w-5 h-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <h4 className="text-white font-semibold mr-2">{limitation.title}</h4>
                                                <span className={`text-xs px-2 py-1 rounded-full ${
                                                    limitation.severity === 'Élevé' ? 'bg-red-500/20 text-red-400' :
                                                    limitation.severity === 'Moyen' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-green-500/20 text-green-400'
                                                }`}>
                                                    Sévérité {limitation.severity}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm">{limitation.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Summary */}
                <motion.div
                    className="mt-16 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-white mb-4">En Résumé</h3>
                    <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        ComplySummarize IA excelle dans l'<strong className="text-white">automatisation, la rapidité et la consistance</strong> 
                        des analyses de conformité. Bien que certains cas complexes puissent nécessiter une validation humaine, 
                        la plateforme offre un <strong className="text-white">rapport qualité-prix exceptionnel</strong> pour 95% 
                        des besoins d'analyse de conformité, avec une <strong className="text-white">réduction drastique des coûts et délais</strong>.
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 