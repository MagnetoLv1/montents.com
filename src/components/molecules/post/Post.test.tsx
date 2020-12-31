import React from 'react';

import posts from 'data/posts/get_1.json';

import render from 'libs/testUtils';

import Post from 'components/molecules/post/Post';

const post = posts.data[0];

describe('Components | Molecules | post | <Post />', () => {
    it('헤더 노출 확인', () => {
        const { getByTestId } = render(<Post post={post} />);

        const postHeader = getByTestId('post-header');
        expect(postHeader).toBeInTheDocument();
    });

    it('내용 노출 확인', () => {
        const { getByTestId } = render(<Post post={post} />);

        const postContent = getByTestId('post-content');
        expect(postContent).toBeInTheDocument();
    });
});
