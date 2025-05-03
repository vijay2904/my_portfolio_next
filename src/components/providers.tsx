// Clien component which shares some context.

'use client';

import { ThemeProvider } from "next-themes";

export default function Providers({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider
        enableSystem
        attribute='class'
        defaultTheme='light'
        disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}