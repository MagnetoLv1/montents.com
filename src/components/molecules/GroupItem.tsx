import React, { FC } from 'react';

import styled from 'libs/styled';

import IGroup from 'types/response/IGroup';

import DownArrow from 'svg/down_arrow.svg';

import Button, {
    Icon as IconBase,
    LoadingIcon as LoadingIconBase,
    LoadingText,
    Text
} from 'components/atoms/Button';

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

const MoreIcon = styled(Icon)`
    background: ${({ theme }) => theme.colors.loadingBackground};
    border-radius: 50%;

    display: flex;
    flex-direction: row;
    align-content: center;
`;

export enum Mode {
    DATA,
    LOADING,
    MORE
}

interface IGroupItem {
    group?: IGroup;
    mode?: Mode;
}

const GroupItem: FC<IGroupItem> = ({
    group,
    mode = Mode.DATA,
    ...props
}: IGroupItem) => {
    return (
        <GroupItemWrap {...props}>
            {/* 더 보기 버튼 */}
            {mode === Mode.MORE && (
                <Button data-testid="more-button">
                    <MoreIcon>
                        <DownArrow />
                    </MoreIcon>
                    <Text>더 보기</Text>
                </Button>
            )}

            {/* 로딩 버튼 */}
            {mode === Mode.LOADING && (
                <Button data-testid="loading-button">
                    <LoadingIcon />
                    <LoadingText />
                </Button>
            )}

            {/* 그룹 데이터 버튼 */}
            {mode === Mode.DATA && group && (
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
