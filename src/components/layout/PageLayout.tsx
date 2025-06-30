'use client'

import { ReactNode } from 'react'
import { AdvancedBackground } from '@/components/effects/AdvancedBackground'
import { PageTransition } from '@/components/effects/PageTransition'

interface PageLayoutProps {
    children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Advanced Canvas Background */}
            <AdvancedBackground />
            
            {/* Page content with smooth transitions */}
            <PageTransition>
                {children}
            </PageTransition>
        </div>
    )
} 