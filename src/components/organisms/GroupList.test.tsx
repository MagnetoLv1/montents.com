import React from 'react';

import { axiosMock } from 'libs/axios';
import render from 'libs/test-utils';

import groupsResponse from 'data/groups.json';

import GroupList from 'components/organisms/GroupList';

describe('<GroupList />', () => {
    describe('Get group list', () => {
        it('Loading and success', async () => {
            const mock = axiosMock({ delayResponse: 2000 });
            mock.onGet('/groups').reply(200, groupsResponse);

            const { findAllByText, findAllByTestId } = render(<GroupList />);

            const { data: groups } = groupsResponse;

            const loadingGroupItems = await findAllByTestId(
                'loading-group-item'
            );

            expect(loadingGroupItems.length).toBe(3);

            for (const group of groups) {
                const groupItems = await findAllByText(group.name, undefined, {
                    timeout: 5000
                });

                expect(groupItems.length).toBeGreaterThanOrEqual(1);
                expect(groupItems[0]).toHaveTextContent(group.name);
            }
        });

        it('Loading and error', async () => {
            const mock = axiosMock({ delayResponse: 2000 });
            mock.onGet('/groups').reply(515, { message: '테스트 오류 발생' });

            const { findAllByTestId } = render(<GroupList />);

            const loadingGroupItems = await findAllByTestId(
                'loading-group-item'
            );

            expect(loadingGroupItems.length).toBe(3);

            const errorGroupsItems = await findAllByTestId(
                'error-group-item',
                undefined,
                { timeout: 5000 }
            );

            expect(errorGroupsItems.length).toBe(3);
        });
    });
});
