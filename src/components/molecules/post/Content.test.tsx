import React from 'react';

import posts from 'data/posts/get_1.json';

import render from 'libs/testUtils';

import Content from 'components/molecules/post/Content';

const post = posts.data[0];

describe('Components | Molecules | post | <Content />', () => {
    it('text content 영역 노출 확인', () => {
        const { getByTestId } = render(<Content post={post} />);

        const textContent = getByTestId('text-content');
        expect(textContent).toBeInTheDocument();
    });
});
