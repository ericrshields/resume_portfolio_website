'use strict';

import '@/assets/css/styles.css'

import { Metadata } from "next";
import { Inter } from 'next/font/google'
import Page from "@/app/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Coding by Eric',
    description: 'Resume, Projects, and Portfolio for Eric R. Shields',
}

export default function RootLayout() {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Page/>
        </body>
        </html>
    )
}