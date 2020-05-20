/** @jsx jsx */
import { Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { css, jsx } from '@emotion/core';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { GroupsAction } from 'modules/GroupsModule';

import Button from 'components/atoms/Button';

const style = css`
    display: flex;

    flex-direction: column;
    align-items: stretch;

    & > li {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 0 0.8rem;
        box-sizing: border-box;
    }
`;

const buttonStyle = css`
    & > .icon {
        width: 3.6rem;
        height: 3.6rem;
    }
`;

const GroupList = () => {
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

    return (
        <Fragment>
            {status === ApiStatus.ERROR && <nav>{error}</nav>}
            {(status === ApiStatus.LOADING || status === ApiStatus.CLEAR) && (
                <nav>로딩중...</nav>
            )}
            {status === ApiStatus.SUCCESS && (
                <ul css={style}>
                    {data.map((group) => (
                        <li key={group.idx}>
                            <Button css={buttonStyle}>
                                <img
                                    src={group.icon}
                                    alt={group.name}
                                    className="icon"
                                />
                                {group.name}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
};

export default GroupList;
