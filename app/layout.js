import './reset.css'
import './globals.css'

export const metadata = {
  title: 'Catraia Soluções Ambientais',
  description: 'Conheça o nosso portfólio de serviços para apoiar empresas em suas iniciativas de sustentabilidade.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
