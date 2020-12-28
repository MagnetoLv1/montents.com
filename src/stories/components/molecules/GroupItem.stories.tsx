import React from 'react';
import { Story } from '@storybook/react';

import groupResponse from 'data/groups/get_1.json';

import styled from 'libs/styled';

import GroupItem, {
    GroupItemProps,
    Mode
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
        mode: Mode.DATA
    },
    argTypes: {
        group: {
            control: 'object',
            description: '그룹 json data'
        },
        mode: {
            control: {
                type: 'select',
                options: {
                    '일반 그룹': Mode.DATA,
                    '로딩 중': Mode.LOADING,
                    더보기: Mode.MORE
                }
            },
            description: '그룹 현재 모드'
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
 * @constructor
 */
export const DefaultGroupItem: Story<GroupItemProps> = ({
    group,
    mode
}: GroupItemProps) => (
    <GroupList>
        <GroupItem group={group} mode={mode} />
    </GroupList>
);

DefaultGroupItem.storyName = 'Default';

/**
 * 그룹 로딩 중 story
 * @constructor
 */
export const LoadingGroupItem: Story = () => (
    <GroupList>
        <GroupItem mode={Mode.LOADING} />
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

/**
 * 그룹 더보기 버튼 story
 * @constructor
 */
export const MoreGroupItem: Story = () => (
    <GroupList>
        <GroupItem mode={Mode.MORE} />
    </GroupList>
);

MoreGroupItem.storyName = 'More';

MoreGroupItem.argTypes = {
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
