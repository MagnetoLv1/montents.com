import originalAxios, { AxiosError, AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { isErrorResponse } from 'types/IErrorResponse';

import Domain from 'constants/Domain';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosResponse = (item: any): item is AxiosResponse<typeof item> =>
    item.data && typeof item.status === 'number' && item.config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = (item: any): item is AxiosError<typeof item> =>
    typeof item.name === 'string' &&
    typeof item.message === 'string' &&
    item.config &&
    (typeof item.code === 'undefined' || typeof item.code === 'string') &&
    typeof item.isAxiosError === 'boolean';

const axios = originalAxios.create({
    baseURL: Domain.API_URL,
    timeout: 2500,
    headers: {
        'Content-Type': 'x-www-form-urlencoded', // default content type
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
});

axios.interceptors.response.use(
    (response) => (isAxiosResponse(response) ? response.data : response),
    (error) => {
        if (!isAxiosError(error)) {
            throw error;
        }

        if (!isAxiosResponse(error.response)) {
            throw error.response;
        }

        if (!isErrorResponse(error.response.data)) {
            throw error.response.data;
        }

        throw error.response.data.message;
    }
);

// axios-mock-adapter
export const axiosMock = (options = {}) => new MockAdapter(axios, options);

export default axios;
