/** @jsx jsx */
import { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { css, jsx } from '@emotion/core';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { GroupsAction } from 'modules/GroupsModule';

import { TTheme } from 'styles/Themes';

const style = (theme: TTheme) => css`
    background: white;
    box-shadow: ${theme.shadow};
`;

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

    return (
        <nav id="left-panel" data-testid="left-panel" css={style}>
            {status === ApiStatus.ERROR && <nav>{error}</nav>}
            {(status === ApiStatus.LOADING || status === ApiStatus.CLEAR) && (
                <nav>로딩중...</nav>
            )}
            {status === ApiStatus.SUCCESS && (
                <ul>
                    {data.map((group) => (
                        <li key={group.idx}>{group.name}</li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default LeftPanel;
