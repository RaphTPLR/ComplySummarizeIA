'use client'

import { useRef } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'

// Landing Components
import { Header } from '@/components/layout/Header'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

// Hooks
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'

export default function Landing() {
    // Refs for GSAP animations
    const heroRef = useRef<HTMLDivElement>(null)
    const uploadRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)

    // Initialize GSAP animations
    useGSAPAnimations({
        heroRef,
        uploadRef,
        featuresRef,
        ctaRef,
        footerRef
    })

    // Animation variants and configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const floatAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const uploadAreaVariants = {
        idle: { 
            borderColor: "rgb(107 114 128)",
            backgroundColor: "rgba(17, 24, 39, 0.3)"
        },
        hover: { 
            borderColor: "rgb(147 51 234)",
            backgroundColor: "rgba(147, 51, 234, 0.1)",
            scale: 1.02
        }
    }

    return (
        <PageLayout>
            {/* Header */}
            <Header pulseAnimation={pulseAnimation} />

            {/* Hero Section */}
            <HeroSection
                heroRef={heroRef}
                uploadRef={uploadRef}
                containerVariants={containerVariants}
                itemVariants={itemVariants}
                floatAnimation={floatAnimation}
                uploadAreaVariants={uploadAreaVariants}
            />

            {/* Features Section */}
            <FeaturesSection featuresRef={featuresRef} />

            {/* CTA Section */}
            <CTASection ctaRef={ctaRef} />

            {/* Footer */}
            <Footer footerRef={footerRef} />
        </PageLayout>
    )
}

