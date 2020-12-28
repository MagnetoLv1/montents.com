import React, { FC, Fragment, HTMLAttributes, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import styled from 'libs/styled';

import ApiStatus from 'constants/ApiStatus';

import { RootReducerState } from 'modules';
import { groupsAction } from 'modules/GroupsModule';

import GroupItem, { Mode } from 'components/molecules/GroupItem';

const GroupListStyle = styled.ul`
    display: flex;

    flex-direction: column;
    align-items: stretch;
`;

interface GroupListProps extends HTMLAttributes<HTMLUListElement> {}

const GroupList: FC<GroupListProps> = ({ ...props }) => {
    const dispatch = useDispatch();

    const { status, data, more } = useSelector<
        RootReducerState,
        Pick<RootReducerState['GroupsReducer'], 'data' | 'status'> &
            Pick<RootReducerState['GroupsReducer']['meta'], 'more'>
    >(
        ({ GroupsReducer }) => ({
            status: GroupsReducer.status,
            data: GroupsReducer.data,
            more: GroupsReducer.meta.more
        }),
        shallowEqual
    );

    // 첫 그룹 데이터 조회
    useEffect(() => {
        dispatch(groupsAction.fetchGroups(null));

        return () => {
            dispatch(groupsAction.clearGroups());
        };
    }, [dispatch]);

    return (
        <GroupListStyle {...props}>
            {/* 데이터 조회 중 / 데이터 조회 실패 */}
            {[ApiStatus.CLEAR, ApiStatus.ERROR, ApiStatus.LOADING].includes(
                status
            ) &&
                [...Array(3)].map((value, idx) => (
                    <GroupItem
                        mode={Mode.LOADING}
                        key={`loading_${idx}`}
                        data-testid={
                            status === ApiStatus.ERROR
                                ? 'error-group-item'
                                : 'loading-group-item'
                        }
                    />
                ))}

            {/* 데이터 조회 완료 */}
            {(status === ApiStatus.SUCCESS ||
                status === ApiStatus.MORE_LOADING) && (
                <Fragment>
                    {/* 데이터 리스트 노출 */}
                    {data.map((group) => (
                        <GroupItem group={group} key={group.idx} />
                    ))}

                    {/* 더보기 버튼 노출 */}
                    {status === ApiStatus.SUCCESS && more && (
                        <GroupItem
                            mode={Mode.MORE}
                            data-testid="more-group-item"
                        />
                    )}

                    {/* 더보기 로딩 중 아이콘 노출 */}
                    {status === ApiStatus.MORE_LOADING && (
                        <GroupItem
                            mode={Mode.LOADING}
                            data-testid="more-loading-group-item"
                        />
                    )}
                </Fragment>
            )}
        </GroupListStyle>
    );
};

export default GroupList;
