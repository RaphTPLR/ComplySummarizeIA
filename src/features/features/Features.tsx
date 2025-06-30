'use client'

import { useRef } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/layout/Header'

// Features Components
import { FeaturesHero } from './components/FeaturesHero'
import { FeaturesGrid } from './components/FeaturesGrid'
import { FeaturesComparison } from './components/FeaturesComparison'
import { FeaturesCTA } from './components/FeaturesCTA'

// Hooks
import { useFeaturesAnimations } from '@/hooks/useFeaturesAnimations'
import { Footer } from '@/components/layout/Footer'

export default function Features() {
    // Refs for GSAP animations
    const heroRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)
    const comparisonRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)

    // Initialize GSAP animations
    useFeaturesAnimations({
        heroRef,
        gridRef,
        comparisonRef,
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
            <FeaturesHero heroRef={heroRef} />

            {/* Features Grid Section - Main Content */}
            <FeaturesGrid gridRef={gridRef} />

            {/* Comparison Section */}
            <FeaturesComparison comparisonRef={comparisonRef} />

            {/* CTA Section */}
            <FeaturesCTA ctaRef={ctaRef} />

            {/* Footer */}
            <Footer footerRef={footerRef} />
        </PageLayout>
    )
}