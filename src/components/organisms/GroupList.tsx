import styled from '@emotion/styled';
import { FC, Fragment, HTMLAttributes, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import GroupItem from '~/components/molecules/group/GroupItem';
import MoreButton from '~/components/molecules/MoreButton';
import ApiStatus from '~/constants/ApiStatus';
import { RootReducerState } from '~/modules';
import { groupsAction } from '~/modules/GroupsModule';

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
        Pick<RootReducerState['groupsReducer'], 'data' | 'status'> &
            Pick<RootReducerState['groupsReducer']['meta'], 'more'>
    >(
        ({ groupsReducer }) => ({
            status: groupsReducer.status,
            data: groupsReducer.data,
            more: groupsReducer.meta.more
        }),
        shallowEqual
    );

    // more 버튼 클릭 시 그룹 리스트 더보기
    const handleFetchMoreGroups = useCallback(() => {
        dispatch(groupsAction.fetchMoreGroups());
    }, [dispatch]);

    // 첫 그룹 데이터 조회
    useEffect(() => {
        dispatch(groupsAction.fetchGroups());

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
                        loading
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
                        <MoreButton
                            data-testid="more-group-item"
                            onClick={handleFetchMoreGroups}
                        />
                    )}

                    {/* 더보기 로딩 중 아이콘 노출 */}
                    {status === ApiStatus.MORE_LOADING && (
                        <GroupItem
                            loading
                            data-testid="more-loading-group-item"
                        />
                    )}
                </Fragment>
            )}
        </GroupListStyle>
    );
};

export default GroupList;
