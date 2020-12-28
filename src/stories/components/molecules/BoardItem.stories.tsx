import React from 'react';
import { Story } from '@storybook/react';

import Board from 'types/api/response/Board';

import boardResponse from 'data/boards/get_1.json';

import styled from 'libs/styled';

import BoardItemBase, {
    BoardItemProps
} from 'components/molecules/board/BoardItem';

const boardData = boardResponse.data[0];

export default {
    title: 'Components/Molecules/BoardItem',
    component: BoardItemBase,
    parameters: {
        docs: {
            description: {
                component: '게시글 컴포넌트'
            }
        }
    },
    argTypes: {
        board: {
            control: 'object',
            description: '게시글 json data'
        }
    },
    args: {
        board: boardData
    }
};

const BodyWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardItem = styled(BoardItemBase)`
    width: 68rem;
    margin: 0.8rem 0;
`;

/**
 * 기본 게시글 story
 * @param board
 * @constructor
 */
export const DefaultBoardItem: Story<BoardItemProps> = ({
    board
}: BoardItemProps) => (
    <BodyWrap>
        <BoardItem board={board} />
    </BodyWrap>
);

DefaultBoardItem.storyName = 'Default';

/**
 * 게시글 예시 story
 * @param title
 * @param content
 * @param created_at
 * @param group
 * @param idx
 * @param images
 * @param url
 * @constructor
 */
interface ExampleBoardItemProps extends Board {}

export const ExampleBoardItem: Story<ExampleBoardItemProps> = ({
    title,
    content,
    created_at,
    group,
    idx,
    images,
    url
}: ExampleBoardItemProps) => (
    <BoardItem
        board={{
            idx,
            title,
            content,
            created_at,
            group,
            images,
            url
        }}
    />
);

ExampleBoardItem.args = {
    ...boardData
};

ExampleBoardItem.argTypes = {
    board: {
        table: {
            disable: true
        }
    },
    idx: {
        control: 'number',
        description: '게시글 고유 번호'
    },
    title: {
        control: 'text',
        description: '게시글 제목'
    },
    content: {
        control: 'text',
        description: '게시글 내용'
    },
    url: {
        control: 'text',
        description: '게시글 원문 url'
    },
    created_at: {
        control: 'date',
        description: '작성 날짜'
    },
    images: {
        control: 'array',
        description: '게시글 이미지 리스트'
    },
    group: {
        control: 'object',
        description: '게시글 작성된 그룹'
    }
};
