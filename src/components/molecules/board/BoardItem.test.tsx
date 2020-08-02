import React from 'react';

import render from 'libs/test-utils';

import boards from 'data/boards/get_1.json';

import BoardItem from 'components/molecules/board/BoardItem';

const board = boards.data[0];

describe('molecules | board > <BoardItem />', () => {
    describe('UI Test', () => {
        it('Header exists', () => {
            const { getByTestId } = render(<BoardItem board={board} />);

            const boardHeader = getByTestId('board-header');
            expect(boardHeader).toBeTruthy();
        });

        it('Content exists', () => {
            const { getByTestId } = render(<BoardItem board={board} />);

            const boardContent = getByTestId('board-content');
            expect(boardContent).toBeTruthy();
        });
    });
});
