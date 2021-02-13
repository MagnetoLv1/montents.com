// custom axios error
import CommonError from 'errors/CommonError';

class AxiosResponseError extends CommonError {
    constructor(message?: unknown) {
        super(typeof message === 'string' ? message : null);
        this.name = 'AxiosResponseError';
    }
}

export default AxiosResponseError;
