// custom axios error
class AxiosResponseError extends Error {
    constructor(message?: unknown) {
        message =
            typeof message === 'string' ? message : '오류가 발생하였습니다.';
        super(message as string);
        this.name = 'AxiosError';
    }
}

export default AxiosResponseError;
