import jsPDF from 'jspdf'
import { AnalysisResult } from '@/features/resumetool/types'

export interface ExportOptions {
    fileName?: string
    includeMetadata?: boolean
    companyLogo?: string
}

export class PDFExportService {
    private static readonly COLORS = {
        // Design system pour PDF (couleurs sombres sur fond blanc)
        primary: '#a855f7', // purple-500
        secondary: '#3b82f6', // blue-500
        accent: '#10b981', // emerald-500
        accentAlt: '#f59e0b', // yellow-500
        background: '#ffffff', // blanc pour PDF
        surface: '#f8fafc', // gray-50
        cardBg: '#f1f5f9', // slate-100
        text: '#1e293b', // slate-800 (texte principal sombre)
        textSecondary: '#475569', // slate-600
        textMuted: '#64748b', // slate-500
        border: '#e2e8f0', // slate-200
        borderDark: '#cbd5e1', // slate-300
        success: '#059669', // emerald-600
        warning: '#d97706', // yellow-600
        danger: '#dc2626', // red-600
    }

    private static readonly FONTS = {
        title: 24,
        subtitle: 18,
        heading: 16,
        subheading: 14,
        body: 12,
        caption: 10,
        small: 8
    }

    private static readonly LAYOUT = {
        margin: 20,
        headerHeight: 60,
        footerHeight: 30,
        sectionSpacing: 15,
        itemSpacing: 8,
        lineHeight: 1.4
    }

