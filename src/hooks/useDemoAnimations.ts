import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface UseDemoAnimationsProps {
    heroRef: React.RefObject<HTMLDivElement>
    stepsRef: React.RefObject<HTMLDivElement>
    resultsRef: React.RefObject<HTMLDivElement>
    ctaRef: React.RefObject<HTMLDivElement>
}

export const useDemoAnimations = ({
    heroRef,
    stepsRef,
    resultsRef,
    ctaRef
}: UseDemoAnimationsProps) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Section Animation
            if (heroRef.current) {
                gsap.set(".demo-hero-title", { y: 50, opacity: 0 })
                gsap.set(".demo-hero-subtitle", { y: 30, opacity: 0 })
                
                gsap.to(".demo-hero-title", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: 0.3
                })
                
                gsap.to(".demo-hero-subtitle", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.6
                })
            }

            // Steps Section Animation
            if (stepsRef.current) {
                gsap.set(".step-card", { y: 80, opacity: 0, scale: 0.9 })
                
                ScrollTrigger.create({
                    trigger: stepsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        gsap.to(".step-card", {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            stagger: 0.15
                        })
                    }
                })
            }

            // Results Section Animation
            if (resultsRef.current) {
                gsap.set(".result-card", { y: 60, opacity: 0 })
                gsap.set(".result-stat", { scale: 0, opacity: 0 })
                
                ScrollTrigger.create({
                    trigger: resultsRef.current,
                    start: "top 70%",
                    onEnter: () => {
                        gsap.to(".result-card", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            stagger: 0.1
                        })
                        
                        gsap.to(".result-stat", {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            ease: "back.out(1.7)",
                            stagger: 0.1,
                            delay: 0.3
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
                gsap.set(".cta-features", { y: 30, opacity: 0 })
                
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
                        .to(".cta-features", {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        }, "-=0.2")
                    }
                })
            }

            // Floating elements animation
            gsap.to(".floating-element", {
                y: "-=20",
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.3
            })

            // Pulse animations for interactive elements
            gsap.to(".pulse-element", {
                scale: 1.05,
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.5
            })

        }, [heroRef, stepsRef, resultsRef, ctaRef])

        return () => ctx.revert()
    }, [heroRef, stepsRef, resultsRef, ctaRef])
} 