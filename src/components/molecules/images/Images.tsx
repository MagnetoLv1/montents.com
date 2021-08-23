import { FC, HTMLAttributes, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { filter } from 'underscore';

import ImageInfo from 'types/ImageInfo';

import useImagesInfo from 'libs/hooks/useImagesInfo';

import ApiStatus from 'constants/ApiStatus';

import DualImages from 'components/molecules/images/DualImages';
import MultipleImages from 'components/molecules/images/MultipleImages';
import QuadImages from 'components/molecules/images/QuadImages';
import SingleImage from 'components/molecules/images/SingleImage';
import TripleImages from 'components/molecules/images/TripleImages';

const ImagesStyle = styled.div`
    position: relative;
`;

const Loading = styled.div`
    padding-top: 100%;

    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

export interface ImagesProps extends HTMLAttributes<HTMLDivElement> {
    images: string[];
}

const Images: FC<ImagesProps> = ({ images, ...props }: ImagesProps) => {
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
        <ImagesStyle {...props}>
            {/* 이미지 중 로딩중인 이미지가 존재 시 로딩 화면 노출 */}
            {loading && <Loading data-testid="loading" />}

            {/* 이미지 로딩 완료 후 이미지 갯수에 맞는 ui 노출 */}
            {!loading && (
                <>
                    {imagesInfo.length === 1 && (
                        <SingleImage
                            imagesInfo={imagesInfo}
                            data-testid="single-image"
                        />
                    )}
                    {imagesInfo.length === 2 && (
                        <DualImages
                            imagesInfo={imagesInfo}
                            data-testid="dual-images"
                        />
                    )}
                    {imagesInfo.length === 3 && (
                        <TripleImages
                            imagesInfo={imagesInfo}
                            data-testid="triple-images"
                        />
                    )}
                    {imagesInfo.length === 4 && (
                        <QuadImages
                            imagesInfo={imagesInfo}
                            data-testid="quad-images"
                        />
                    )}
                    {imagesInfo.length >= 5 && (
                        <MultipleImages
                            imagesInfo={imagesInfo}
                            data-testid="multiple-images"
                        />
                    )}
                </>
            )}
        </ImagesStyle>
    );
};

export default Images;
