import React from 'react';

import boards from 'data/boards/get_1.json';

import render from 'libs/testUtils';

import BoardItem from 'components/molecules/board/BoardItem';

const board = boards.data[0];

describe('Components | Molecules | board | <BoardItem />', () => {
    it('헤더 노출 확인', () => {
        const { getByTestId } = render(<BoardItem board={board} />);

        const boardHeader = getByTestId('board-header');
        expect(boardHeader).toBeInTheDocument();
    });

    it('내용 노출 확인', () => {
        const { getByTestId } = render(<BoardItem board={board} />);

        const boardContent = getByTestId('board-content');
        expect(boardContent).toBeInTheDocument();
    });
});
