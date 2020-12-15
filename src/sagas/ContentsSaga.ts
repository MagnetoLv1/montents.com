import { call, fork, put, take } from '@redux-saga/core/effects';
import AWS from 'aws-sdk';
import { QueryInput } from 'aws-sdk/clients/dynamodb';

import Exceptions from 'constants/Exceptions';

import { ContentsAction } from 'modules/ContentsModule';

// 그룹 리스트 api 호출
async function fetchContentsApi(lastEvaluatedKey: AWS.DynamoDB.Key) {
    const params: QueryInput = {
        TableName: 'Contents',
        IndexName: 'is_og-score-index',
        KeyConditionExpression: 'is_og = :is_og',
        ExpressionAttributeValues: {
            ':is_og': 1
        },
        Limit: 20,
        ExclusiveStartKey: lastEvaluatedKey
    };

    AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: 'ap-northeast-2'
    });
    const docClient = new AWS.DynamoDB.DocumentClient();
    return await docClient.query(params).promise();
}

// 그룹 리스트 saga
function* fetchContentsSaga(lastEvaluatedKey: AWS.DynamoDB.Key) {
    try {
        const response = yield call(fetchContentsApi, lastEvaluatedKey);
        yield put(
            ContentsAction.fetchContentsSuccess(
                response.Items,
                response.LastEvaluatedKey
            )
        );
    } catch (error) {
        console.log(error);
        let message = error instanceof Error ? error.message : error;
        if (typeof message !== 'string') {
            message = Exceptions.ERROR;
        }
        yield put(ContentsAction.fetchContentsError(message));
    }
}

export function* ContentsSaga() {
    while (true) {
        const { payload } = yield take(ContentsAction.fetchContents.type);
        yield fork(fetchContentsSaga, payload);

        yield take([
            ContentsAction.fetchContentsSuccess.type,
            ContentsAction.fetchContentsError.type,
            ContentsAction.clearContents.type
        ]);
    }
}
