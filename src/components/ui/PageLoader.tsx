import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'

interface PageLoaderProps {
    text?: string
    showProgress?: boolean
    progress?: number
}

export const PageLoader = ({ 
    text = 'Chargement de ComplySummarizeIA...', 
    showProgress = false,
    progress = 0 
}: PageLoaderProps) => {
    return (
        <PageLayout>
            <div className="min-h-screen flex items-center justify-center relative">
                {/* Main Content */}
                <motion.div
                    className="text-center space-y-8 z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Logo Container */}
                    <motion.div
                        className="relative mx-auto w-32 h-32"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, -360]
                                    }}
                                    transition={{
                                        scale: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        rotate: {
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }}
                                >
                                    <Brain className="w-16 h-16 text-white" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Orbiting Particles */}
                        {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transformOrigin: '0 0'
                                }}
                                animate={{
                                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Brand Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-4xl font-bold text-white mb-2">
                            ComplySummarizeIA
                        </h1>
                        <p className="text-lg text-gray-300">
                            Intelligence Artificielle pour la Conformité
                        </p>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.p
                            className="text-white font-medium mb-4"
                            animate={{
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {text}
                        </motion.p>

                        {/* Progress Dots */}
                        <div className="flex justify-center space-x-2 mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Progress Bar (Optional) */}
                        {showProgress && (
                            <motion.div
                                className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Glow Effects */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.6, 0.3, 0.6]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>
            </div>
        </PageLayout>
    )
} 