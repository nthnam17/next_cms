'use client';

import { TLogin } from '@/types/login';
import { TextField } from '@mui/material';
import React, { useState } from 'react';

const LoginForm = () => {
    const [dataForm, setDataForm] = useState<TLogin>({
        username: '',
        password: '',
        isRemember: false,
    });

    const handleSubmit = async () => {};
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    error
                    helperText="Incorrect entry."
                    id="outlined-basic"
                    label="Tên đăng nhập"
                    variant="outlined"
                />
                <TextField
                    required
                    error
                    password
                    helperText="Incorrect entry."
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="outlined"
                />
            </form>
        </div>
    );
};

export default LoginForm;
