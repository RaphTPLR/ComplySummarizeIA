import { ArrowRight, Shield, Star, TrendingUp, Upload, Users } from 'lucide-react'
import { RefObject } from 'react'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
    ctaRef: RefObject<HTMLDivElement>
}

export const CTASection = ({ ctaRef }: CTASectionProps) => {
    return (
        <section ref={ctaRef} className="relative z-10 px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="cta-card group perspective-1000">
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden group-hover:border-purple-500/30 transition-all duration-500">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Decorative background elements */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-1000 delay-200"></div>
                        <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-800 delay-100"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="cta-icon mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h2 className="cta-title text-4xl md:text-6xl font-bold text-white mb-6 group-hover:text-gray-100 transition-colors">
                                Ready to Revolutionize Your Compliance?
                            </h2>
                            
                            {/* Subtitle */}
                            <p className="cta-subtitle text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors">
                                Join thousands of compliance professionals who trust ComplySummarize IA to keep their organizations 
                                secure and compliant. Start your intelligent compliance journey today.
                            </p>
                            
                            {/* Buttons */}
                            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mb-10">
                                <Button 
                                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white text-lg px-10 py-4 rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <Upload className="mr-3 w-5 h-5" />
                                    Start Compliance Analysis
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 text-lg px-10 py-4 rounded-xl transition-all duration-300"
                                >
                                    View Enterprise Plans
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="cta-stats flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                                <div className="flex items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <span className="font-medium">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <Users className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="font-medium">10K+ Compliance Docs</span>
                                </div>
                                <div className="flex items-center group-hover:text-gray-300 transition-colors">
                                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <Shield className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="font-medium">SOC 2 Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 