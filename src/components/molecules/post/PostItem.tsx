import React, { FC } from 'react';
import styled from '@emotion/styled';

import Post from 'types/api/response/Post';
import ClassName from 'types/ClassName';

import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

import Content from 'components/molecules/post/Content';
import Footer from 'components/molecules/post/Footer';
import HeaderBase from 'components/molecules/post/Header';
import PostItemContext from 'components/molecules/post/PostItem.context';

const PostStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.surfaceBackground};
    box-shadow: 0 0.1rem 0.2rem ${({ theme }) => theme.colors.contentShadow};
    border-radius: 0.8rem;
`;

const Header = styled(HeaderBase)`
    margin-bottom: 0.8rem;
`;

interface PostItemProps extends ClassName {
    post: Post;
}

const PostItem: FC<PostItemProps> = ({ post, className }: PostItemProps) => (
    <PostItemContext.Provider value={post}>
        <PostStyle className={className}>
            {/* 게시글 헤더 영역 */}
            <Header data-testid="post-header" />

            {/* 게시글 내용 영역 */}
            <Content data-testid="post-content" />

            {/* 게시글 하단 영역 */}
            <Footer data-testid="post-footer" />
        </PostStyle>
    </PostItemContext.Provider>
);

// 게시글 로딩 컴포넌트
const LoadingPostItem: FC<ClassName> = ({ className }: ClassName) => (
    <PostStyle className={className} data-testid="post-loading">
        {/* 게시글 헤더 영역 */}
        <Header loading />

        {/* 게시글 내용 영역 */}
        <Content loading />
    </PostStyle>
);

export type LoadablePostItemProps = LoadableComponentProps<PostItemProps>;
export default withLoading(PostItem, LoadingPostItem);
