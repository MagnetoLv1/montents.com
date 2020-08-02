import React, { FC } from 'react';

import styled from 'libs/styled';

import IClassName from 'types/IClassName';
import IBoard from 'types/response/IBoard';

import ContentBase from 'components/molecules/board/Content';
import HeaderBase from 'components/molecules/board/Header';

const BoardItemWrap = styled.div`
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

interface IBoardItem extends IClassName {
    board: IBoard;
}

const BoardItem: FC<IBoardItem> = ({ board, className }: IBoardItem) => {
    return (
        <BoardItemWrap className={className}>
            {/* 게시글 헤더 영역 */}
            <Header board={board} />

            {/* 게시글 내용 영역 */}
            <Content board={board} />
        </BoardItemWrap>
    );
};

export default BoardItem;
