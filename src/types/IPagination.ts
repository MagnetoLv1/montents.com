import IApi from 'types/IApi';

interface IMeta {
    more: boolean;
    last: null | number;
    LastEvaluatedKey: null | AWS.DynamoDB.Key;
}

interface IPagination<T> extends IApi<T> {
    meta: IMeta;
}

export default IPagination;
