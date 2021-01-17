import MockAdapter from 'axios-mock-adapter';

import groups from 'mocks/groups';
import posts from 'mocks/posts';

import { axiosMock, MockAdapterOptions } from 'libs/axios';

export type ApiMock = (apiMock: MockAdapter) => void;

// mocking 시킬 api 리스트
const mockingApiList: ApiMock[] = [groups, posts];

type InitApiMock = (options: MockAdapterOptions) => void;

/**
 * api mock 실행
 * @param options
 */
export const initApiMock: InitApiMock = (options) => {
    const mock = axiosMock(options);

    mockingApiList.forEach((mockingApi) => {
        mockingApi(mock);
    });
};
