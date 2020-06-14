import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import styled from 'libs/styled';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { GroupsAction } from 'modules/GroupsModule';

import GroupItem from 'components/molecules/GroupItem';

const GroupListWrap = styled.ul`
    display: flex;

    flex-direction: column;
    align-items: stretch;
`;

const GroupList = () => {
    const dispatch = useDispatch();

    const { status, data } = useSelector(
        ({ GroupsReducer }: TStoreState) => ({
            status: GroupsReducer.status,
            data: GroupsReducer.data,
            error: GroupsReducer.error
        }),
        shallowEqual
    );

    // 그룹 데이터 조회
    useEffect(() => {
        dispatch(GroupsAction.fetchGroups());

        return () => {
            dispatch(GroupsAction.clearGroups());
        };
    }, []);

    return (
        <GroupListWrap>
            {(status === ApiStatus.LOADING ||
                status === ApiStatus.CLEAR ||
                status === ApiStatus.ERROR) &&
                Array(3).map((value) => (
                    <GroupItem loading key={`loading_${value}`} />
                ))}
            {status === ApiStatus.SUCCESS &&
                data.map((group) => (
                    <GroupItem group={group} key={group.idx} />
                ))}
        </GroupListWrap>
    );
};

export default GroupList;
