import { Metadata } from 'next';
import Login from '@/components/login/page';
import { Box, FormControl, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { TLogin } from '@/types/login';
import LoginForm from '@/components/login/page';

// export const metadata: Metadata = {
//     title: 'Chill And Free 420 CMS',
//     description: 'Chill And Free 420 CMS',
// };

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[600px] h-[800px] bg-background rounded-xl">
                <div className="flex flex-col items-center justify-center">
                    <Image src="/img/logo2x.png" width={200} height={200} alt="Logo website" />
                    <h1 className="font-bold text-3xl text-primary text-shadow-cus">Đăng nhập CMS</h1>
                </div>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
