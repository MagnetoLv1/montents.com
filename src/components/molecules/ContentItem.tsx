import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'libs/styled';

import IContent from 'types/response/IContent';

import { ContentsAction } from 'modules/ContentsModule';
import { TStoreState } from 'modules/store';

import DownArrow from 'svg/down_arrow.svg';

import Button, {
    Icon as IconBase,
    LoadingIcon as LoadingIconBase,
    LoadingText,
    Text
} from 'components/atoms/Button';

const ContentItemWrap = styled.li`
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

interface IContentItem {
    Content?: IContent;
    mode?: Mode;
}

const ContentItem: FC<IContentItem> = ({
    Content,
    mode = Mode.DATA,
    ...props
}: IContentItem) => {
    const dispatch = useDispatch();

    // 그룹 리스트 마지막 idx 조회
    const lastEvaluatedKey = useSelector(
        ({ ContentsReducer }: TStoreState) =>
            ContentsReducer.meta.LastEvaluatedKey
    );

    // more 버튼 클릭 시 그룹 리스트 더보기
    const handleFetchMoreContents = useCallback(() => {
        dispatch(ContentsAction.fetchContents(lastEvaluatedKey));
    }, [lastEvaluatedKey]);

    return (
        <ContentItemWrap {...props}>
            {/* 더 보기 버튼 */}
            {mode === Mode.MORE && (
                <Button
                    data-testid="more-button"
                    onClick={handleFetchMoreContents}>
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
            {mode === Mode.DATA && Content && (
                <Button>
                    <Text>{Content.site}</Text>
                    <img src={Content.image} width={100} height={100} />
                    <Text>{Content.title}</Text>
                </Button>
            )}
        </ContentItemWrap>
    );
};

export default ContentItem;
