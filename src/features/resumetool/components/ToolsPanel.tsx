import { motion } from 'framer-motion'
import { Settings, Play, RotateCcw, Loader } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tool } from '../types'

interface ToolsPanelProps {
    tools: Tool[]
    selectedTool: string
    setSelectedTool: (toolId: string) => void
    processDocuments: () => void
    uploadedFiles: File[]
    isProcessing: boolean
    resetAll: () => void
}

export const ToolsPanel = ({
    tools,
    selectedTool,
    setSelectedTool,
    processDocuments,
    uploadedFiles,
    isProcessing,
    resetAll
}: ToolsPanelProps) => {
    return (
        <motion.div
            className="lg:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Outils d'Analyse
            </h3>
            <div className="space-y-3">
                {tools.map((tool) => {
                    const ToolIcon = tool.icon
                    return (
                        <motion.button
                            key={tool.id}
                            onClick={() => setSelectedTool(tool.id)}
                            className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${selectedTool === tool.id
                                ? 'border-purple-500 bg-purple-500/20'
                                : 'border-white/10 bg-white/5 hover:border-white/20'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-start space-x-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <ToolIcon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm">{tool.name}</h4>
                                    <p className="text-xs text-gray-400 mt-1">{tool.description}</p>
                                </div>
                            </div>
                        </motion.button>
                    )
                })}
            </div>

            {/* Control Buttons */}
            <div className="mt-6 space-y-3">
                <Button
                    onClick={processDocuments}
                    disabled={uploadedFiles.length === 0 || isProcessing}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
                >
                    {isProcessing ? (
                        <span className="flex items-center justify-center">
                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                            Traitement...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center">
                            <Play className="w-4 h-4 mr-2" />
                            Lancer l'Analyse
                        </span>
                    )}
                </Button>
                <Button
                    onClick={resetAll}
                    variant="secondary"
                    className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 py-3"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Réinitialiser
                </Button>
            </div>
        </motion.div>
    )
} 