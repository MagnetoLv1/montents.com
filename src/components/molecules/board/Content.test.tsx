import React from 'react';

import render from 'libs/test-utils';

import boards from 'data/boards/get_1.json';

import Content from 'components/molecules/board/Content';

const board = boards.data[0];

describe('molecules | board > <Content />', () => {
    describe('UI Test', () => {
        it('text content area exists', () => {
            const { getByTestId } = render(<Content board={board} />);

            const textContent = getByTestId('text-content');
            expect(textContent).toBeTruthy();
        });
    });
});
