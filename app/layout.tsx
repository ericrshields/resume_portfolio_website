'use strict';

import '@/assets/css/styles.css'

import { Metadata } from "next";
import { Inter } from 'next/font/google'
import Page from "@/app/page";
import { strings } from "@/lib/strings.enUS";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: strings.metadata.title,
    description: strings.metadata.description,
}

export default function RootLayout() {
    // Suppress hydration errors on <body>, as these come from extensions and can be ignored
    return (
        <html lang="en">
            <body className={`${inter.className} dark-theme`} suppressHydrationWarning={true}>
                <Page />
            </body>
        </html>
    )
}