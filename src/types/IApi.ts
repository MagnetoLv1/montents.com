import ApiStatus from 'constants/ApiStatus';

interface IApi<T> {
    status: ApiStatus;
    error: string | null;
    data: T;
}

export default IApi;
