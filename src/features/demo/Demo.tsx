'use client'

import { useRef } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/layout/Header'

// Demo Components
import { DemoHero } from './components/DemoHero'
import { DemoSteps } from './components/DemoSteps'
import { DemoResults } from './components/DemoResults'
import { DemoCTA } from './components/DemoCTA'

// Hooks
import { useDemoAnimations } from '@/hooks/useDemoAnimations'
import { Footer } from '@/components/layout/Footer'

export default function Demo() {
    // Refs for GSAP animations
    const heroRef = useRef<HTMLDivElement>(null)
    const stepsRef = useRef<HTMLDivElement>(null)
    const resultsRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)
    // Initialize GSAP animations
    useDemoAnimations({
        heroRef,
        stepsRef,
        resultsRef,
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
            <DemoHero heroRef={heroRef} />

            {/* Steps Section - Main Content */}
            <DemoSteps stepsRef={stepsRef} />

            {/* Results Section */}
            <DemoResults resultsRef={resultsRef} />

            {/* CTA Section */}
            <DemoCTA ctaRef={ctaRef} />
            <Footer footerRef={footerRef} />
        </PageLayout>
    )
}