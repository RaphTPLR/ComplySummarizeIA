import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
    pulseAnimation: any
}

export const Header = ({ pulseAnimation }: HeaderProps) => {
    const location = useLocation()
    
    // Helper function to determine if a route is active
    const isActiveRoute = (path: string) => {
        if (path === '/landing') {
            return location.pathname === '/' || location.pathname === '/landing'
        }
        return location.pathname === path
    }
    
    // Helper function to get link classes
    const getLinkClasses = (path: string) => {
        const baseClasses = "transition-colors duration-300 relative"
        const activeClasses = "text-white font-medium"
        const inactiveClasses = "text-gray-300 hover:text-white"
        
        return isActiveRoute(path) 
            ? `${baseClasses} ${activeClasses}` 
            : `${baseClasses} ${inactiveClasses}`
    }

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
                    <Link to="/landing" className={getLinkClasses('/landing')}>
                        Accueil
                        {isActiveRoute('/landing') && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                layoutId="activeTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </Link>
                    <Link to="/features" className={getLinkClasses('/features')}>
                        Fonctionnalités
                        {isActiveRoute('/features') && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                layoutId="activeTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </Link>
                    <Link to="/demo" className={getLinkClasses('/demo')}>
                        Démo
                        {isActiveRoute('/demo') && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                layoutId="activeTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </Link>
                    <Link to="/pricing" className={getLinkClasses('/pricing')}>
                        Tarifs
                        {isActiveRoute('/pricing') && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                layoutId="activeTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </Link>
                </div>
                <div className="flex justify-end col-span-1"></div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 ">
                    Essai Gratuit
                </Button>
            </nav>
        </motion.header>
    )
} 