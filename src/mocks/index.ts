import GroupsMock from 'mocks/GroupsMock';

import { axiosMock } from 'libs/axios';

export type TApiMock = (apiMock: ReturnType<typeof axiosMock>) => void;

const mocks: TApiMock[] = [GroupsMock];

export const initApiMock: TApiMock = (axiosMock) => {
    if (process.env.NEXT_PUBLIC_USE_API_MOCK !== 'true') {
        return false;
    }

    mocks.forEach((mock) => {
        mock(axiosMock);
    });
};
