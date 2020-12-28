import React, { FC, LiHTMLAttributes, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DownArrowSvg from 'assets/images/down_arrow.svg';

import Group from 'types/api/response/Group';

import styled from 'libs/styled';

import { RootReducerState } from 'modules';
import { groupsAction } from 'modules/GroupsModule';

import Button, {
    Icon as IconBase,
    LoadingIcon as LoadingIconBase,
    LoadingText,
    Text
} from 'components/atoms/Button';
import Image from 'components/atoms/Image';

const GroupItemStyle = styled.li`
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
    width: 3.6rem;
    height: 3.6rem;
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

export interface GroupItemProps extends LiHTMLAttributes<HTMLLIElement> {
    group?: Group;
    mode?: Mode;
}

const GroupItem: FC<GroupItemProps> = ({
    group,
    mode = Mode.DATA,
    ...props
}: GroupItemProps) => {
    const dispatch = useDispatch();

    // 그룹 리스트 마지막 idx 조회
    const last = useSelector<
        RootReducerState,
        RootReducerState['GroupsReducer']['meta']['last']
    >(({ GroupsReducer }) => GroupsReducer.meta.last);

    // more 버튼 클릭 시 그룹 리스트 더보기
    const handleFetchMoreGroups = useCallback(() => {
        dispatch(groupsAction.fetchGroups(last));
    }, [last, dispatch]);

    return (
        <GroupItemStyle {...props}>
            {/* 더 보기 버튼 */}
            {mode === Mode.MORE && (
                <Button
                    data-testid="more-button"
                    onClick={handleFetchMoreGroups}>
                    <MoreIcon>
                        <Image src={DownArrowSvg} alt={'down arrow'} />
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
                    <Icon src={group.icon} alt={group.name} />
                    <Text>{group.name}</Text>
                </Button>
            )}
        </GroupItemStyle>
    );
};

export default GroupItem;
