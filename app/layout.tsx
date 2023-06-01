'use strict';

import '@/assets/css/styles.css'

import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coding by Eric',
  description: 'Resume, Projects, and Portfolio for Eric R. Shields',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}