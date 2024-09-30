import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import LayoutWrapper from '@/components/common/layout/mainLayout';

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'CMS Panel ChillAndFree420',
    description: 'Chào mừng đến với trang quản trị',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${geistMono.variable} antialiased`}>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
