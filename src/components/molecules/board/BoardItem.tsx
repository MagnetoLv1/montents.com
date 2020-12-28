import React, { FC } from 'react';

import Board from 'types/api/response/Board';
import ClassName from 'types/ClassName';

import styled from 'libs/styled';

import ContentBase from 'components/molecules/board/Content';
import HeaderBase from 'components/molecules/board/Header';

const BoardItemStyle = styled.div`
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

export interface BoardItemProps extends ClassName {
    board: Board;
}

const BoardItem: FC<BoardItemProps> = ({
    board,
    className
}: BoardItemProps) => (
    <BoardItemStyle className={className}>
        {/* 게시글 헤더 영역 */}
        <Header board={board} />

        {/* 게시글 내용 영역 */}
        <Content board={board} />
    </BoardItemStyle>
);

export default BoardItem;
