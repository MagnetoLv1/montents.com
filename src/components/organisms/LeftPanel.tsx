import React, { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { GroupsAction } from 'modules/GroupsModule';

const LeftPanel: FC = () => {
    const dispatch = useDispatch();

    const { status, data, error } = useSelector(
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

    if (status === ApiStatus.LOADING || status === ApiStatus.CLEAR) {
        return <nav>로딩중...</nav>;
    }

    if (status === ApiStatus.ERROR) {
        return <nav>{error}</nav>;
    }

    return (
        <nav>
            <ul>
                {data.map((group) => (
                    <li key={group.idx}>{group.name}</li>
                ))}
            </ul>
        </nav>
    );
};

export default LeftPanel;
