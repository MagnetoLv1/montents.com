import { FC, HTMLAttributes, useContext } from 'react';
import styled from '@emotion/styled';

import TypeError from 'errors/TypeError';

import { isPost } from 'types/api/response/Post';

import withLoading from 'libs/hoc/withLoading';

import ImagesBase from 'components/molecules/images/Images';
import PostItemContext from 'components/molecules/post/PostItem.context';
import TextContentBase from 'components/atoms/TextContent';

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContent = styled(TextContentBase)`
    padding: 0.4rem 1.6rem;
`;

const Images = styled(ImagesBase)`
    margin-top: 1.2rem;
`;

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

const Content: FC<ContentProps> = ({ ...props }: ContentProps) => {
    const post = useContext(PostItemContext);
    if (!isPost(post)) throw new TypeError('post', 'Post');

    return (
        <ContentStyle {...props}>
            {/* 문자 내용 영역 */}
            <TextContent content={post.content} />

            {/* 이미지 영역 */}
            <Images images={post.images} />
        </ContentStyle>
    );
};

// 게시글 내용 로딩 컴포넌트
const LoadingContent = styled.div`
    background: ${({ theme }) => theme.colors.loadingBackground};
    min-height: 40rem;
`;

export default withLoading(Content, LoadingContent);
