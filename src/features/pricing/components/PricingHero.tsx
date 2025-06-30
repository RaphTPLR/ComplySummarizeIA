import { Badge } from '@/components/ui/Badge'
import { Sparkles } from 'lucide-react'
import { RefObject } from 'react'

interface PricingHeroProps {
    heroRef: RefObject<HTMLDivElement>
}

export const PricingHero = ({ heroRef }: PricingHeroProps) => {
    return (
        <section ref={heroRef} className="relative z-10 px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Plans Transparents
                </Badge>
                
                <h1 className="pricing-hero-title text-5xl md:text-6xl font-bold text-white mb-6">
                    Choisissez votre plan d'
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Intelligence Documentaire
                    </span>
                </h1>
                
                <p className="pricing-hero-subtitle text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Transformez vos documents en insights actionables. Commencez gratuitement, évoluez selon vos besoins.
                </p>
            </div>
        </section>
    )
} 