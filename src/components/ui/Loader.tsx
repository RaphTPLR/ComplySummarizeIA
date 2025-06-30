import { motion } from 'framer-motion'
import { Brain, Zap, FileText, Target } from 'lucide-react'

interface LoaderProps {
    size?: 'sm' | 'md' | 'lg'
    text?: string
    variant?: 'default' | 'analysis' | 'upload'
}

const Loader = ({ size = 'md', text = 'Chargement...', variant = 'default' }: LoaderProps) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-24 h-24'
    }

    const textSizes = {
        sm: 'text-sm',
        md: 'text-lg',
        lg: 'text-xl'
    }

    const getVariantConfig = () => {
        switch (variant) {
            case 'analysis':
                return {
                    icon: Brain,
                    text: text || 'Analyse en cours...',
                    color: 'from-purple-500 to-blue-500'
                }
            case 'upload':
                return {
                    icon: FileText,
                    text: text || 'Traitement des documents...',
                    color: 'from-blue-500 to-cyan-500'
                }
            default:
                return {
                    icon: Brain,
                    text: text || 'Chargement...',
                    color: 'from-purple-500 to-blue-500'
                }
        }
    }

    const config = getVariantConfig()
    const IconComponent = config.icon

    return (
        <div className="flex flex-col items-center justify-center space-y-6 p-8">
            {/* Main Loader Container */}
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    className={`${sizeClasses[size]} rounded-full border-2 border-transparent bg-gradient-to-r ${config.color} p-1`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-sm"></div>
                </motion.div>

                {/* Inner Icon */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <IconComponent 
                        className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'} text-white`} 
                    />
                </motion.div>

                {/* Floating Particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: '0 0'
                        }}
                        animate={{
                            x: [0, Math.cos(i * 60 * Math.PI / 180) * (size === 'lg' ? 40 : size === 'md' ? 30 : 20)],
                            y: [0, Math.sin(i * 60 * Math.PI / 180) * (size === 'lg' ? 40 : size === 'md' ? 30 : 20)],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Progress Dots */}
            <div className="flex space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Loading Text */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className={`${textSizes[size]} font-medium text-white mb-1`}>
                    {config.text}
                </p>
                <motion.p
                    className="text-sm text-gray-400"
                    animate={{
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Veuillez patienter...
                </motion.p>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className={`w-32 h-32 bg-gradient-to-r ${config.color} rounded-full blur-3xl opacity-20 mx-auto`}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    )
}

export default Loader