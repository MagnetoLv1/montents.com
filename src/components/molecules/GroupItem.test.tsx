import React from 'react';

import render from 'libs/testUtils';

import GroupItem from 'components/molecules/GroupItem';

describe('Components | Molecules | <GroupItem />', () => {
    const group = {
        idx: 5,
        name: 'Inven',
        url: 'http://www.inven.co.kr/',
        icon:
            'http://static.inven.co.kr/image_2011/common/channel/icon_14x14_webzine.gif?v=200424b'
    };

    it('그룹 정보 노출', () => {
        const { getByText, getByAltText } = render(<GroupItem group={group} />);

        const text = getByText(group.name);
        const icon = getByAltText(group.name);

        expect(text).toHaveTextContent(group.name);
        expect(icon).toHaveAttribute('src', group.icon);
    });

    it('로딩 아이콘 노출', () => {
        const { getByTestId } = render(
            <GroupItem data-testid="loading-button" loading />
        );

        const button = getByTestId('loading-button');

        expect(button).toBeInTheDocument();
    });
});
