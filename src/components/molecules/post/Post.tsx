import React, { FC } from 'react';

import Post from 'types/api/response/Post';
import ClassName from 'types/ClassName';

import styled from 'libs/styled';

import ContentBase from 'components/molecules/post/Content';
import HeaderBase from 'components/molecules/post/Header';

const PostStyle = styled.div`
    background: ${({ theme }) => theme.colors.surfaceBackground};
    border-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.2rem ${({ theme }) => theme.colors.contentShadow};
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Header = styled(HeaderBase)`
    margin-bottom: 0.8rem;
`;

const Content = styled(ContentBase)``;

export interface PostProps extends ClassName {
    post: Post;
}

const Post: FC<PostProps> = ({ post, className }: PostProps) => (
    <PostStyle className={className}>
        {/* 게시글 헤더 영역 */}
        <Header post={post} data-testid="post-header" />

        {/* 게시글 내용 영역 */}
        <Content post={post} data-testid="post-content" />
    </PostStyle>
);

export default Post;
