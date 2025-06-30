import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
    pulseAnimation: any
}

export const Header = ({ pulseAnimation }: HeaderProps) => {
    return (
        <motion.header 
            className="relative z-10 px-6 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="max-w-7xl mx-auto grid grid-cols-6 justify-between items-center">
                <div className="flex items-center space-x-2 col-span-2">
                    <motion.div 
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
                        animate={pulseAnimation}
                    >
                        <Target className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-xl font-bold text-white">ComplySummarize IA</span>
                </div>
                <div className="hidden md:flex justify-center space-x-8 col-span-2">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                </div>
                <div className="flex justify-end col-span-1"></div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 ">
                    Try Free
                </Button>
            </nav>
        </motion.header>
    )
} 