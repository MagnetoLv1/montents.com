import CommonError from 'errors/CommonError';

class TypeError extends CommonError {
    constructor(name: string, type: string) {
        super(`${name}은(는) ${type}타입이 아닙니다.`);
        this.name = 'TypeError';
    }
}

export default TypeError;
