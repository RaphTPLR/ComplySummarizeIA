import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger)

interface GSAPAnimationsProps {
    children: React.ReactNode
    className?: string
    animationType?: 'fadeUp' | 'typewriter' | 'morphText' | 'float' | 'pulse' | 'glitch'
    delay?: number
    duration?: number
    trigger?: string
}

export const GSAPAnimations = ({ 
    children, 
    className = '', 
    animationType = 'fadeUp',
    delay = 0,
    duration = 1,
    trigger
}: GSAPAnimationsProps) => {
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!elementRef.current) return

        const element = elementRef.current
        const tl = gsap.timeline()

        // Initial state setup
        gsap.set(element, { 
            opacity: 0,
            y: animationType === 'fadeUp' ? 50 : 0,
            scale: animationType === 'pulse' ? 0.8 : 1,
        })

        const animateElement = () => {
            switch (animationType) {
                case 'fadeUp':
                    tl.to(element, {
                        opacity: 1,
                        y: 0,
                        duration,
                        delay,
                        ease: "power3.out"
                    })
                    break

                case 'typewriter':
                    const text = element.textContent || ''
                    element.textContent = ''
                    tl.to(element, {
                        opacity: 1,
                        duration: 0.1
                    }).to(element, {
                        text: text,
                        duration: duration * 2,
                        delay,
                        ease: "none"
                    })
                    break

                case 'morphText':
                    const originalText = element.textContent || ''
                    const scrambledText = originalText.split('').map(() => 
                        String.fromCharCode(Math.floor(Math.random() * 26) + 65)
                    ).join('')
                    
                    element.textContent = scrambledText
                    tl.to(element, {
                        opacity: 1,
                        duration: 0.1
                    }).to(element, {
                        text: originalText,
                        duration,
                        delay,
                        ease: "power2.out"
                    })
                    break

                case 'float':
                    tl.to(element, {
                        opacity: 1,
                        y: 0,
                        duration,
                        delay,
                        ease: "power2.out"
                    }).to(element, {
                        y: -10,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "power2.inOut"
                    })
                    break

                case 'pulse':
                    tl.to(element, {
                        opacity: 1,
                        scale: 1,
                        duration,
                        delay,
                        ease: "back.out(1.7)"
                    }).to(element, {
                        scale: 1.05,
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "power2.inOut"
                    })
                    break

                case 'glitch':
                    tl.to(element, {
                        opacity: 1,
                        duration: 0.1,
                        delay
                    })
                    
                    // Create glitch effect
                    for (let i = 0; i < 10; i++) {
                        tl.to(element, {
                            x: Math.random() * 6 - 3,
                            duration: 0.05,
                            ease: "power2.inOut"
                        }, i * 0.1)
                    }
                    
                    tl.to(element, {
                        x: 0,
                        duration: 0.2,
                        ease: "power2.out"
                    })
                    break

                default:
                    tl.to(element, {
                        opacity: 1,
                        duration,
                        delay,
                        ease: "power2.out"
                    })
            }
        }

        if (trigger) {
            ScrollTrigger.create({
                trigger: trigger,
                start: "top 80%",
                onEnter: animateElement,
                once: true
            })
        } else {
            animateElement()
        }

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
        }
    }, [animationType, delay, duration, trigger])

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    )
}

// Hook for custom GSAP animations
export const useGSAPAnimation = () => {
    const elementRef = useRef<HTMLElement>(null)

    const animateOnScroll = (animation: gsap.TweenVars, triggerOptions?: ScrollTrigger.Vars) => {
        if (!elementRef.current) return

        ScrollTrigger.create({
            trigger: elementRef.current,
            start: "top 80%",
            ...triggerOptions,
            onEnter: () => {
                gsap.to(elementRef.current, animation)
            }
        })
    }

    const createTimeline = () => gsap.timeline()

    return { elementRef, animateOnScroll, createTimeline, gsap }
} 