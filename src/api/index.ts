import axios from "axios";

import storage from "../helpers/storage";
import { STORAGE_KEYS } from "../constants";
import { IRefreshTokenResponse } from "../interfaces";

let refreshTokenRequest: null | Promise<IRefreshTokenResponse> = null;

const handleRefreshToken = async () => {
    try {
        const refreshToken = storage.get(STORAGE_KEYS.REFRESH_TOKEN);
        const res = await axios.get("http://localhost:3001/api/auth/refresh-token", {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        });

        return res.data.data as IRefreshTokenResponse;
    } catch (err) {
        return Promise.reject(err);
    }
};

// Axios instant
const axiosClient = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "Application/json",
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    async function (config) {
        const accessToken = storage.get(STORAGE_KEYS.ACCESS_TOKEN);

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    async function (error) {
        const status = error.response.status;
        const originalConfig = error.config;

        if (status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            if (!refreshTokenRequest) {
                refreshTokenRequest = handleRefreshToken();
            }

            try {
                const { accessToken, refreshToken } = await refreshTokenRequest;

                storage.set(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
                storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
                originalConfig.headers.Authorization = `Bearer ${accessToken}`;

                return axiosClient(originalConfig);
            } catch (err) {
                return Promise.reject(error);
            } finally {
                refreshTokenRequest = null;
            }
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosClient;
