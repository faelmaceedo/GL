import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Guilherme Leão | Especialista em Direito Previdenciário',
  description: 'Mais de 1.000 sustentações orais. Referência em Direito Previdenciário.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        
        {/* 2. Injeção das ferramentas de monitoramento da Vercel */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}