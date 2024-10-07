'use client';

import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import '@/app/globals.css';
import { useRouter } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const token = Cookies.get('accessToken');

    if (token) {
        router.push('/');
    } else {
        router.push('/login');
    }

    if ((pathname === '/login' && !token) || !token) {
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
