import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import styled from 'libs/styled';

import groups from 'data/groups/get_1.json';

import GroupItem, { Mode } from 'components/molecules/GroupItem';

export default {
    title: 'components|molecules/GroupItem',
    subtitle: '각 그룹의 정보 및 링크가 있는 컴포넌트',
    component: GroupItem,
    decorators: [withKnobs]
};

const GroupList = styled.ul`
    display: flex;
    width: 30rem;

    flex-direction: column;
    align-items: stretch;
`;

export const groupItem = () => {
    let group = groups.data[0];

    const name = text('name', group.name),
        icon = text('icon', group.icon),
        url = text('url', group.url);

    group = {
        ...group,
        name,
        icon,
        url
    };

    return (
        <GroupList>
            <GroupItem group={group} />
        </GroupList>
    );
};

groupItem.story = {
    name: 'Default'
};

export const loadingGroupItem = () => (
    <GroupList>
        <GroupItem mode={Mode.LOADING} />
    </GroupList>
);

export const MoreGropuItem = () => (
    <GroupList>
        <GroupItem mode={Mode.MORE} />
    </GroupList>
);
