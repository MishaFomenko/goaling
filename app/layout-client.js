'use client';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('./components/navBar'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

const ClientRootLayout = ({ children }) => {
    return (
        <html lang="en" className='h-full bg-white'>
            <body className={inter.className}>
                <main>
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default ClientRootLayout;