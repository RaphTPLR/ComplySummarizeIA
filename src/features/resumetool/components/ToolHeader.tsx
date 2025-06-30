import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowLeft, Brain } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const ToolHeader = () => {
    const navigate = useNavigate()

    const handleBackToLanding = () => {
        navigate('/landing')
    }

    return (
        <motion.div
            className="text-end mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Back Button */}
            <div className="mb-6 w-48">
                <Button
                    onClick={handleBackToLanding}
                    variant="secondary"
                    className="flex items-center space-x-2 bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour à l'accueil</span>
                </Button>
            </div>
            <div className="flex items-center flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                    Studio d'Analyse de Conformité
                </h1>
                <p className="text-xl text-gray-300">
                    Interface professionnelle pour l'analyse et le traitement de vos documents
                </p>
            </div>
        </motion.div>
    )
} 