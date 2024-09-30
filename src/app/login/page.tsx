import { Metadata } from 'next';
import Login from '@/components/login/page';
import { Box } from '@mui/material';

// export const metadata: Metadata = {
//     title: 'Chill And Free 420 CMS',
//     description: 'Chill And Free 420 CMS',
// };

export default function LoginPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)] bg_login">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Box></Box>
            </main>
        </div>
    );
}
