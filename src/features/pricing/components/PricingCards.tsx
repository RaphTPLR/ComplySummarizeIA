import { ArrowRight, Check, Sparkles, X } from 'lucide-react'
import { RefObject } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface PricingCardsProps {
    pricingRef: RefObject<HTMLDivElement>
}

interface Plan {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    limitations: string[]
    popular: boolean
    buttonText: string
    color: string
}

export const PricingCards = ({ pricingRef }: PricingCardsProps) => {
    const plans: Plan[] = [
        {
            name: "Starter",
            price: "9",
            period: "/mois",
            description: "Parfait pour les professionnels indépendants",
            features: [
                "50 documents par mois",
                "Résumés automatiques",
                "Points clés extraits",
                "Support par email",
                "Format PDF",    
                "Historique 30 jours"
            ],
            limitations: [
                "Pas d'analyse avancée",
                "Pas d'intégrations API",
                "Pas de support prioritaire"
            ],
            popular: false,
            buttonText: "Commencer",
            color: "purple"
        },
        {
            name: "Professional",
            price: "29",
            period: "/mois",
            description: "Idéal pour les équipes et PME",
            features: [
                "500 documents par mois",
                "Résumés + Analyse complète",
                "Suggestions d'actions",
                "Détection des risques",
                "Support prioritaire",
                "Tous formats supportés",
                "Historique illimité",
                "Collaboration équipe",
                "Templates personnalisés"
            ],
            limitations: [
                "Pas d'intégrations avancées",
                "Limite de 10 utilisateurs"
            ],
            popular: true,
            buttonText: "Essayer 14 jours",
            color: "blue"
        },
        {
            name: "Enterprise",
            price: "99",
            period: "/mois",
            description: "Pour les grandes organisations",
            features: [
                "Documents illimités",
                "IA personnalisée",
                "Conformité RGPD/SOX",
                "Intégrations API",
                "Support dédié 24/7",
                "Formation équipe",
                "Tableaux de bord avancés",
                "Utilisateurs illimités",
                "Sécurité renforcée",
                "SLA garantis"
            ],
            limitations: [],
            popular: false,
            buttonText: "Nous contacter",
            color: "emerald"
        }
    ]

    return (
        <section ref={pricingRef} id="pricing" className="relative z-10 px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing-card relative ${plan.popular ? 'scale-105' : ''}`}>
                            {plan.popular && (
                                <div className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                        <Sparkles className="w-3 h-3 mr-1" />
                                        Plus Populaire
                                    </Badge>
                                </div>
                            )}
                            
                            <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full overflow-hidden hover:border-${plan.color}-500/30 transition-all duration-500 group`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}-500/5 to-${plan.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 mb-6">{plan.description}</p>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl font-bold text-white">{plan.price}€</span>
                                            <span className="text-gray-400 ml-1">{plan.period}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-300">
                                                    <div className={`w-5 h-5 bg-${plan.color}-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                                                        <Check className={`w-3 h-3 text-${plan.color}-400`} />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                            {plan.limitations.map((limitation, idx) => (
                                                <li key={idx} className="flex items-center text-gray-500">
                                                    <div className="w-5 h-5 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                        <X className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                    {limitation}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <Button 
                                        className={`w-full bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-700 hover:from-${plan.color}-700 hover:to-${plan.color}-800 text-white`}
                                    >
                                        {plan.buttonText}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Decorative elements */}
                                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${plan.color}-500/10 rounded-full group-hover:scale-125 transition-transform duration-700`}></div>
                                <div className={`absolute -bottom-5 -left-5 w-16 h-16 bg-${plan.color}-600/10 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 