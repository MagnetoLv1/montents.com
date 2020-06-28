import originalAxios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Domain from 'constants/Domain';

const axios = originalAxios.create({
    baseURL: Domain.API_URL,
    timeout: 2500,
    headers: {
        'Content-Type': 'x-www-form-urlencoded', // default content type
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
});

axios.interceptors.response.use((response) => response.data);

// axios-mock-adapter
export const axiosMock = (options = {}) => new MockAdapter(axios, options);

export default axios;
