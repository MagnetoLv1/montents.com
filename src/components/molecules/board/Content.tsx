import React, { FC } from 'react';

import Board from 'types/api/response/Board';
import ClassName from 'types/ClassName';

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

interface ContentProps extends ClassName {
    board: Board;
}

const Content: FC<ContentProps> = ({ board, className }: ContentProps) => (
    <ContentStyle className={className} data-testid={'board-content'}>
        {/* 문자 내용 영역 */}
        <TextContent content={board.content} />

        {/* 이미지 영역 */}
        <Images images={board.images} />
    </ContentStyle>
);

export default Content;
