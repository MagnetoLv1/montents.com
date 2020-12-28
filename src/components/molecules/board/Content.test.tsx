import React from 'react';

import boards from 'data/boards/get_1.json';

import render from 'libs/testUtils';

import Content from 'components/molecules/board/Content';

const board = boards.data[0];

describe('Components | Molecules | board | <Content />', () => {
    it('text content 영역 노출 확인', () => {
        const { getByTestId } = render(<Content board={board} />);

        const textContent = getByTestId('text-content');
        expect(textContent).toBeInTheDocument();
    });
});
