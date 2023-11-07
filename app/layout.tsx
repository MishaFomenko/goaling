import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import type { Metadata } from 'next'
import ClientRootLayout from './layout-client'


export const metadata: Metadata = {
  title: 'Goaling',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientRootLayout>
      {children}
    </ClientRootLayout>
  )
}
