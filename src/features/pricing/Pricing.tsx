'use client'

import { useRef } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/layout/Header'

// Pricing Components
import { PricingHero } from './components/PricingHero'
import { PricingCards } from './components/PricingCards'
import { PricingFAQ } from './components/PricingFAQ'
import { PricingCTA } from './components/PricingCTA'

// Hooks
import { usePricingAnimations } from '@/hooks/usePricingAnimations'
import { Footer } from '@/components/layout/Footer' 

export default function Pricing() {
    // Refs for GSAP animations
    const heroRef = useRef<HTMLDivElement>(null)
    const pricingRef = useRef<HTMLDivElement>(null)
    const faqRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)

    // Initialize GSAP animations
    usePricingAnimations({
        heroRef,
        pricingRef,
        faqRef,
        ctaRef
    })

    // Animation configuration for header
    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <PageLayout>
            {/* Header */}
            <Header pulseAnimation={pulseAnimation} />

            {/* Hero Section */}
            <PricingHero heroRef={heroRef} />

            {/* Pricing Cards */}
            <PricingCards pricingRef={pricingRef} />

            {/* FAQ Section */}
            <PricingFAQ faqRef={faqRef} />

            {/* CTA Section */}
            <PricingCTA ctaRef={ctaRef} />
            <Footer footerRef={footerRef} />
        </PageLayout>
    )
}