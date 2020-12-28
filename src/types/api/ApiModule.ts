import ApiStatus from 'constants/ApiStatus';

interface ApiModule<T> {
    status: ApiStatus;
    error: string | null;
    data: T;
}

export default ApiModule;
