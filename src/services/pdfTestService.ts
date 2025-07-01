import jsPDF from 'jspdf'
import { AnalysisResult } from '@/features/resumetool/types'

export class PDFTestService {
    public static async testPDF(analysisResult: AnalysisResult): Promise<void> {
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        })

        const margin = 20
        let y = margin

        // Test basique avec couleur noire explicite
        pdf.setFontSize(16)
        pdf.setTextColor(0, 0, 0) // Noir pur
        pdf.setFont('helvetica', 'bold')
        pdf.text('TEST - Analyse de Conformité', margin, y)
        y += 20

        // Résumé
        pdf.setFontSize(14)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Résumé:', margin, y)
        y += 10

        pdf.setFontSize(12)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'normal')
        const resumeLines = pdf.splitTextToSize(analysisResult.summary, 170)
        resumeLines.forEach((line: string) => {
            pdf.setTextColor(0, 0, 0) // Réappliquer noir pour chaque ligne
            pdf.text(line, margin, y)
            y += 6
        })
        y += 10

        // Points clés
        pdf.setFontSize(14)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Points Clés:', margin, y)
        y += 10

        pdf.setFontSize(12)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'normal')
        analysisResult.keyPoints.forEach((point, index) => {
            pdf.setTextColor(0, 0, 0)
            pdf.text(`• ${point}`, margin + 5, y)
            y += 8
        })
        y += 10

        // Actions suggérées
        pdf.setFontSize(14)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Actions Suggérées:', margin, y)
        y += 10

        pdf.setFontSize(12)
        pdf.setTextColor(0, 0, 0)
        pdf.setFont('helvetica', 'normal')
        analysisResult.suggestedActions.forEach((action, index) => {
            pdf.setTextColor(0, 0, 0)
            pdf.text(`• ${action}`, margin + 5, y)
            y += 8
        })

        // Sauvegarde avec nom de test
        pdf.save('test-analyse-simple.pdf')
    }
} 