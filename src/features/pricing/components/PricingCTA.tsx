import { ArrowRight, Upload } from 'lucide-react'
import { RefObject } from 'react'
import { Button } from '@/components/ui/Button'

interface PricingCTAProps {
    ctaRef: RefObject<HTMLDivElement>
}

export const PricingCTA = ({ ctaRef }: PricingCTAProps) => {
    return (
        <section ref={ctaRef} className="relative z-10 px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Upload className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Prêt à révolutionner votre analyse documentaire ?
                    </h2>
                    
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Rejoignez des milliers de professionnels qui font confiance à notre IA pour analyser leurs documents.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white text-lg px-10 py-4 rounded-xl">
                            <Upload className="mr-3 w-5 h-5" />
                            Commencer Gratuitement
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                        <Button variant="secondary" className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg px-10 py-4 rounded-xl">
                            Planifier une Démo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 