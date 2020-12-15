import React, { Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import styled from 'libs/styled';

import ApiStatus from 'constants/ApiStatus';

import { ContentsAction } from 'modules/ContentsModule';
import { TStoreState } from 'modules/store';

import ContentsItem, { Mode } from 'components/molecules/ContentItem';

const ContentsListWrap = styled.ul`
    display: flex;

    flex-direction: column;
    align-items: stretch;
`;

const ContentsList = () => {
    const dispatch = useDispatch();

    const { status, data, lastEvaluatedKey, more } = useSelector(
        ({ ContentsReducer }: TStoreState) => ({
            status: ContentsReducer.status,
            data: ContentsReducer.data,
            more: ContentsReducer.meta.more,
            last: ContentsReducer.meta.last,
            lastEvaluatedKey: ContentsReducer.meta.LastEvaluatedKey
        }),
        shallowEqual
    );

    // 그룹 데이터 조회
    useEffect(() => {
        dispatch(ContentsAction.fetchContents(lastEvaluatedKey));

        return () => {
            dispatch(ContentsAction.clearContents());
        };
    }, []);

    return (
        <ContentsListWrap>
            {(status === ApiStatus.LOADING ||
                status === ApiStatus.CLEAR ||
                status === ApiStatus.ERROR) &&
                [...Array(3)].map((value, idx) => (
                    <ContentsItem
                        mode={Mode.LOADING}
                        key={`loading_${idx}`}
                        data-testid={
                            status === ApiStatus.ERROR
                                ? 'error-Contents-item'
                                : 'loading-Contents-item'
                        }
                    />
                ))}
            {(status === ApiStatus.SUCCESS ||
                status === ApiStatus.MORE_LOADING) && (
                <Fragment>
                    {data.map((Content, idx) => (
                        <ContentsItem Content={Content} key={idx} />
                    ))}
                    {status === ApiStatus.SUCCESS && more && (
                        <ContentsItem
                            mode={Mode.MORE}
                            data-testid="more-Contents-item"
                        />
                    )}
                    {status === ApiStatus.MORE_LOADING && (
                        <ContentsItem
                            mode={Mode.LOADING}
                            data-testid="more-loading-Contents-item"
                        />
                    )}
                </Fragment>
            )}
        </ContentsListWrap>
    );
};

export default ContentsList;
