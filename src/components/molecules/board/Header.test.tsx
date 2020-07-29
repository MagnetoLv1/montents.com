import React from 'react';

import render from 'libs/test-utils';

import boards from 'data/boards/get_1.json';

import Header from 'components/molecules/board/Header';

describe('<Header />', () => {
    const board = boards.data[0],
        group = board.group;
    describe('UI Test', () => {
        it('group icon exists', () => {
            const { getByAltText } = render(<Header board={board} />);

            const icon = getByAltText(group.name);
            expect(icon).toHaveAttribute('src', group.icon);
        });

        it('title exists', () => {
            const { getByText } = render(<Header board={board} />);

            const title = getByText(board.title);
            expect(title).toHaveAttribute('href', board.url);
        });
    });
});
