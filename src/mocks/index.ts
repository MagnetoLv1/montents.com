import GroupsMock from 'mocks/GroupsMock';

import { axiosMock } from 'libs/axios';

import { useApiMock } from 'constants/env';

export type TApiMock = (apiMock: ReturnType<typeof axiosMock>) => void;

const mocks: TApiMock[] = [GroupsMock];

export const initApiMock: TApiMock = (axiosMock) => {
    if (!useApiMock) {
        return false;
    }

    mocks.forEach((mock) => {
        mock(axiosMock);
    });
};
