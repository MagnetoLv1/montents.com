import React, { FC, useMemo } from 'react';
import { css } from '@emotion/core';
import { reduce } from 'underscore';

import styled from 'libs/styled';

import IImageInfo from 'types/IImageInfo';

import ApiStatus from 'constants/ApiStatus';

import FulledImageBase from 'components/atoms/FulledImage';

enum RatioType {
    VERTICAL,
    SQUARE,
    HORIZONTAL
}

interface IDualImageWrap {
    ratioType: RatioType;
}

const DualImageWrap = styled.div<IDualImageWrap>`
    position: relative;
    padding-top: ${({ ratioType }) =>
        ratioType === RatioType.SQUARE ? 50 : 100}%;
`;

interface IImagesContainer {
    ratioType: RatioType;
}

const ImagesContainer = styled.div<IImagesContainer>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: ${({ ratioType }) =>
        ratioType === RatioType.HORIZONTAL ? 'column' : 'row'};
`;

interface IImageWrap {
    ratioType: RatioType;
}

const ImageWrap = styled.div<IImageWrap>`
    box-sizing: border-box;

    ${({ ratioType }) => {
        switch (ratioType) {
            case RatioType.HORIZONTAL:
                return css`
                    height: 50%;

                    &:first-of-type {
                        margin-bottom: 1px;
                    }
                `;
            case RatioType.VERTICAL:
            case RatioType.SQUARE:
            default:
                return css`
                    width: 50%;

                    &:first-of-type {
                        margin-right: 1px;
                    }
                `;
        }
    }}
`;

const FulledImage = styled(FulledImageBase)`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Loading = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

interface IDualImage {
    imagesInfo: IImageInfo[];
}

const DualImage: FC<IDualImage> = ({ imagesInfo }: IDualImage) => {
    const ratioType = useMemo<RatioType>(() => {
        // 각 이미지의 비율 종류 (세로, 정사각형, 가로)
        const imagesRatioType = imagesInfo.map<RatioType>((imageInfo) => {
            const ratio = imageInfo.width / imageInfo.height;
            switch (true) {
                // 가로로 긴 경우
                case ratio > 1:
                    return RatioType.HORIZONTAL;
                // 세로로 긴 경우
                case ratio < 1:
                    return RatioType.VERTICAL;
                // 정 사각형인 경우
                case ratio === 1:
                default:
                    return RatioType.SQUARE;
            }
        });

        const ratioType = reduce<RatioType[], RatioType>(
            imagesRatioType,
            (memo, ratioType) => (memo === ratioType ? memo : RatioType.SQUARE)
        );

        return ratioType === undefined ? RatioType.SQUARE : ratioType;
    }, imagesInfo);

    // 이미지 2개일 경우에만 render
    if (imagesInfo.length !== 2) {
        return null;
    }

    return (
        <DualImageWrap ratioType={ratioType}>
            <ImagesContainer ratioType={ratioType}>
                {/* 이미지 렌더링 */}
                {imagesInfo.map((imageInfo, index) => (
                    <ImageWrap
                        ratioType={ratioType}
                        key={`${index}_${imageInfo.src}`}>
                        {/* 이미지 불러오지 못한 경우 */}
                        {imageInfo.status !== ApiStatus.SUCCESS && (
                            <Loading data-testid="loading" />
                        )}

                        {/* 이미지 로딩 완료 */}
                        {imageInfo.status === ApiStatus.SUCCESS && (
                            <FulledImage src={imageInfo.src} />
                        )}
                    </ImageWrap>
                ))}
            </ImagesContainer>
        </DualImageWrap>
    );
};

export default DualImage;
