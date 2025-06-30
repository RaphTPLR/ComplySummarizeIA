'use client'

import { useRef } from 'react'
import { FloatingElements } from '@/components/effects/FloatingElements'
import { ParticleField } from '@/components/effects/ParticleField'

// Landing Components
import { Header } from './components/Header'
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <ParticleField />
            <FloatingElements />
            
            {/* Original Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]"></div>

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
        </div>
    )
}

