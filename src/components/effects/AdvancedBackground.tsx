'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ParticleField } from './ParticleField'
import { FloatingElements } from './FloatingElements'

export const AdvancedBackground = () => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const location = useLocation()
    const controls = useAnimationControls()

    // Trigger transition effect
    useEffect(() => {
        setIsTransitioning(true)
        controls.start({
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 1],
            filter: ['blur(20px)', 'blur(0px)', 'blur(0px)'],
            transition: { duration: 2, ease: [0.22, 1, 0.36, 1] }
        })

        const timer = setTimeout(() => {
            setIsTransitioning(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [location.pathname, controls])

    return (
        <div className="fixed inset-0 z-0">
            {/* Base gradient background */}
            <div 
                className="absolute inset-0 w-full h-full"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
            />
            
            {/* Particle Field */}
            <ParticleField />
            
            {/* Floating Elements */}
            <FloatingElements />

            {/* Transition overlay */}
            {isTransitioning && (
                <>
                    {/* Morphing overlay */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={controls}
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
                        }}
                    />
                    
                    {/* Grid distortion effect */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2 }}
                    >
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="transitionGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path 
                                        d="M 60 0 L 0 0 0 60" 
                                        fill="none" 
                                        stroke="rgba(139, 92, 246, 0.5)" 
                                        strokeWidth="1"
                                    />
                                </pattern>
                            </defs>
                            <motion.rect
                                width="100%"
                                height="100%"
                                fill="url(#transitionGrid)"
                                animate={{
                                    x: [0, -60, 0],
                                    y: [0, -60, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            />
                        </svg>
                    </motion.div>

                    {/* Particle burst */}
                    <motion.div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 30 }, (_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                }}
                                initial={{ scale: 0, opacity: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 0.5) * 800,
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.03,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            />
                        ))}
                    </motion.div>
                </>
            )}

            {/* Static background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full filter blur-3xl" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
        </div>
    )
} 