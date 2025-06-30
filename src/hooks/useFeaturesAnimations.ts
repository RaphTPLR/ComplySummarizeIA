import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface UseFeaturesAnimationsProps {
    heroRef: React.RefObject<HTMLDivElement>
    gridRef: React.RefObject<HTMLDivElement>
    comparisonRef: React.RefObject<HTMLDivElement>
    ctaRef: React.RefObject<HTMLDivElement>
}

export const useFeaturesAnimations = ({
    heroRef,
    gridRef,
    comparisonRef,
    ctaRef
}: UseFeaturesAnimationsProps) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Section Animation
            if (heroRef.current) {
                gsap.set(".features-hero-title", { y: 50, opacity: 0 })
                gsap.set(".features-hero-subtitle", { y: 30, opacity: 0 })
                
                gsap.to(".features-hero-title", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: 0.3
                })
                
                gsap.to(".features-hero-subtitle", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.6
                })
            }

            // Features Grid Animation
            if (gridRef.current) {
                gsap.set(".feature-category", { y: 100, opacity: 0 })
                
                ScrollTrigger.create({
                    trigger: gridRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        gsap.to(".feature-category", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            stagger: 0.2
                        })
                    }
                })
            }

            // Comparison Section Animation
            if (comparisonRef.current) {
                gsap.set(".comparison-table", { y: 80, opacity: 0 })
                gsap.set(".advantage-card", { x: -50, opacity: 0 })
                gsap.set(".limitation-card", { x: 50, opacity: 0 })
                
                ScrollTrigger.create({
                    trigger: comparisonRef.current,
                    start: "top 70%",
                    onEnter: () => {
                        gsap.to(".comparison-table", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        })
                        
                        gsap.to(".advantage-card", {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            delay: 0.3
                        })
                        
                        gsap.to(".limitation-card", {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            delay: 0.5
                        })
                    }
                })
            }

            // CTA Section Animation
            if (ctaRef.current) {
                gsap.set(".cta-card", { y: 100, opacity: 0, rotationY: 15 })
                gsap.set(".cta-icon", { scale: 0, rotation: -180 })
                gsap.set(".cta-title", { y: 30, opacity: 0 })
                gsap.set(".cta-subtitle", { y: 20, opacity: 0 })
                gsap.set(".cta-buttons", { y: 20, opacity: 0 })
                gsap.set(".cta-trust", { y: 30, opacity: 0 })
                
                ScrollTrigger.create({
                    trigger: ctaRef.current,
                    start: "top 80%",
                    onEnter: () => {
                        const tl = gsap.timeline()
                        
                        tl.to(".cta-card", {
                            y: 0,
                            opacity: 1,
                            rotationY: 0,
                            duration: 1,
                            ease: "power2.out"
                        })
                        .to(".cta-icon", {
                            scale: 1,
                            rotation: 0,
                            duration: 0.8,
                            ease: "back.out(1.7)"
                        }, "-=0.5")
                        .to(".cta-title", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        }, "-=0.6")
                        .to(".cta-subtitle", {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        }, "-=0.4")
                        .to(".cta-buttons", {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        }, "-=0.3")
                        .to(".cta-trust", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        }, "-=0.2")
                    }
                })
            }

            // Floating elements for feature cards
            gsap.to(".feature-card", {
                y: "-=5",
                duration: 3,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.2
            })

            // Pulse animations for icons
            gsap.to(".feature-icon", {
                scale: 1.1,
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.3
            })

            // Highlight animations for pros/cons
            gsap.to(".pros-icon", {
                rotation: 360,
                duration: 10,
                ease: "none",
                repeat: -1
            })

            gsap.to(".cons-icon", {
                rotation: -360,
                duration: 12,
                ease: "none",
                repeat: -1
            })

        }, [heroRef, gridRef, comparisonRef, ctaRef])

        return () => ctx.revert()
    }, [heroRef, gridRef, comparisonRef, ctaRef])
} 