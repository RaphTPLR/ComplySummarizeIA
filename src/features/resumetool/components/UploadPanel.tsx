import { motion } from 'framer-motion'
import { Check, File, FileText, Upload } from 'lucide-react'

interface UploadPanelProps {
    uploadedFiles: File[]
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const UploadPanel = ({ uploadedFiles, handleFileUpload }: UploadPanelProps) => {
    const getFileIcon = (fileName: string) => {
        const ext = fileName.split('.').pop()?.toLowerCase()
        switch (ext) {
            case 'pdf':
                return FileText
            default:
                return File
        }
    }

    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {/* Upload Zone */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-72">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Zone d'Upload
                </h3>
                <div className="border-2 border-dashed border-white/20 rounded-xl h-48 flex flex-col items-center justify-center hover:border-purple-500/50 transition-colors duration-300">
                    <input
                        type="file"
                        multiple
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer text-center px-6">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-white font-medium mb-2">
                            Glissez vos documents ici ou cliquez pour sélectionner
                        </p>
                        <p className="text-xs text-gray-400">
                            Formats supportés: PDF
                        </p>
                    </label>
                </div>
            </div>

            {/* Uploaded Files */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex-1">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Documents Chargés ({uploadedFiles.length})
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1 scrollbar-simple">
                    {uploadedFiles.length === 0 ? (
                        <p className="text-gray-400 text-center py-8">
                            Aucun document chargé
                        </p>
                    ) : (
                        uploadedFiles.map((file, index) => {
                            const FileIcon = getFileIcon(file.name)
                            return (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                                    <FileIcon className="w-8 h-8 text-blue-400" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-medium truncate">{file.name}</p>
                                        <p className="text-sm text-gray-400">
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                    <Check className="w-5 h-5 text-emerald-400" />
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </motion.div>
    )
} 