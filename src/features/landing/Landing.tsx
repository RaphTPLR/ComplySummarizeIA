'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Upload, Zap, Shield, Sparkles, ChevronDown, Play, Star, Users, Clock, Download, FileType, Scan, Target, TrendingUp } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { ParticleField } from '../../components/effects/ParticleField'
import { GSAPAnimations } from '../../components/effects/GSAPAnimations'
import { FloatingElements } from '../../components/effects/FloatingElements'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Landing() {
    const heroRef = useRef<HTMLDivElement>(null)
    const uploadRef = useRef<HTMLDivElement>(null)

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

        // Upload area subtle effect (moins intrusif)
        if (uploadRef.current) {
            const uploadArea = uploadRef.current
            
            const handleMouseMove = (e: MouseEvent) => {
                const rect = uploadArea.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const deltaX = (e.clientX - centerX) * 0.02 // Réduit l'effet
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
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const floatAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const uploadAreaVariants = {
        idle: { 
            borderColor: "rgb(107 114 128)",
            backgroundColor: "rgba(17, 24, 39, 0.3)"
        },
        hover: { 
            borderColor: "rgb(147 51 234)",
            backgroundColor: "rgba(147, 51, 234, 0.1)",
            scale: 1.02
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <ParticleField />
            <FloatingElements />
            
            {/* Original Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]"></div>

            {/* Header */}
            <motion.header 
                className="relative z-10 px-6 py-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <motion.div 
                            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
                            animate={pulseAnimation}
                        >
                            <Target className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-xl font-bold text-white">ComplySummarize IA</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                        <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Try Free
                    </Button>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <motion.section 
                ref={heroRef}
                className="relative z-10 px-6 py-20 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div variants={itemVariants} className="mb-6">
                        <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
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

                    {/* Big Upload CTA - Design Original Restauré */}
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
                            variant="secondary" 
                            className="border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 text-lg px-8 py-4 group"
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

            {/* Features Section */}
            <section id="features" className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Why Choose ComplySummarize IA?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The most advanced compliance document analysis platform powered by cutting-edge AI
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            animate={floatAnimation}
                        >
                            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm p-8 h-full">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analysis</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Instant compliance risk assessment and regulatory gap analysis. Get results in under 30 seconds.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
                        >
                            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm p-8 h-full">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Multi-Regulatory Support</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    GDPR, SOX, HIPAA, PCI-DSS, and 50+ other compliance frameworks. Stay ahead of regulations.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
                        >
                            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm p-8 h-full">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Smart Insights & Actions</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    AI-generated summaries, risk scores, and actionable recommendations to improve compliance posture.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 px-6 py-20">
                <motion.div 
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm p-12">
                        <motion.div
                            animate={pulseAnimation}
                            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <TrendingUp className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Revolutionize Your Compliance?
                        </h2>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of compliance professionals who trust ComplySummarize IA to keep their organizations 
                            secure and compliant. Start your intelligent compliance journey today.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 group"
                            >
                                <Upload className="mr-2 w-5 h-5" />
                                Start Compliance Analysis
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button 
                                variant="secondary" 
                                className="border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 text-lg px-8 py-4"
                            >
                                View Enterprise Plans
                            </Button>
                        </div>

                        <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span>4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>10K+ Compliance Docs</span>
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-1" />
                                <span>SOC 2 Certified</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </section>
        </div>
    )
}

