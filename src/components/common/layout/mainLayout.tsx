'use client';

import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import '@/app/globals.css';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname === '/login') {
        return <>{children}</>;
    }

    return (
        <>
            <header>
                <h1>Header for all pages</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>Footer for all pages</p>
            </footer>
        </>
    );
}
