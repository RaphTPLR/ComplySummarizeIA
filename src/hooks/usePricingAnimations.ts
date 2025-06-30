import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UsePricingAnimationsProps {
    heroRef: RefObject<HTMLDivElement>
    pricingRef: RefObject<HTMLDivElement>
    faqRef: RefObject<HTMLDivElement>
    ctaRef: RefObject<HTMLDivElement>
}

export const usePricingAnimations = ({
    heroRef,
    pricingRef,
    faqRef,
    ctaRef
}: UsePricingAnimationsProps) => {
    useEffect(() => {
        // Hero animation
        if (heroRef.current) {
            gsap.fromTo(".pricing-hero-title", 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
            gsap.fromTo(".pricing-hero-subtitle", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
            )
        }

        // Pricing cards animation
        if (pricingRef.current) {
            const cards = pricingRef.current.querySelectorAll('.pricing-card')
            cards.forEach((card, index) => {
                gsap.fromTo(card,
                    { y: 100, opacity: 0, scale: 0.8 },
                    {
                        y: 0, opacity: 1, scale: 1,
                        duration: 1.2,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )

                // Card hover animations
                const cardElement = card as HTMLElement
                cardElement.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
                
                cardElement.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            })
        }

        // FAQ animation
        if (faqRef.current) {
            const faqItems = faqRef.current.querySelectorAll('.faq-item')
            gsap.fromTo(faqItems,
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: faqRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        // CTA animation
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [heroRef, pricingRef, faqRef, ctaRef])
} 