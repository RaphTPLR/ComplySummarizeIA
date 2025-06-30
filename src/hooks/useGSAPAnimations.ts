import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface UseGSAPAnimationsProps {
    heroRef: RefObject<HTMLDivElement>
    uploadRef: RefObject<HTMLDivElement>
    featuresRef: RefObject<HTMLDivElement>
    ctaRef: RefObject<HTMLDivElement>
    footerRef: RefObject<HTMLDivElement>
}

export const useGSAPAnimations = ({
    heroRef,
    uploadRef,
    featuresRef,
    ctaRef,
    footerRef
}: UseGSAPAnimationsProps) => {
    useEffect(() => {
        // Hero section advanced animations
        if (heroRef.current) {
            const tl = gsap.timeline()
            
            tl.from(".hero-badge", {
                scale: 0,
                rotation: 180,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.5
            })
            .from(".hero-title .word", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5")
            .from(".hero-subtitle", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.3")
        }

        // Features cards ScrollTrigger animations
        if (featuresRef.current) {
            const cards = featuresRef.current.querySelectorAll('.feature-card')
            
            cards.forEach((card, index) => {
                gsap.fromTo(card, 
                    {
                        y: 80,
                        opacity: 0,
                        scale: 0.8,
                        rotateY: 25
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        duration: 1.2,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )

                // Hover animation
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            })
        }

        // CTA Section ScrollTrigger animations
        if (ctaRef.current) {
            const ctaCard = ctaRef.current.querySelector('.cta-card')
            const ctaIcon = ctaRef.current.querySelector('.cta-icon')
            const ctaTitle = ctaRef.current.querySelector('.cta-title')
            const ctaSubtitle = ctaRef.current.querySelector('.cta-subtitle')
            const ctaButtons = ctaRef.current.querySelector('.cta-buttons')
            const ctaStats = ctaRef.current.querySelector('.cta-stats')

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaCard,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })

            tl.fromTo(ctaCard, 
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.8,
                    rotateX: 15
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }
            )
            .fromTo(ctaIcon, 
                {
                    scale: 0,
                    rotation: 180
                },
                {
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }, "-=0.8"
            )
            .fromTo(ctaTitle, 
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6"
            )
            .fromTo(ctaSubtitle, 
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5"
            )
            .fromTo(ctaButtons, 
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.4"
            )
            .fromTo(ctaStats, 
                {
                    y: 15,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.3"
            )

            // CTA Card hover effect
            if (ctaCard) {
                ctaCard.addEventListener('mouseenter', () => {
                    gsap.to(ctaCard, {
                        y: -5,
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                ctaCard.addEventListener('mouseleave', () => {
                    gsap.to(ctaCard, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            }
        }

        // Footer ScrollTrigger animations
        if (footerRef.current) {
            const footerElements = footerRef.current.querySelectorAll('.footer-element')
            
            footerElements.forEach((element, index) => {
                gsap.fromTo(element, 
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            })
        }

        // Upload area subtle effect
        if (uploadRef.current) {
            const uploadArea = uploadRef.current
            
            const handleMouseMove = (e: MouseEvent) => {
                const rect = uploadArea.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const deltaX = (e.clientX - centerX) * 0.02
                const deltaY = (e.clientY - centerY) * 0.02
                
                gsap.to(uploadArea, {
                    x: deltaX,
                    y: deltaY,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }

            const handleMouseLeave = () => {
                gsap.to(uploadArea, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }

            uploadArea.addEventListener('mousemove', handleMouseMove)
            uploadArea.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                uploadArea.removeEventListener('mousemove', handleMouseMove)
                uploadArea.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [heroRef, uploadRef, featuresRef, ctaRef, footerRef])
} 