import { motion } from 'framer-motion'
import { 
    Brain, Upload, Shield, Zap, FileText, Users, 
    Globe, Clock, BarChart3, Download, AlertTriangle, 
    CheckCircle, X, Plus, Minus 
} from 'lucide-react'
import { RefObject } from 'react'

interface FeaturesGridProps {
    gridRef: RefObject<HTMLDivElement>
}

export const FeaturesGrid = ({ gridRef }: FeaturesGridProps) => {
    const features = [
        {
            category: "Intelligence Artificielle",
            icon: Brain,
            color: "from-purple-500 to-purple-600",
            features: [
                {
                    title: "Analyse Sémantique Avancée",
                    description: "Compréhension contextuelle des documents juridiques et réglementaires",
                    pros: [
                        "Précision de 99,7% dans l'identification des clauses",
                        "Compréhension du contexte et des nuances",
                        "Mise à jour continue des modèles IA"
                    ],
                    cons: [
                        "Peut nécessiter validation humaine pour documents très spécialisés",
                        "Performance moindre sur documents manuscrits anciens"
                    ]
                },
                {
                    title: "OCR Intelligent",
                    description: "Reconnaissance optique de caractères avec correction automatique",
                    pros: [
                        "Support de 25+ langues",
                        "Correction automatique des erreurs de scan",
                        "Préservation de la mise en forme originale"
                    ],
                    cons: [
                        "Qualité dépendante de la résolution source",
                        "Temps de traitement plus long pour gros documents"
                    ]
                }
            ]
        },
        {
            category: "Gestion de Documents",
            icon: FileText,
            color: "from-blue-500 to-cyan-500",
            features: [
                {
                    title: "Support Format",
                    description: "Compatible avec PDF",
                    pros: [
                        "1 format supportés nativement",
                        "Conversion automatique entre formats",
                        "Préservation des métadonnées"
                    ],
                    cons: [
                        "Limite de 50MB par fichier",
                        "Certains formats propriétaires non supportés"
                    ]
                },
                {
                    title: "Versioning Intelligent",
                    description: "Suivi des modifications et comparaison de versions",
                    pros: [
                        "Historique complet des modifications",
                        "Comparaison visuelle des changements",
                        "Restauration de versions antérieures"
                    ],
                    cons: [
                        "Stockage limité à 100 versions par document",
                        "Comparaison complexe sur documents très volumineux"
                    ]
                }
            ]
        },
        {
            category: "Sécurité & Conformité",
            icon: Shield,
            color: "from-emerald-500 to-green-500",
            features: [
                {
                    title: "Chiffrement Bout-en-Bout",
                    description: "Protection maximale des données sensibles",
                    pros: [
                        "Chiffrement AES-256 en transit et au repos",
                        "Clés de chiffrement gérées par le client",
                        "Audit trail complet"
                    ],
                    cons: [
                        "Impact léger sur les performances",
                        "Récupération impossible sans clés"
                    ]
                },
                {
                    title: "Conformité Multi-Réglementaire",
                    description: "Support RGPD, SOX, HIPAA, ISO 27001, et plus",
                    pros: [
                        "50+ cadres réglementaires supportés",
                        "Mise à jour automatique des réglementations",
                        "Rapports de conformité automatisés"
                    ],
                    cons: [
                        "Nécessite configuration initiale par réglementation",
                        "Certaines juridictions locales non couvertes"
                    ]
                }
            ]
        },
        {
            category: "Performance & Scalabilité",
            icon: Zap,
            color: "from-yellow-500 to-orange-500",
            features: [
                {
                    title: "Traitement Temps Réel",
                    description: "Analyse instantanée de documents jusqu'à 1000 pages",
                    pros: [
                        "Résultats en moins de 30 secondes",
                        "Traitement parallèle de multiples documents",
                        "Infrastructure cloud auto-scalable"
                    ],
                    cons: [
                        "Ralentissement possible pendant pics de charge",
                        "Documents très volumineux (>1000 pages) nécessitent plus de temps"
                    ]
                },
                {
                    title: "API Enterprise",
                    description: "Intégration native avec vos systèmes existants",
                    pros: [
                        "API REST complète et documentée",
                        "SDKs pour Python, JavaScript, Java",
                        "Rate limiting configurable"
                    ],
                    cons: [
                        "Limite de 1000 requêtes/heure en plan standard",
                        "Configuration technique requise"
                    ]
                }
            ]
        },
        {
            category: "Collaboration & Workflow",
            icon: Users,
            color: "from-pink-500 to-rose-500",
            features: [
                {
                    title: "Collaboration d'Équipe",
                    description: "Partage et révision collaborative de documents",
                    pros: [
                        "Commentaires en temps réel",
                        "Permissions granulaires par utilisateur",
                        "Notifications intelligentes"
                    ],
                    cons: [
                        "Limité à 50 collaborateurs simultanés",
                        "Conflits possibles sur éditions simultanées"
                    ]
                },
                {
                    title: "Workflows Automatisés",
                    description: "Processus d'approbation et de validation configurables",
                    pros: [
                        "10+ templates de workflow prêts",
                        "Automatisation basée sur les règles",
                        "Intégration avec outils tiers (Slack, Teams)"
                    ],
                    cons: [
                        "Configuration initiale complexe",
                        "Limite de 20 étapes par workflow"
                    ]
                }
            ]
        },
        {
            category: "Analytics & Reporting",
            icon: BarChart3,
            color: "from-indigo-500 to-purple-500",
            features: [
                {
                    title: "Tableaux de Bord Avancés",
                    description: "Visualisation en temps réel des métriques de conformité",
                    pros: [
                        "25+ widgets de métriques pré-configurés",
                        "Dashboards personnalisables",
                        "Export en temps réel vers BI tools"
                    ],
                    cons: [
                        "Personnalisation limitée sur plan de base",
                        "Latence de données de 5 minutes"
                    ]
                },
                {
                    title: "Rapports Automatisés",
                    description: "Génération automatique de rapports de conformité",
                    pros: [
                        "20+ templates de rapports professionnels",
                        "Programmation automatique d'envoi",
                        "Export PDF, Excel, PowerPoint"
                    ],
                    cons: [
                        "Limite de 10 rapports programmés",
                        "Personnalisation avancée nécessite compétences techniques"
                    ]
                }
            ]
        }
    ]

    return (
        <section ref={gridRef} className="relative z-10 px-6 py-20">
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
                        Fonctionnalités Détaillées
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Analyse complète de chaque capacité avec avantages et limitations transparentes
                    </p>
                </motion.div>

                {/* Features Categories */}
                <div className="space-y-12">
                    {features.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon
                        return (
                            <motion.div
                                key={category.category}
                                className="feature-category"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Category Header */}
                                <div className="flex items-center mb-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                                        <CategoryIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded mt-2"></div>
                                    </div>
                                </div>

                                {/* Features in Category */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {category.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={feature.title}
                                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                                            <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* Avantages */}
                                                <div>
                                                    <div className="flex items-center mb-3">
                                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                                                        <span className="text-emerald-400 font-medium">Avantages</span>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {feature.pros.map((pro, index) => (
                                                            <li key={index} className="flex items-start text-sm text-gray-300">
                                                                <Plus className="w-3 h-3 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                                                                <span>{pro}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Inconvénients */}
                                                <div>
                                                    <div className="flex items-center mb-3">
                                                        <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                                                        <span className="text-yellow-400 font-medium">Limitations</span>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {feature.cons.map((con, index) => (
                                                            <li key={index} className="flex items-start text-sm text-gray-300">
                                                                <Minus className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                                                                <span>{con}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 