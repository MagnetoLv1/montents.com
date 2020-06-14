import React from 'react';

import { axiosMock } from 'libs/axios';
import render from 'libs/test-utils';

import groups from 'data/groups.json';

import GroupList from 'components/organisms/GroupList';

describe('<GroupList />', () => {
    describe('Get group list', () => {
        it('Loading and success', async () => {
            const mock = axiosMock({ delayResponse: 2000 });
            mock.onGet('/groups').reply(200, groups);

            const { findAllByText } = render(<GroupList />);

            for (const group of groups) {
                const groupName = await findAllByText(group.name, undefined, {
                    timeout: 5000
                });

                expect(groupName.length).toBeGreaterThanOrEqual(1);
                expect(groupName[0]).toHaveTextContent(group.name);
            }
        });
    });
});
