import React from 'react';
import moment from 'moment';

import render from 'libs/test-utils';

import boards from 'data/boards/get_1.json';

import Header from 'components/molecules/board/Header';

describe('molecules | board > <Header />', () => {
    const board = boards.data[0],
        group = board.group;
    describe('UI Test', () => {
        it('group icon exists', () => {
            const { getByAltText } = render(<Header board={board} />);

            const icon = getByAltText(group.name);
            expect(icon).toHaveAttribute('src', group.icon);
        });

        it('title and group name exists', () => {
            const { getByText } = render(<Header board={board} />);

            const title = getByText(board.title.trim());
            expect(title).toHaveAttribute('href', board.url);

            const groupName = getByText(group.name);
            expect(groupName).toHaveAttribute('href', group.url);
        });

        it('date exists', () => {
            const { getByText } = render(<Header board={board} />);

            const date = moment(board.created_at),
                pastTimeText = date.fromNow(),
                dateText = date.format('YYYY년 M월 D일 dddd a h:m');

            const dateArea = getByText(pastTimeText);
            expect(dateArea).toHaveAttribute('data-tip', dateText);
        });
    });
});
