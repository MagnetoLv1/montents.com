import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import styled from 'libs/styled';

import boards from 'data/boards/get_1.json';

import Header from 'components/molecules/board/Header';

export default {
    title: 'components|molecules/board/Header',
    subtitle: '게시판 제목 및 기타 정보를 보여주는 컴포넌트',
    component: Header,
    decorators: [withKnobs]
};

const board = boards.data[0];

const BodyWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderWrap = styled.div`
    margin: 1rem;
    width: 68rem;
    background: white;
    border-radius: 0.8rem;
    padding: 1rem;
`;

export const boardHeader = () => (
    <BodyWrap>
        <HeaderWrap>
            <Header board={board} />
        </HeaderWrap>
    </BodyWrap>
);

boardHeader.story = {
    name: 'default'
};
