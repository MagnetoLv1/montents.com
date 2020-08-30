import React, { FC, useEffect, useState } from 'react';
import { filter } from 'underscore';

import styled from 'libs/styled';

import IClassName from 'types/IClassName';
import IImageInfo from 'types/IImageInfo';
import IBoard from 'types/response/IBoard';

import ApiStatus from 'constants/ApiStatus';

import useImagesInfo from 'hooks/useImagesInfo';

import SingleImage from 'components/molecules/board/image/SingleImage';

const Loading = styled.div`
    padding-top: 100%;

    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

interface IImages extends IClassName {
    board: IBoard;
}

const Images: FC<IImages> = ({ board }: IImages) => {
    const [loading, setLoading] = useState(true);

    const imagesInfo = useImagesInfo(board.images);

    // 이미지 전체 로딩 완료 여부
    useEffect(() => {
        const loadingCount = filter<IImageInfo[]>(
            imagesInfo,
            (imageInfo) => imageInfo.status === ApiStatus.LOADING
        ).length;

        setLoading(loadingCount > 0);
    }, [imagesInfo]);

    // 이미지 중 로딩중인 이미지가 존재
    if (loading) {
        return <Loading data-testid="loading" />;
    }

    return <SingleImage imagesInfo={imagesInfo} />;
};

export default Images;
