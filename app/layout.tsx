import './globals.css'

export const metadata = {
  title: 'Trelles',
  description: 'coming soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
