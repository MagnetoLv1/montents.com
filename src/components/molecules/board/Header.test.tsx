import React from 'react';
import moment from 'moment';

import boards from 'data/boards/get_1.json';

import render from 'libs/testUtils';

import Header from 'components/molecules/board/Header';

describe('Components | Molecules | board | <Header />', () => {
    const board = boards.data[0],
        group = board.group;
    it('그룹 아이콘 노출', () => {
        const { getByAltText } = render(<Header board={board} />);

        const icon = getByAltText(group.name);
        expect(icon).toHaveAttribute('src', group.icon);
    });

    it('게시글 제목 및 그룹 명 노출', () => {
        const { getByText } = render(<Header board={board} />);

        const title = getByText(board.title.trim());
        expect(title).toHaveAttribute('href', board.url);

        const groupName = getByText(group.name);
        expect(groupName).toHaveAttribute('href', group.url);
    });

    it('업로드 날짜 노출', () => {
        const { getByText } = render(<Header board={board} />);

        const date = moment(board.created_at),
            pastTimeText = date.fromNow(),
            dateText = date.format('YYYY년 M월 D일 dddd a h:m');

        const dateArea = getByText(pastTimeText);
        expect(dateArea).toHaveAttribute('data-tip', dateText);
    });
});
