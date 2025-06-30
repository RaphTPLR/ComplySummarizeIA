import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'
import { RefObject } from 'react'
import { Badge } from '@/components/ui/Badge'

interface DemoHeroProps {
    heroRef: RefObject<HTMLDivElement>
}

export const DemoHero = ({ heroRef }: DemoHeroProps) => {
    return (
        <section ref={heroRef} className="relative z-10 px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6">
                    <Play className="w-4 h-4 mr-2" />
                    Démonstration Interactive
                </Badge>
                
                <h1 className="demo-hero-title text-5xl md:text-6xl font-bold text-white mb-6">
                    Découvrez Comment
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                        ComplySummarize IA Fonctionne
                    </span>
                </h1>
                
                <p className="demo-hero-subtitle text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Suivez le parcours complet de l'analyse de vos documents de conformité, 
                    de l'upload initial au rapport final téléchargeable en quelques secondes.
                </p>

                {/* Demo Preview Card */}
                <motion.div 
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Processus d'Analyse Intelligent
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        Découvrez comment notre IA transforme vos documents complexes en insights 
                        exploitables en 4 étapes simples et automatisées.
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 