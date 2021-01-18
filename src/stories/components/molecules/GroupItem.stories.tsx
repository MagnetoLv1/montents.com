import React from 'react';
import { Story } from '@storybook/react';

import groupResponse from 'data/groups/get_1.json';

import styled from 'libs/styled';

import GroupItem, {
    LoadableGroupItemProps
} from 'components/molecules/GroupItem';

const groupData = groupResponse.data[0];

export default {
    title: 'Components/Molecules/GroupItem',
    component: GroupItem,
    parameters: {
        docs: {
            description: {
                component: '각 그룹의 정보를 노출 시켜주는 컨포넌트'
            }
        }
    },
    args: {
        group: groupData,
        loading: false
    },
    argTypes: {
        group: {
            control: 'object',
            description: '그룹 json data'
        },
        loading: {
            control: 'boolean',
            description: '로딩 여부'
        }
    }
};

const GroupList = styled.ul`
    display: flex;
    width: 30rem;

    flex-direction: column;
    align-items: stretch;
`;

/**
 * 기본 그룹 story
 * @param group
 * @param loading
 * @constructor
 */
export const DefaultGroupItem: Story<LoadableGroupItemProps> = ({
    group,
    loading
}: LoadableGroupItemProps) => (
    <GroupList>
        <GroupItem group={group} loading={loading} />
    </GroupList>
);

DefaultGroupItem.storyName = 'Default';

/**
 * 그룹 로딩 중 story
 * @constructor
 */
export const LoadingGroupItem: Story = () => (
    <GroupList>
        <GroupItem loading />
    </GroupList>
);

LoadingGroupItem.storyName = 'Loading';

LoadingGroupItem.argTypes = {
    group: {
        table: {
            disable: true
        }
    },
    mode: {
        table: {
            disable: true
        }
    }
};