    public static async exportAnalysis(
        analysisResult: AnalysisResult,
        options: ExportOptions = {}
    ): Promise<void> {
        const {
            fileName = `analyse-conformite-${new Date().toISOString().split('T')[0]}.pdf`,
            includeMetadata = true
        } = options

        // Configuration PDF - Format A4
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        })

        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        const contentWidth = pageWidth - (this.LAYOUT.margin * 2)
        const contentHeight = pageHeight - this.LAYOUT.headerHeight - this.LAYOUT.footerHeight - (this.LAYOUT.margin * 2)
        
        let currentY = this.LAYOUT.margin + this.LAYOUT.headerHeight
        let pageNumber = 1

        // Page 1 - En-tête et informations principales
        this.addModernHeader(pdf, pageWidth, pageNumber)
        
        // Titre principal avec gradient effect (simulé)
        currentY = this.addGradientTitle(pdf, currentY, contentWidth)
        
        // Metadata compacte avec design moderne
        if (includeMetadata && analysisResult.metadata) {
            currentY = this.addModernMetadata(pdf, analysisResult, currentY, contentWidth)
        }

        // Score de conformité avec design card moderne
        currentY = this.addModernComplianceScore(pdf, analysisResult, currentY, contentWidth)

        // Vérifier si on a besoin d'une nouvelle page
        if (currentY > contentHeight) {
            pdf.addPage()
            pageNumber++
            currentY = this.LAYOUT.margin + this.LAYOUT.headerHeight
            this.addModernHeader(pdf, pageWidth, pageNumber)
        }

        // Fonction helper pour gérer les nouvelles pages
        const handleNewPage = (result: any) => {
            if (typeof result === 'object' && result.newPage) {
                pdf.addPage()
                pageNumber++
                this.addModernHeader(pdf, pageWidth, pageNumber)
                return this.LAYOUT.margin + this.LAYOUT.headerHeight
            }
            return typeof result === 'object' ? result.y : result
        }

        // Résumé avec style moderne
        let result = this.addModernSection(
            pdf,
            'Résumé Exécutif',
            analysisResult.summary,
            currentY,
            contentWidth,
            this.COLORS.primary,
            contentHeight,
            pageWidth,
            pageNumber
        )
        currentY = handleNewPage(result)

        // Points clés
        result = this.addModernListSection(
            pdf,
            'Points Clés Identifiés',
            analysisResult.keyPoints,
            currentY,
            contentWidth,
            this.COLORS.secondary,
            contentHeight,
            pageWidth,
            pageNumber
        )
        currentY = handleNewPage(result)

        // Actions suggérées
        result = this.addModernListSection(
            pdf,
            'Plan d\'Actions Recommandées',
            analysisResult.suggestedActions,
            currentY,
            contentWidth,
            this.COLORS.accent,
            contentHeight,
            pageWidth,
            pageNumber
        )
        currentY = handleNewPage(result)

        // Footer moderne sur chaque page
        for (let i = 1; i <= pageNumber; i++) {
            pdf.setPage(i)
            this.addModernFooter(pdf, pageWidth, pageHeight, i, pageNumber)
        }

        // Sauvegarde
        pdf.save(fileName)
    }

    private static addModernHeader(pdf: jsPDF, pageWidth: number, pageNumber: number): void {
        // Gradient background header (simulé avec dégradé de rectangles)
        this.addGradientBackground(pdf, 0, 0, pageWidth, this.LAYOUT.headerHeight, 
            this.COLORS.primary, this.COLORS.secondary)

        // Logo/Brand avec style moderne
        pdf.setFontSize(this.FONTS.subtitle)
        pdf.setTextColor(255, 255, 255)
        pdf.setFont('helvetica', 'bold')
        pdf.text('ComplySummarize IA', this.LAYOUT.margin, 25)

        // Sous-titre avec accent
        pdf.setFontSize(this.FONTS.caption)
        pdf.setFont('helvetica', 'normal')
        pdf.text('Rapport d\'Analyse de Conformité', this.LAYOUT.margin, 35)

        // Page number avec style
        pdf.setFontSize(this.FONTS.caption)
        pdf.text(`Page ${pageNumber}`, pageWidth - this.LAYOUT.margin - 20, 25)

        // Date
        pdf.text(new Date().toLocaleDateString('fr-FR'), pageWidth - this.LAYOUT.margin - 30, 35)
    }

    private static addGradientBackground(pdf: jsPDF, x: number, y: number, width: number, height: number, color1: string, color2: string): void {
        // Simulation d'un gradient avec plusieurs rectangles
        const steps = 10
        const stepHeight = height / steps
        
        for (let i = 0; i < steps; i++) {
            const ratio = i / (steps - 1)
            const color = this.interpolateColor(color1, color2, ratio)
            
            const [r, g, b] = this.hexToRgb(color)
            pdf.setFillColor(r, g, b)
            pdf.rect(x, y + (i * stepHeight), width, stepHeight, 'F')
        }
    }

    private static addGradientTitle(pdf: jsPDF, y: number, contentWidth: number): number {
        // Background card avec gradient subtil
        const cardHeight = 50
        this.addGradientBackground(pdf, this.LAYOUT.margin, y, contentWidth, cardHeight, 
            '#f8fafc', '#e2e8f0') // Gradient gris clair
        
        // Border élégante
        const [br, bg, bb] = this.hexToRgb(this.COLORS.primary)
        pdf.setDrawColor(br, bg, bb)
        pdf.setLineWidth(1.5)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, cardHeight, 12, 12, 'S')

        // Icône décorative (rectangle coloré)
        pdf.setFillColor(br, bg, bb)
        pdf.rect(this.LAYOUT.margin + 15, y + 15, 4, 20, 'F')

        // Titre principal avec ombre
        pdf.setFontSize(this.FONTS.title)
        pdf.setTextColor(br, bg, bb)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Analyse de Conformité', this.LAYOUT.margin + 30, y + 25)

        // Sous-titre
        pdf.setFontSize(this.FONTS.body)
        const [r2, g2, b2] = this.hexToRgb(this.COLORS.textSecondary)
        pdf.setTextColor(r2, g2, b2)
        pdf.setFont('helvetica', 'normal')
        pdf.text('Rapport généré automatiquement par Intelligence Artificielle', this.LAYOUT.margin + 30, y + 38)

        return y + cardHeight + this.LAYOUT.sectionSpacing
    }

    private static addModernMetadata(pdf: jsPDF, analysisResult: AnalysisResult, y: number, contentWidth: number): number {
        const metadata = analysisResult.metadata!
        const cardHeight = 35
        
        // Card background avec bordure
        const [bg1, bg2, bg3] = this.hexToRgb(this.COLORS.surface)
        pdf.setFillColor(bg1, bg2, bg3)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, cardHeight, 8, 8, 'F')
        
        // Border
        const [br, bg, bb] = this.hexToRgb(this.COLORS.border)
        pdf.setDrawColor(br, bg, bb)
        pdf.setLineWidth(0.5)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, cardHeight, 8, 8, 'S')
        
        // Titre de section
        pdf.setFontSize(this.FONTS.caption)
        const [tr, tg, tb] = this.hexToRgb(this.COLORS.textSecondary)
        pdf.setTextColor(tr, tg, tb)
        pdf.setFont('helvetica', 'bold')
        pdf.text('INFORMATIONS TECHNIQUES', this.LAYOUT.margin + 10, y + 10)

        // Ligne de séparation
        pdf.setDrawColor(br, bg, bb)
        pdf.line(this.LAYOUT.margin + 10, y + 13, this.LAYOUT.margin + contentWidth - 10, y + 13)

        pdf.setFontSize(this.FONTS.small)
        const [tmr, tmg, tmb] = this.hexToRgb(this.COLORS.textMuted)
        pdf.setTextColor(tmr, tmg, tmb)
        pdf.setFont('helvetica', 'normal')

        let textY = y + 20
        let col1 = this.LAYOUT.margin + 10
        let col2 = this.LAYOUT.margin + (contentWidth / 2)

        if (metadata.model_used) {
            pdf.text(`Modèle IA: ${metadata.model_used}`, col1, textY)
        }
        if (metadata.processing_time) {
            pdf.text(`Temps: ${metadata.processing_time.toFixed(2)}s`, col2, textY)
        }
        
        textY += 8
        if (metadata.tokens_used) {
            pdf.text(`Tokens: ${metadata.tokens_used}`, col1, textY)
        }
        if (metadata.document_info?.pages) {
            pdf.text(`Pages: ${metadata.document_info.pages}`, col2, textY)
        }

        return y + cardHeight + this.LAYOUT.sectionSpacing
    }

    private static addModernComplianceScore(pdf: jsPDF, analysisResult: AnalysisResult, y: number, contentWidth: number): number {
        const cardHeight = 70
        
        // Couleur basée sur le score
        const scoreColor = analysisResult.complianceScore >= 80 
            ? this.COLORS.success
            : analysisResult.complianceScore >= 60 
            ? this.COLORS.warning 
            : this.COLORS.danger

        // Card background avec gradient léger
        this.addGradientBackground(pdf, this.LAYOUT.margin, y, contentWidth, cardHeight, 
            '#ffffff', '#f8fafc') // Blanc vers gris très clair

        // Border colorée selon le score avec coins arrondis
        const [br, bg, bb] = this.hexToRgb(scoreColor)
        pdf.setDrawColor(br, bg, bb)
        pdf.setLineWidth(2)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, cardHeight, 12, 12, 'S')

        // Badge de score stylisé
        const badgeX = this.LAYOUT.margin + 20
        const badgeY = y + 20
        const badgeSize = 30

        // Cercle extérieur (ombre)
        pdf.setFillColor(br * 0.3, bg * 0.3, bb * 0.3)
        pdf.circle(badgeX + 1, badgeY + 1, badgeSize/2 + 2, 'F')
        
        // Cercle principal coloré
        pdf.setFillColor(br, bg, bb)
        pdf.circle(badgeX, badgeY, badgeSize/2, 'F')
        
        // Cercle intérieur blanc
        pdf.setFillColor(255, 255, 255)
        pdf.circle(badgeX, badgeY, badgeSize/2 - 3, 'F')
        
        // Pourcentage dans le cercle
        pdf.setFontSize(this.FONTS.heading)
        pdf.setTextColor(br, bg, bb)
        pdf.setFont('helvetica', 'bold')
        const scoreText = `${analysisResult.complianceScore}%`
        const textWidth = pdf.getStringUnitWidth(scoreText) * this.FONTS.heading / pdf.internal.scaleFactor
        pdf.text(scoreText, badgeX - textWidth/2, badgeY + 2)

        // Titre principal
        pdf.setFontSize(this.FONTS.subtitle)
        const [tr, tg, tb] = this.hexToRgb(this.COLORS.text)
        pdf.setTextColor(tr, tg, tb)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Score de Conformité', this.LAYOUT.margin + 60, y + 25)
        
        // Niveau de risque avec style
        pdf.setFontSize(this.FONTS.body)
        const [tsr, tsg, tsb] = this.hexToRgb(this.COLORS.textSecondary)
        pdf.setTextColor(tsr, tsg, tsb)
        pdf.setFont('helvetica', 'normal')
        pdf.text('Niveau de risque:', this.LAYOUT.margin + 60, y + 40)
        
        // Niveau coloré
        pdf.setFontSize(this.FONTS.subheading)
        pdf.setTextColor(br, bg, bb)
        pdf.setFont('helvetica', 'bold')
        pdf.text(analysisResult.riskLevel.toUpperCase(), this.LAYOUT.margin + 110, y + 40)

        // Barre de progression
        const barY = y + 50
        const barWidth = contentWidth - 80
        const barHeight = 8
        
        // Background de la barre
        const [bbg1, bbg2, bbg3] = this.hexToRgb(this.COLORS.border)
        pdf.setFillColor(bbg1, bbg2, bbg3)
        pdf.roundedRect(this.LAYOUT.margin + 60, barY, barWidth, barHeight, 4, 4, 'F')
        
        // Progression colorée
        const progressWidth = (barWidth * analysisResult.complianceScore) / 100
        pdf.setFillColor(br, bg, bb)
        pdf.roundedRect(this.LAYOUT.margin + 60, barY, progressWidth, barHeight, 4, 4, 'F')

        return y + cardHeight + this.LAYOUT.sectionSpacing
    }

    private static addModernSection(
        pdf: jsPDF,
        title: string,
        content: string,
        y: number,
        contentWidth: number,
        color: string,
        contentHeight: number,
        pageWidth: number,
        pageNumber: number
    ): any {
        const maxY = contentHeight - 40 // Marge de sécurité
        
        // Vérifier si on a besoin d'une nouvelle page avant de commencer
        if (y > maxY) {
            return { y: y, newPage: true }
        }

        // Header de section avec style moderne
        const [hr, hg, hb] = this.hexToRgb(color)
        const titleHeight = 20
        
        // Background avec transparence simulée (couleur diluée)
        pdf.setFillColor(hr + (255 - hr) * 0.9, hg + (255 - hg) * 0.9, hb + (255 - hb) * 0.9)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, titleHeight, 8, 8, 'F')
        
        // Border colorée
        pdf.setDrawColor(hr, hg, hb)
        pdf.setLineWidth(1)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, titleHeight, 8, 8, 'S')
        
        // Titre de section
        pdf.setFontSize(this.FONTS.heading)
        pdf.setTextColor(hr, hg, hb)
        pdf.setFont('helvetica', 'bold')
        pdf.text(title, this.LAYOUT.margin + 10, y + 12)

        y += titleHeight + this.LAYOUT.itemSpacing

        // Contenu ligne par ligne avec vérification de page
        pdf.setFontSize(this.FONTS.body)
        pdf.setFont('helvetica', 'normal')

        const lines = pdf.splitTextToSize(content, contentWidth - 20)
        for (const line of lines) {
            // Vérifier si on dépasse la page
            if (y > maxY) {
                return { y: y, newPage: true }
            }
            
            // Écrire la ligne avec couleur noire
            pdf.setTextColor(0, 0, 0)
            pdf.text(line, this.LAYOUT.margin + 10, y)
            y += 6
        }

        return y + this.LAYOUT.sectionSpacing
    }

    private static addModernListSection(
        pdf: jsPDF,
        title: string,
        items: string[],
        y: number,
        contentWidth: number,
        color: string,
        contentHeight: number,
        pageWidth: number,
        pageNumber: number
    ): any {
        const maxY = contentHeight - 40 // Marge de sécurité
        
        // Vérifier si on a besoin d'une nouvelle page avant de commencer
        if (y > maxY) {
            return { y: y, newPage: true }
        }

        // Header de section
        const [hr, hg, hb] = this.hexToRgb(color)
        const titleHeight = 20
        
        // Background avec transparence simulée (couleur diluée)
        pdf.setFillColor(hr + (255 - hr) * 0.9, hg + (255 - hg) * 0.9, hb + (255 - hb) * 0.9)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, titleHeight, 8, 8, 'F')
        
        // Border colorée
        pdf.setDrawColor(hr, hg, hb)
        pdf.setLineWidth(1)
        pdf.roundedRect(this.LAYOUT.margin, y, contentWidth, titleHeight, 8, 8, 'S')
        
        pdf.setFontSize(this.FONTS.heading)
        pdf.setTextColor(hr, hg, hb)
        pdf.setFont('helvetica', 'bold')
        pdf.text(title, this.LAYOUT.margin + 10, y + 12)

        y += titleHeight + this.LAYOUT.itemSpacing

        // Items avec bullets modernes
        pdf.setFontSize(this.FONTS.body)
        pdf.setFont('helvetica', 'normal')

        for (const item of items) {
            // Vérifier si on dépasse la page
            if (y > maxY) {
                return { y: y, newPage: true }
            }

            // Bullet point moderne (carré coloré)
            pdf.setFillColor(hr, hg, hb)
            pdf.rect(this.LAYOUT.margin + 10, y - 2, 2, 2, 'F')
            
            // Texte de l'item ligne par ligne
            const lines = pdf.splitTextToSize(item, contentWidth - 25)
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                // Vérifier si on dépasse la page
                if (y > maxY) {
                    return { y: y, newPage: true }
                }
                
                // Écrire la ligne avec couleur noire
                pdf.setTextColor(0, 0, 0)
                pdf.text(lines[lineIndex], this.LAYOUT.margin + 18, y + (lineIndex * 5))
            }
            
            y += lines.length * 5 + this.LAYOUT.itemSpacing
        }

        return y + this.LAYOUT.sectionSpacing
    }

    private static addModernFooter(pdf: jsPDF, pageWidth: number, pageHeight: number, currentPage: number, totalPages: number): void {
        const footerY = pageHeight - this.LAYOUT.footerHeight + 15
        
        // Ligne de séparation élégante
        const [br, bg, bb] = this.hexToRgb(this.COLORS.borderDark)
        pdf.setDrawColor(br, bg, bb)
        pdf.setLineWidth(0.8)
        pdf.line(this.LAYOUT.margin, footerY - 8, pageWidth - this.LAYOUT.margin, footerY - 8)
        
        // Texte du footer avec style
        pdf.setFontSize(this.FONTS.small)
        const [tr, tg, tb] = this.hexToRgb(this.COLORS.textMuted)
        pdf.setTextColor(tr, tg, tb)
        pdf.setFont('helvetica', 'normal')
        
        // Branding à gauche
        pdf.text('Généré par ComplySummarize IA - Analyse automatisée de conformité', this.LAYOUT.margin, footerY)
        
        // Numérotation à droite avec style
        pdf.setFont('helvetica', 'bold')
        const [pr, pg, pb] = this.hexToRgb(this.COLORS.primary)
        pdf.setTextColor(pr, pg, pb)
        pdf.text(`${currentPage}/${totalPages}`, pageWidth - this.LAYOUT.margin - 15, footerY)
        
        // Date/heure en petit
        pdf.setFontSize(this.FONTS.small - 1)
        pdf.setTextColor(tr, tg, tb)
        pdf.setFont('helvetica', 'normal')
        const now = new Date()
        const timeText = `${now.toLocaleDateString('fr-FR')} ${now.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'})}`
        pdf.text(timeText, pageWidth - this.LAYOUT.margin - 45, footerY)
    }

    // Utilitaires pour couleurs
    private static hexToRgb(hex: string): [number, number, number] {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result 
            ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
            : [0, 0, 0]
    }

    private static interpolateColor(color1: string, color2: string, ratio: number): string {
        const [r1, g1, b1] = this.hexToRgb(color1)
        const [r2, g2, b2] = this.hexToRgb(color2)
        
        const r = Math.round(r1 + (r2 - r1) * ratio)
        const g = Math.round(g1 + (g2 - g1) * ratio)
        const b = Math.round(b1 + (b2 - b1) * ratio)
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }
} 