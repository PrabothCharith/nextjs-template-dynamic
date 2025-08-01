'use client'
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export function InitialProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <QueryClientProvider client={new QueryClient()}>
                <HeroUIProvider>
                    <ToastProvider />
                    {children}
                </HeroUIProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    )
}