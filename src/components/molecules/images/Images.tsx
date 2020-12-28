import React, { FC, useEffect, useState } from 'react';
import { filter } from 'underscore';

import ClassName from 'types/ClassName';
import ImageInfo from 'types/ImageInfo';

import styled from 'libs/styled';

import ApiStatus from 'constants/ApiStatus';

import useImagesInfo from 'hooks/useImagesInfo';

import DualImage from 'components/molecules/images/DualImage';
import SingleImage from 'components/molecules/images/SingleImage';
import TripleImage from 'components/molecules/images/TripleImage';

const ImagesStyle = styled.div`
    position: relative;
`;

const Loading = styled.div`
    padding-top: 100%;

    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

export interface ImagesProps extends ClassName {
    images: string[];
}

const Images: FC<ImagesProps> = ({ images, className }: ImagesProps) => {
    const [loading, setLoading] = useState(true);

    const imagesInfo = useImagesInfo(images);

    // 이미지 전체 로딩 완료 여부
    useEffect(() => {
        const loadingCount = filter<ImageInfo[]>(imagesInfo, (imageInfo) =>
            [ApiStatus.CLEAR, ApiStatus.LOADING].includes(imageInfo.status)
        ).length;

        setLoading(loadingCount > 0);
    }, [imagesInfo]);

    // 이미지가 없을 경우 빈 ui 반환
    if (imagesInfo.length === 0) {
        return null;
    }

    return (
        <ImagesStyle className={className}>
            {/* 이미지 중 로딩중인 이미지가 존재 시 로딩 화면 노출 */}
            {loading && <Loading data-testid="loading" />}

            {!loading && (
                <>
                    {imagesInfo.length === 1 && (
                        <SingleImage imagesInfo={imagesInfo} />
                    )}
                    {imagesInfo.length === 2 && (
                        <DualImage imagesInfo={imagesInfo} />
                    )}
                    {imagesInfo.length >= 3 && (
                        <TripleImage imagesInfo={imagesInfo} />
                    )}
                </>
            )}
        </ImagesStyle>
    );
};

export default Images;
