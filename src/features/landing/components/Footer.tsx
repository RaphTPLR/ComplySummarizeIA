import { Github, Linkedin, Mail, MapPin, Phone, Target, Twitter } from 'lucide-react'
import { RefObject } from 'react'

interface FooterProps {
    footerRef: RefObject<HTMLDivElement>
}

export const Footer = ({ footerRef }: FooterProps) => {
    return (
        <footer ref={footerRef} className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="footer-element">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">ComplySummarize IA</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transform your compliance documents into actionable intelligence with cutting-edge AI technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group">
                                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group">
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-element">
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a></li>
                            <li><a href="#documentation" className="text-gray-300 hover:text-purple-400 transition-colors">Documentation</a></li>
                            <li><a href="#integrations" className="text-gray-300 hover:text-purple-400 transition-colors">Integrations</a></li>
                            <li><a href="#api" className="text-gray-300 hover:text-purple-400 transition-colors">API</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-element">
                        <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
                            <li><a href="#status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</a></li>
                            <li><a href="#security" className="text-gray-300 hover:text-blue-400 transition-colors">Security</a></li>
                            <li><a href="#compliance" className="text-gray-300 hover:text-blue-400 transition-colors">Compliance</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-element">
                        <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-300">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                                    <Mail className="w-4 h-4 text-emerald-400" />
                                </div>
                                <span className="text-sm">contact@complysummarize.ai</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                    <Phone className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start text-gray-300">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                    <MapPin className="w-4 h-4 text-purple-400" />
                                </div>
                                <span className="text-sm leading-relaxed">
                                    123 Innovation Drive<br />
                                    San Francisco, CA 94107
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-element border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 ComplySummarize IA. All rights reserved.
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm">
                        <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </footer>
    )
} 