import { ApiMock } from 'mocks/index';

import groupsResponse1 from 'data/groups/get_1.json';
import groupsResponse2 from 'data/groups/get_2.json';
import groupsResponse3 from 'data/groups/get_3.json';

const groups: ApiMock = (mock) => {
    mock.onGet('/groups').reply(({ params }) => {
        const { last = null } = params;

        let result = groupsResponse1;
        if (last >= 10) result = groupsResponse2;
        if (last >= 20) result = groupsResponse3;

        return [200, result];
    });
};

export default groups;
