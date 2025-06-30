'use client'

import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AdvancedBackground } from '@/components/effects/AdvancedBackground'
import { PageTransition } from '@/components/effects/PageTransition'

interface PageLayoutProps {
    children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    const location = useLocation()

    // Auto-scroll to top when route changes
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [location.pathname])

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