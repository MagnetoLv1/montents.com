import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';

import groupsResponse from 'data/groups/get_1.json';

import { axiosMock } from 'libs/axios';
import render from 'libs/testUtils';

import GroupList from 'components/organisms/GroupList';

describe('Components | Organisms | <GroupList />', () => {
    it('그룹 리스트 조회 (더보기 존재)', async () => {
        const mock = axiosMock({ delayResponse: 100 });
        mock.onGet('/groups').reply(200, groupsResponse);

        const {
            findAllByText,
            findByTestId,
            getByTestId,
            getAllByTestId
        } = render(<GroupList />);

        const { data: groups } = groupsResponse;

        // 로딩 중 버튼 노출 확인
        await waitFor(
            () => expect(getAllByTestId('loading-group-item').length).toBe(3),
            { timeout: 300 }
        );

        // 그룹 리스트 로딩 후 리스트 노출 확인
        for (const group of groups) {
            const groupItems = await findAllByText(group.name, undefined, {
                timeout: 300
            });

            expect(groupItems.length).toBeGreaterThanOrEqual(1);
            expect(groupItems[0]).toHaveTextContent(group.name);
        }

        // 더보기 버튼 확인
        await waitFor(
            () => expect(getByTestId('more-group-item')).toBeInTheDocument(),
            { timeout: 300 }
        );

        // 더보기 버튼 클릭
        const moreButton = await findByTestId('more-group-item');
        fireEvent.click(moreButton);

        // 더보기 로딩 확인
        const moreLoadingGroupItem = await findByTestId(
            'more-loading-group-item',
            undefined,
            { timeout: 300 }
        );

        expect(moreLoadingGroupItem).toBeInTheDocument();
    });

    it('그룹 리스트 가져오기 (더보기 없는 경우)', async () => {
        const lastGroupResponse = {
            ...groupsResponse,
            more: false
        };

        const mock = axiosMock({ delayResponse: 100 });
        mock.onGet('/groups').reply(200, lastGroupResponse);

        const { findAllByText, findAllByTestId, queryAllByTestId } = render(
            <GroupList />
        );

        const { data: groups } = lastGroupResponse;

        // 로딩 중 확인
        const loadingGroupItems = await findAllByTestId('loading-group-item');
        expect(loadingGroupItems.length).toBe(3);

        // 그룹 리스트 로딩 후 리스트 노출 확인
        for (const group of groups) {
            const groupItems = await findAllByText(group.name, undefined, {
                timeout: 300
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
        const mock = axiosMock({ delayResponse: 100 });
        mock.onGet('/groups').reply(515, { message: '테스트 오류 발생' });

        const { findAllByTestId } = render(<GroupList />);

        // 리스트 로딩 확인
        const loadingGroupItems = await findAllByTestId('loading-group-item');
        expect(loadingGroupItems.length).toBe(3);

        // 에러 아이콘 노출 확인
        const errorGroupsItems = await findAllByTestId(
            'error-group-item',
            undefined,
            { timeout: 300 }
        );

        expect(errorGroupsItems.length).toBe(3);
    });
});
