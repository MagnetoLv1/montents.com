import React, { Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import styled from 'libs/styled';

import ApiStatus from 'constants/ApiStatus';

import { GroupsAction } from 'modules/GroupsModule';
import { TStoreState } from 'modules/store';

import GroupItem from 'components/molecules/GroupItem';

const GroupListWrap = styled.ul`
    display: flex;

    flex-direction: column;
    align-items: stretch;
`;

const GroupList = () => {
    const dispatch = useDispatch();

    const { status, data, last, more, error } = useSelector(
        ({ GroupsReducer }: TStoreState) => ({
            status: GroupsReducer.status,
            data: GroupsReducer.data,
            more: GroupsReducer.meta.more,
            last: GroupsReducer.meta.last,
            error: GroupsReducer.error
        }),
        shallowEqual
    );

    // 그룹 데이터 조회
    useEffect(() => {
        dispatch(GroupsAction.fetchGroups(last));

        return () => {
            dispatch(GroupsAction.clearGroups());
        };
    }, []);

    return (
        <GroupListWrap>
            {(status === ApiStatus.LOADING ||
                status === ApiStatus.CLEAR ||
                status === ApiStatus.ERROR) &&
                [...Array(3)].map((value, idx) => (
                    <GroupItem
                        loading
                        key={`loading_${idx}`}
                        data-testid={
                            status === ApiStatus.ERROR
                                ? 'error-group-item'
                                : 'loading-group-item'
                        }
                    />
                ))}
            {(status === ApiStatus.SUCCESS ||
                status === ApiStatus.MORE_LOADING) && (
                <Fragment>
                    {data.map((group) => (
                        <GroupItem group={group} key={group.idx} />
                    ))}
                    {/*{status === ApiStatus.SUCCESS && more && (*/}
                    {/*    */}
                    {/*)}*/}
                </Fragment>
            )}
        </GroupListWrap>
    );
};

export default GroupList;
