import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FileText, FileImage, File, FileSpreadsheet, Brain, Zap, Shield } from 'lucide-react'

export const FloatingElements = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const elements = container.querySelectorAll('.floating-element')

        elements.forEach((element, index) => {
            // Initial random position
            gsap.set(element, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360,
                scale: 0.8 + Math.random() * 0.4,
                opacity: 0.3 + Math.random() * 0.4
            })

            // Create floating animation
            const tl = gsap.timeline({ repeat: -1 })
            
            tl.to(element, {
                x: `+=${(Math.random() - 0.5) * 400}`,
                y: `+=${(Math.random() - 0.5) * 400}`,
                rotation: `+=${(Math.random() - 0.5) * 180}`,
                duration: 8 + Math.random() * 12,
                ease: "power1.inOut",
                delay: index * 0.5
            })
            .to(element, {
                x: `+=${(Math.random() - 0.5) * 400}`,
                y: `+=${(Math.random() - 0.5) * 400}`,
                rotation: `+=${(Math.random() - 0.5) * 180}`,
                duration: 8 + Math.random() * 12,
                ease: "power1.inOut"
            })

            // Pulse animation
            gsap.to(element, {
                scale: `*=1.1`,
                duration: 2 + Math.random() * 3,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: Math.random() * 2
            })

            // Keep elements within bounds
            const checkBounds = () => {
                const rect = element.getBoundingClientRect()
                const margin = 100

                if (rect.left < -margin || rect.right > window.innerWidth + margin ||
                    rect.top < -margin || rect.bottom > window.innerHeight + margin) {
                    gsap.to(element, {
                        x: Math.random() * (window.innerWidth - 200) + 100,
                        y: Math.random() * (window.innerHeight - 200) + 100,
                        duration: 2,
                        ease: "power2.out"
                    })
                }
            }

            const interval = setInterval(checkBounds, 5000)

            return () => {
                clearInterval(interval)
                tl.kill()
            }
        })

        // Mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX
            const mouseY = e.clientY

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect()
                const elementX = rect.left + rect.width / 2
                const elementY = rect.top + rect.height / 2
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2)
                )

                if (distance < 150) {
                    const force = (150 - distance) / 150
                    const angle = Math.atan2(elementY - mouseY, elementX - mouseX)
                    
                    gsap.to(element, {
                        x: `+=${Math.cos(angle) * force * 20}`,
                        y: `+=${Math.sin(angle) * force * 20}`,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                }
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const icons = [
        FileText, FileImage, File, FileSpreadsheet, Brain, Zap, Shield
    ]

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {Array.from({ length: 15 }, (_, i) => {
                const Icon = icons[i % icons.length]
                return (
                    <div
                        key={i}
                        className="floating-element absolute w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-500/30"
                    >
                        <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                )
            })}
            
            {/* Data streams */}
            {Array.from({ length: 8 }, (_, i) => (
                <div
                    key={`stream-${i}`}
                    className="floating-element absolute w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                />
            ))}
            
            {/* Glowing orbs */}
            {Array.from({ length: 6 }, (_, i) => (
                <div
                    key={`orb-${i}`}
                    className="floating-element absolute w-8 h-8 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-sm"
                />
            ))}
        </div>
    )
} 