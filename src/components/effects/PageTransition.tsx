'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ReactNode, useEffect, useState } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation()
    const [isTransitioning, setIsTransitioning] = useState(false)
    
    // Track route changes for transition timing
    useEffect(() => {
        setIsTransitioning(true)
        const timer = setTimeout(() => {
            setIsTransitioning(false)
        }, 2000) // Match the 3D camera transition duration
        
        return () => clearTimeout(timer)
    }, [location.pathname])

    // Complex transition variants
    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: 50,
            rotateX: 10,
            filter: 'blur(10px)',
        },
        in: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
        },
        out: {
            opacity: 0,
            scale: 1.05,
            y: -50,
            rotateX: -10,
            filter: 'blur(10px)',
        }
    }

    const pageTransition = {
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth transition
        duration: 1.2
    }

    // Morphing overlay for seamless transition
    const morphingOverlay = {
        initial: { 
            opacity: 0, 
            scale: 0,
            borderRadius: '50%'
        },
        animate: isTransitioning ? {
            opacity: [0, 0.8, 0],
            scale: [0, 3, 0],
            borderRadius: ['50%', '20%', '0%']
        } : {
            opacity: 0,
            scale: 0
        },
        transition: {
            duration: 2,
            ease: [0.22, 1, 0.36, 1]
        }
    }

    return (
        <div className="relative">
            {/* Morphing overlay for transition effect */}
            <motion.div
                className="fixed inset-0 z-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
                    transformOrigin: 'center center'
                }}
                variants={morphingOverlay}
                initial="initial"
                animate="animate"
            />
            
            {/* Page content with smooth transitions */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                    style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            
            {/* Particle burst effect during transition */}
            {isTransitioning && (
                <motion.div
                    className="fixed inset-0 z-40 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5 }}
                >
                    {Array.from({ length: 50 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                            style={{
                                left: '50%',
                                top: '50%',
                            }}
                            initial={{ 
                                x: 0, 
                                y: 0, 
                                scale: 0,
                                opacity: 1 
                            }}
                            animate={{ 
                                x: (Math.random() - 0.5) * 1000,
                                y: (Math.random() - 0.5) * 1000,
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 2,
                                delay: i * 0.02,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        />
                    ))}
                </motion.div>
            )}
            
            {/* Distortion grid effect */}
            {isTransitioning && (
                <motion.div
                    className="fixed inset-0 z-30 pointer-events-none overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2 }}
                >
                    <svg className="w-full h-full">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path 
                                    d="M 40 0 L 0 0 0 40" 
                                    fill="none" 
                                    stroke="url(#gridGradient)" 
                                    strokeWidth="0.5"
                                />
                            </pattern>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#grid)"
                            animate={{
                                x: [0, -40, 0],
                                y: [0, -40, 0]
                            }}
                            transition={{
                                duration: 2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        />
                    </svg>
                </motion.div>
            )}
        </div>
    )
} 