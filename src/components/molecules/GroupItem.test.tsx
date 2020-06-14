import React from 'react';

import render from 'libs/test-utils';

import GroupItem from 'components/molecules/GroupItem';

describe('<GropuItem />', () => {
    const group = {
        idx: 5,
        name: 'Inven',
        url: 'http://www.inven.co.kr/',
        icon:
            'http://static.inven.co.kr/image_2011/common/channel/icon_14x14_webzine.gif?v=200424b'
    };

    describe('UI test', () => {
        it('group info exists', () => {
            const { getByText, getByAltText } = render(
                <GroupItem group={group} />
            );

            const text = getByText(group.name);
            const icon = getByAltText(group.name);

            expect(text).toHaveTextContent(group.name);
            expect(icon).toHaveAttribute('src', group.icon);
        });

        it('loading group item', () => {
            const { getByTestId } = render(<GroupItem loading />);

            const button = getByTestId('loading-button');

            expect(button).toBeTruthy();
        });
    });
});
