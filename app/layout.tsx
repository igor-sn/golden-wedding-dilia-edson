import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bodas de Ouro - Dília & Edson | 50 Anos de Amor',
  description: 'Celebre conosco 50 anos de amor e cumplicidade. Bodas de Ouro de Dília Miranda e Edson Cabello - 18/10 às 19h',
  keywords: 'bodas de ouro, casamento, celebração, Dília, Edson, 50 anos',
  openGraph: {
    title: 'Bodas de Ouro - Dília & Edson',
    description: 'Celebre conosco 50 anos de amor! 18/10 às 19h',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
} 