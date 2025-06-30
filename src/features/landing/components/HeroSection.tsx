import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Play, Scan, Upload } from 'lucide-react'
import { RefObject } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
    heroRef: RefObject<HTMLDivElement>
    uploadRef: RefObject<HTMLDivElement>
    containerVariants: any
    itemVariants: any
    floatAnimation: any
    uploadAreaVariants: any
}

export const HeroSection = ({
    heroRef,
    uploadRef,
    containerVariants,
    itemVariants,
    floatAnimation,
    uploadAreaVariants
}: HeroSectionProps) => {
    return (
        <motion.section 
            ref={heroRef}
            className="relative z-10 px-6 py-20 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div variants={itemVariants} className="mb-6">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        <Scan className="w-4 h-4 mr-2" />
                        AI-Powered Compliance Analysis
                    </Badge>
                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Transform Compliance Documents into
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                        Actionable Intelligence
                    </span>
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Upload your compliance documents, contracts, and regulations. Our AI instantly extracts key insights, 
                    identifies risks, and generates comprehensive summaries that keep your business compliant and competitive.
                </motion.p>

                {/* Big Upload CTA */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-12"
                >
                    <motion.div
                        ref={uploadRef}
                        className="max-w-2xl mx-auto p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-dashed border-gray-600 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
                            variants={uploadAreaVariants}
                            initial="idle"
                            whileHover="hover"
                        >
                            <motion.div
                                animate={floatAnimation}
                                className="flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Upload className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Drop Your Compliance Documents</h3>
                                <p className="text-gray-300 mb-6 max-w-md">
                                    Support for PDF, DOCX, TXT, and more. Contracts, policies, regulations, audit reports - we handle it all.
                                </p>
                                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 group">
                                    <Upload className="mr-2 w-5 h-5" />
                                    Choose File or Drop Here
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Quick Demo CTA */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <Button 
                        variant="outline" 
                        className="border border-gray-600 bg-transparent text-gray-300 hover:text-pink-400 text-lg px-8 py-4 group"
                    >
                        <Play className="mr-2 w-5 h-5" />
                        Watch AI in Action
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">99.7%</div>
                        <div className="text-gray-400">Compliance Accuracy</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">&lt;30s</div>
                        <div className="text-gray-400">Analysis Time</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-gray-400">Risk Monitoring</div>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
        </motion.section>
    )
} 