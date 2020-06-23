import { TApiMock } from 'mocks/index';

import groups from 'data/groups.json';

// 그룹 리스트 조회
const mockGetGroupList: TApiMock = (apiMock) => {
    apiMock.onGet('/groups').reply(200, groups);
};

const GroupsMock: TApiMock = (apiMock) => {
    // 그룹 리스트 조회
    mockGetGroupList(apiMock);
};

export default GroupsMock;
