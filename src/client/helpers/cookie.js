import { Buffer } from 'buffer/';

const STORAGE_KEY = '__HEMMELIG_TOKEN_PUBLIC';

export const getCookie = () => {
    const parts = document.cookie.split(STORAGE_KEY + '=');

    if (parts.length === 2) {
        return JSON.parse(
            Buffer.from(decodeURIComponent(parts.pop().split(';').shift()), 'base64')
        );
    }

    return null;
};

export const removeCookie = () => {
    document.cookie = `${STORAGE_KEY}=;path=/;domain=${window.location.host};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
