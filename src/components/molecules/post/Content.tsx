import React, { FC, HTMLAttributes } from 'react';

import Post from 'types/api/response/Post';

import styled from 'libs/styled';

import Images from 'components/molecules/images/Images';
import TextContentBase from 'components/atoms/TextContent';

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContent = styled(TextContentBase)`
    padding: 0.4rem 1.6rem 1.6rem 1.6rem;
`;

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

const Content: FC<ContentProps> = ({ post, ...props }: ContentProps) => (
    <ContentStyle {...props}>
        {/* 문자 내용 영역 */}
        <TextContent content={post.content} />

        {/* 이미지 영역 */}
        <Images images={post.images} />
    </ContentStyle>
);

export default Content;
