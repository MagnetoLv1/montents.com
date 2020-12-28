import React, { FC, useMemo } from 'react';
import { css } from '@emotion/core';
import { reduce } from 'underscore';

import ClassName from 'types/ClassName';
import ImageInfo from 'types/ImageInfo';

import styled from 'libs/styled';

import ConditionImageBase from 'components/molecules/images/ConditionalImage';

enum RatioType {
    VERTICAL,
    SQUARE,
    HORIZONTAL
}

interface DualImageStyleProps {
    ratioType: RatioType;
}

const DualImageStyle = styled.div<DualImageStyleProps>`
    position: relative;
    padding-top: ${({ ratioType }) =>
        ratioType === RatioType.SQUARE ? 50 : 100}%;
`;

interface ImagesContainerProps {
    ratioType: RatioType;
}

const ImagesContainer = styled.div<ImagesContainerProps>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: ${({ ratioType }) =>
        ratioType === RatioType.HORIZONTAL ? 'column' : 'row'};
`;

interface ImageWrapProps {
    ratioType: RatioType;
}

const ImageWrap = styled.div<ImageWrapProps>`
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

const ConditionalImage = styled(ConditionImageBase)`
    width: 100%;
    height: 100%;
`;

interface DualImageProps extends ClassName {
    imagesInfo: ImageInfo[];
}

const DualImage: FC<DualImageProps> = ({
    imagesInfo,
    className
}: DualImageProps) => {
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
    }, [imagesInfo]);

    // 이미지 2개일 경우에만 render
    if (imagesInfo.length !== 2) {
        return null;
    }

    return (
        <DualImageStyle ratioType={ratioType} className={className}>
            <ImagesContainer ratioType={ratioType}>
                {/* 이미지 렌더링 */}
                {imagesInfo.map((imageInfo, index) => (
                    <ImageWrap
                        ratioType={ratioType}
                        key={`${index}_${imageInfo.src}`}>
                        <ConditionalImage info={imageInfo} />
                    </ImageWrap>
                ))}
            </ImagesContainer>
        </DualImageStyle>
    );
};

export default DualImage;
