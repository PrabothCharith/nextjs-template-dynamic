'use client'
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'


export function InitialProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <HeroUIProvider>
                <ToastProvider />
                {children}
            </HeroUIProvider>
        </ThemeProvider>
    )
}