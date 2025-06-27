import axios, { AxiosRequestConfig, Method } from 'axios';

interface FetchData {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    headers?: Record<string, string>;
}

export async function FetchData<T>({url,method,data,headers}: FetchData): Promise<T | undefined> {
    try {
        const config: AxiosRequestConfig = {
            url,
            method,
            headers,
            data,
        };
        const res = await axios(config);
        return  res.data as T;
    } catch (error) {
        console.log(error);
    }
}