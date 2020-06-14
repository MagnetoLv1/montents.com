import React, { FC } from 'react';

import styled from 'libs/styled';

import IGroups from 'types/IGroups';
import ILoadable from 'types/ILoadable';

import Button, {
    Icon as IconBase,
    LoadingIcon as LoadingIconBase,
    LoadingText,
    Text
} from 'components/atoms/Button';

interface IGroupItem extends ILoadable {
    group?: IGroups;
}

const GroupItemWrap = styled.li`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 0.8rem;
    box-sizing: border-box;
`;

const Icon = styled(IconBase)`
    width: 3.6rem;
    height: 3.6rem;
`;

const LoadingIcon = styled(LoadingIconBase)`
    width: 3.6rem;
    height: 3.6rem;
`;

const GroupItem: FC<IGroupItem> = ({ group, loading }: IGroupItem) => {
    return (
        <GroupItemWrap>
            {loading || group === undefined ? (
                <Button data-testid="loading-button">
                    <LoadingIcon />
                    <LoadingText />
                </Button>
            ) : (
                <Button>
                    <Icon>
                        <img
                            src={group.icon}
                            alt={group.name}
                            className="icon"
                        />
                    </Icon>
                    <Text>{group.name}</Text>
                </Button>
            )}
        </GroupItemWrap>
    );
};

export default GroupItem;
