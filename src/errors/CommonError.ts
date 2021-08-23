import { isProd } from '~/constants/env';
import Exceptions from '~/constants/Exceptions';

class CommonError extends Error {
    constructor(message?: string | null) {
        if (typeof message !== 'string' || isProd) message = Exceptions.ERROR;

        super(message);
        this.name = 'CommonError';
    }
}

export default CommonError;
