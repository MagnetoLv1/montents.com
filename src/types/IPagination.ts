import IApi from 'types/IApi';

interface IMeta {
    more: boolean;
    last: null | number;
}

interface IPagination<T> extends IApi<T> {
    meta: IMeta;
}

export default IPagination;
