import { TApiMock } from 'mocks/index';

import groups1 from 'data/groups/get_1.json';
import groups2 from 'data/groups/get_2.json';
import groups3 from 'data/groups/get_3.json';

// 그룹 리스트 조회
const mockGetGroupList: TApiMock = (apiMock) => {
    apiMock.onGet('/groups').reply((config) => {
        const {
            params: { last }
        } = config;

        switch (true) {
            case last === null || last < 10:
                return [200, groups1];
            case last < 20:
                return [200, groups2];
            case last < 30:
                return [200, groups3];
            default:
                return [515, { message: '그룹이 없습니다.' }];
        }
    });
};

const GroupsMock: TApiMock = (apiMock) => {
    // 그룹 리스트 조회
    mockGetGroupList(apiMock);
};

export default GroupsMock;
