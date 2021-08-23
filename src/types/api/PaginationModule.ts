import ApiModule from '~/types/api/ApiModule';

interface Meta {
    more: boolean;
    last: null | number;
}

interface PaginationModule<T> extends ApiModule<T> {
    meta: Meta;
}

export default PaginationModule;
