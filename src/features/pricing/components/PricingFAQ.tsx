import { RefObject } from 'react'

interface PricingFAQProps {
    faqRef: RefObject<HTMLDivElement>
}

interface FAQ {
    question: string
    answer: string
}

export const PricingFAQ = ({ faqRef }: PricingFAQProps) => {
    const faqs: FAQ[] = [
        {
            question: "Comment fonctionne l'analyse des documents ?",
            answer: "Notre IA analyse vos documents en utilisant des modèles de langage avancés. Elle extrait automatiquement les informations clés, génère des résumés structurés et identifie les points d'attention importants."
        },
        {
            question: "Quels formats de documents sont supportés ?",
            answer: "Nous supportons PDF. Notre système peut traiter des contrats, rapports, normes, politiques et tout type de document textuel."
        },
        {
            question: "Mes données sont-elles sécurisées ?",
            answer: "Absolument. Nous utilisons un chiffrement de bout en bout, nos serveurs sont certifiés SOC 2, et nous respectons le RGPD. Vos documents ne sont jamais stockés après traitement."
        },
        {
            question: "Puis-je annuler mon abonnement à tout moment ?",
            answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais. Votre accès restera actif jusqu'à la fin de votre période de facturation."
        },
        {
            question: "Y a-t-il une période d'essai gratuite ?",
            answer: "Oui ! Tous nos plans incluent un essai gratuit de 14 jours. Aucune carte de crédit requise pour commencer."
        }
    ]

    return (
        <section ref={faqRef} className="relative z-10 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Questions Fréquentes</h2>
                    <p className="text-xl text-gray-300">
                        Tout ce que vous devez savoir sur notre assistant IA
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 