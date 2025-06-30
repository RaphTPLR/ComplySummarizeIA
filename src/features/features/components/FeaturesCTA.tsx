import { ArrowRight, Zap, Upload, Star } from 'lucide-react'
import { RefObject } from 'react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

interface FeaturesCTAProps {
    ctaRef: RefObject<HTMLDivElement>
}

export const FeaturesCTA = ({ ctaRef }: FeaturesCTAProps) => {
    return (
        <section ref={ctaRef} className="relative z-10 px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
                <div className="cta-card group perspective-1000">
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Decorative background elements */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-500/10 rounded-full group-hover:scale-125 transition-transform duration-1000 delay-200"></div>
                        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-110 transition-transform duration-800 delay-100"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="cta-icon mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                    <Zap className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h2 className="cta-title text-4xl md:text-6xl font-bold text-white mb-6 group-hover:text-gray-100 transition-colors">
                                Convaincu par nos Capacités ?
                            </h2>
                            
                            {/* Subtitle */}
                            <p className="cta-subtitle text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors">
                                Vous connaissez maintenant en détail nos fonctionnalités, avantages et limitations. 
                                Testez ComplySummarize IA en toute transparence et découvrez comment nous pouvons 
                                transformer votre approche de la conformité.
                            </p>
                            
                            {/* Buttons */}
                            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mb-10">
                                <Button 
                                    className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-blue-700 text-white text-lg px-10 py-4 rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <Upload className="mr-3 w-5 h-5" />
                                    Essayer Maintenant - Gratuit
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Link to="/demo">
                                    <Button 
                                        variant="secondary" 
                                        className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 text-lg px-10 py-4 rounded-xl transition-all duration-300"
                                    >
                                        Voir la Démo Interactive
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="cta-trust grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="flex flex-col items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                                        <Star className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div className="text-sm font-medium text-white mb-1">Transparence Totale</div>
                                    <div className="text-xs text-gray-400">Avantages et limitations exposés</div>
                                </div>
                                <div className="flex flex-col items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                                        <Zap className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-sm font-medium text-white mb-1">Essai Sans Risque</div>
                                    <div className="text-xs text-gray-400">Première analyse gratuite</div>
                                </div>
                                <div className="flex flex-col items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                                        <Upload className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="text-sm font-medium text-white mb-1">Résultats Immédiats</div>
                                    <div className="text-xs text-gray-400">Analyse en &lt;30 secondes</div>
                                </div>
                            </div>

                            {/* Additional trust message */}
                            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-300">
                                    💡 <strong className="text-white">Engagement de transparence :</strong> Nous vous montrons exactement 
                                    ce que notre IA peut et ne peut pas faire. Aucune surprise, que des résultats mesurables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 