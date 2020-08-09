import React from 'react';
import { date, object, text, withKnobs } from '@storybook/addon-knobs';
import he from 'he';
import moment from 'moment';

import styled from 'libs/styled';

import boards from 'data/boards/get_1.json';

import BoardItemBase from 'components/molecules/board/BoardItem';

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

export default {
    title: 'components|molecules/BoardItem',
    subtitle: '게시글 기본 컴포넌트',
    component: BoardItemBase,
    decorators: [withKnobs]
};

export const boardItem = () => {
    let board = boards.data[0];

    const title = text('title', board.title),
        createAt = date('created_at', moment(board.created_at).toDate()),
        content = text('content', board.content),
        images = object('images', board.images),
        group = object('group', board.group);

    board = {
        ...board,
        title,
        // eslint-disable-next-line @typescript-eslint/camelcase
        created_at: moment(createAt).format('YYYY-MM-DD HH:mm:ss'),
        images,
        group,
        content: he.decode(content)
    };

    return (
        <BodyWrap>
            <BoardItem board={board} />
        </BodyWrap>
    );
};

boardItem.story = {
    name: 'Default'
};
