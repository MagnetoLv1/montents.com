import React, { FC } from 'react';

import styled from 'libs/styled';

import IClassName from 'types/IClassName';
import IBoard from 'types/response/IBoard';

import TextContentBase from 'components/atoms/TextContent';

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContent = styled(TextContentBase)`
    padding: 0.4rem 1.6rem 1.6rem 1.6rem;
`;

interface IContent extends IClassName {
    board: IBoard;
}

const Content: FC<IContent> = ({ board, className }: IContent) => {
    return (
        <ContentWrap className={className} data-testid={'board-content'}>
            {/* 문자 내용 영역 */}
            <TextContent content={board.content} />
        </ContentWrap>
    );
};

export default Content;
