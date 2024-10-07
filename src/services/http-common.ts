import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

let stopNotify = false;

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authorizationToken = Cookies.get('accessToken');

        if (authorizationToken) {
            config.headers['Authorization'] = `Bearer ${authorizationToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }

        return Promise.reject(response);
    },
    (error) => {
        if (error.code === 'ECONNABORTED') {
            toast.error('Lỗi kết nối đến server');
        } else if (error.response) {
            console.log(error.status);

            if (error.status === 403) {
                if (!stopNotify) toast.warning('Phiên đăng nhập hết hạn');
                stopNotify = true;
                Cookies.remove('accessToken');
                window.location.href = '/login';
            } else if (error.status >= 400 && error.status < 500) {
                return error.response.data;
            } else {
                toast.error('Lỗi kết nối đến server');
            }
        } else {
            toast.error('Lỗi kết nối đến server');
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
