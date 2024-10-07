'use client';

import { fnLogin } from '@/services/store/login';
import { TLogin } from '@/types/login';
import isNullOrEmpty from '@/utils/validate';
import { Box, Button, createTheme, TextField } from '@mui/material';
import { log } from 'console';
import React, { FC, useState } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
interface ErrorType {
    isError: boolean;
    message: string;
}

const LoginForm = () => {
    const router = useRouter();
    const [usernameError, setUsernameError] = useState<ErrorType | null>(null);
    const [passwordError, setPasswordError] = useState<ErrorType | null>(null);
    const [dataForm, setDataForm] = useState<TLogin>({
        username: '',
        password: '',
        isRemember: false,
    });

    const fnValidate = () => {
        let hasError = false;
        if (isNullOrEmpty(dataForm.username.trim()) || isNullOrEmpty(dataForm.username)) {
            setUsernameError({
                isError: true,
                message: 'Vui lòng nhập tên đăng nhập !',
            });
            hasError = true;
        }

        if (isNullOrEmpty(dataForm.password.trim()) || isNullOrEmpty(dataForm.password)) {
            setPasswordError({
                isError: true,
                message: 'Vui lòng nhập mật khẩu !',
            });
            hasError = true;
        }

        return hasError;
    };

    const handleSubmit = async () => {
        if (fnValidate()) return;

        const res: any = await fnLogin(dataForm);

        if (res.error.code == 200) {
            Cookie.set('accessToken', res.data.access_token, { expires: 1 });
            router.push('/');
        }
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-20">
                <div className="mt-5">
                    <TextField
                        className="w-[300px] text-primary"
                        name="username"
                        error={usernameError?.isError}
                        helperText={usernameError?.message}
                        id="outlined-basic"
                        label="Tên đăng nhập *"
                        variant="outlined"
                        onChange={(e) => {
                            setUsernameError({
                                isError: false,
                                message: '',
                            });
                            setDataForm((prev) => ({
                                ...prev,
                                username: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div className="mt-5">
                    <TextField
                        className="w-[300px]"
                        name="password"
                        error={passwordError?.isError}
                        helperText={passwordError?.message}
                        id="outlined-basic"
                        label="Mật khẩu *"
                        variant="outlined"
                        type="password"
                        onChange={(e) => {
                            setPasswordError({
                                isError: false,
                                message: '',
                            });
                            setDataForm((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }));
                        }}
                    />
                </div>
                {/* <div className="flex items-center justify-end mt-3">
                        <p>Bạn quên mật khẩu ?</p>
                    </div> */}

                <Button onClick={handleSubmit} variant="contained" size="medium" className="bg-primary mt-10">
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;
