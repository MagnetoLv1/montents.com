import React from 'react';
import { object, withKnobs } from '@storybook/addon-knobs';

import styled from 'libs/styled';

import groups from 'data/groups.json';

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
    const groupList = object('group list', groups.data);

    return (
        <GroupList>
            {groupList.map((group) => (
                <GroupItem group={group} key={group.idx} />
            ))}
        </GroupList>
    );
};

groupItem.story = {
    name: 'default'
};

export const loadingGroupItem = () => (
    <GroupList>
        <GroupItem mode={Mode.LOADING} />
        <GroupItem mode={Mode.LOADING} />
        <GroupItem mode={Mode.LOADING} />
    </GroupList>
);

export const MoreGropuItem = () => <GroupItem mode={Mode.MORE} />;
