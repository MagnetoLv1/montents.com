import React from 'react';
import { fireEvent } from '@testing-library/dom';

import { axiosMock } from 'libs/axios';
import render from 'libs/test-utils';

import groupsResponse from 'data/groups/get_1.json';

import GroupList from 'components/organisms/GroupList';

describe('organisms | <GroupList />', () => {
    describe('Get group list', () => {
        // 그룹 리스트 가져오기 테스트 (더보기 있을 경우)
        it('Loading and success (more data)', async () => {
            const mock = axiosMock({ delayResponse: 2000 });
            mock.onGet('/groups').reply(200, groupsResponse);

            const { findAllByText, findAllByTestId, findByTestId } = render(
                <GroupList />
            );

            const { data: groups } = groupsResponse;

            // 로딩 중 확인
            const loadingGroupItems = await findAllByTestId(
                'loading-group-item'
            );

            expect(loadingGroupItems.length).toBe(3);

            // 그룹 리스트 로딩 후 리스트 노출 확인
            for (const group of groups) {
                const groupItems = await findAllByText(group.name, undefined, {
                    timeout: 5000
                });

                expect(groupItems.length).toBeGreaterThanOrEqual(1);
                expect(groupItems[0]).toHaveTextContent(group.name);
            }

            // 더보기 버튼 확인
            const moreGroupItem = await findByTestId('more-group-item');

            expect(moreGroupItem).toBeTruthy();

            // 더보기 버튼 클릭
            const moreButton = await findByTestId('more-button');
            fireEvent.click(moreButton);

            // 더보기 로딩 확인
            const moreLoadingGroupItem = await findByTestId(
                'more-loading-group-item',
                undefined,
                { timeout: 5000 }
            );

            expect(moreLoadingGroupItem).toBeTruthy();
        });

        // 그룹 리스트 가져오기 테스트 (더보기 없을 경우)
        it('Loading and success (end data)', async () => {
            const lastGroupResponse = {
                ...groupsResponse,
                more: false
            };
            const mock = axiosMock({ delayResponse: 2000 });

            mock.onGet('/groups').reply(200, lastGroupResponse);

            const { findAllByText, findAllByTestId, queryAllByTestId } = render(
                <GroupList />
            );

            const { data: groups } = lastGroupResponse;

            // 로딩 중 확인
            const loadingGroupItems = await findAllByTestId(
                'loading-group-item'
            );

            expect(loadingGroupItems.length).toBe(3);

            // 그룹 리스트 로딩 후 리스트 노출 확인
            for (const group of groups) {
                const groupItems = await findAllByText(group.name, undefined, {
                    timeout: 5000
                });

                expect(groupItems.length).toBeGreaterThanOrEqual(1);
                expect(groupItems[0]).toHaveTextContent(group.name);
            }

            // 더보기 버튼 확인
            const moreGroupItem = queryAllByTestId('more-group-item');

            expect(moreGroupItem.length).toBe(0);
        });

        // 그룹 리스트 가져오는 중 에러 발생 테스트
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
