import { motion } from 'framer-motion'
import { Zap, Star, ArrowDown } from 'lucide-react'
import { RefObject } from 'react'
import { Badge } from '@/components/ui/Badge'

interface FeaturesHeroProps {
    heroRef: RefObject<HTMLDivElement>
}

export const FeaturesHero = ({ heroRef }: FeaturesHeroProps) => {
    return (
        <section ref={heroRef} className="relative z-10 px-6 py-20 text-center">
            <div className="max-w-5xl mx-auto">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Zap className="w-4 h-4 mr-2" />
                    Fonctionnalités Complètes
                </Badge>
                
                <h1 className="features-hero-title text-5xl md:text-6xl font-bold text-white mb-6">
                    Explorez Toutes les
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Capacités de ComplySummarize IA
                    </span>
                </h1>
                
                <p className="features-hero-subtitle text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Découvrez en détail chaque fonctionnalité de notre plateforme d'analyse de conformité, 
                    avec leurs avantages spécifiques et les limitations transparentes pour vous aider 
                    à prendre une décision éclairée.
                </p>

                {/* Features Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">IA Avancée</h3>
                        <p className="text-gray-300 text-sm">
                            Algorithmes de pointe pour l'analyse de documents
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Multi-Conformité</h3>
                        <p className="text-gray-300 text-sm">
                            Support de 50+ réglementations internationales
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Sécurité Avancée</h3>
                        <p className="text-gray-300 text-sm">
                            Chiffrement bout-en-bout et conformité SOC 2
                        </p>
                    </motion.div>
                </div>

                {/* CTA Preview */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <span className="animate-bounce"><ArrowDown size={16} /></span> Explorez chaque fonctionnalité en détail ci-dessous
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 