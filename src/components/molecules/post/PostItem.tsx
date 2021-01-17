import React, { FC } from 'react';

import Post from 'types/api/response/Post';
import ClassName from 'types/ClassName';

import styled from 'libs/styled';
import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

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

interface PostItemProps extends ClassName {
    post: Post;
}

const PostItem: FC<PostItemProps> = ({ post, className }: PostItemProps) => (
    <PostStyle className={className}>
        {/* 게시글 헤더 영역 */}
        <Header post={post} data-testid="post-header" />

        {/* 게시글 내용 영역 */}
        <Content post={post} data-testid="post-content" />
    </PostStyle>
);

// 게시글 로딩 컴포넌트
const LoadingPostItem: FC<ClassName> = ({ className }: ClassName) => (
    <PostStyle className={className} data-testid="post-loading">
        {/* 게시글 헤더 영역 */}
        <Header loading />
    </PostStyle>
);

export type LoadablePostItemProps = LoadableComponentProps<PostItemProps>;
export default withLoading(PostItem, LoadingPostItem);
