import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, HTMLAttributes, useMemo } from 'react';

import ConditionalImageBase from '~/components/molecules/images/ConditionalImage';
import ImageInfo from '~/types/ImageInfo';

enum ContainerType {
    ROW,
    COLUMN
}

interface ContainerTypeProps {
    type: ContainerType;
}

const MultipleImagesStyle = styled.div<ContainerTypeProps>`
    position: relative;
    padding-top: ${({ type }) =>
        type === ContainerType.ROW ? '83.333%' : '100%'};
`;

const ImageContainer = styled.div<ContainerTypeProps>`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    display: flex;
    flex-direction: ${({ type }) =>
        type === ContainerType.ROW ? 'column' : 'row'};
    align-items: stretch;
`;

const LargeImageContainer = styled.div<ContainerTypeProps>`
    display: flex;
    flex-direction: ${({ type }) =>
        type === ContainerType.ROW ? 'row' : 'column'};
    flex-basis: 0;
    flex-grow: 1;
    align-items: stretch;
`;

const SmallImageContainer = styled.div<ContainerTypeProps>`
    display: flex;
    flex-direction: ${({ type }) =>
        type === ContainerType.ROW ? 'row' : 'column'};
    flex-basis: 0;
    flex-grow: 0.666;
    align-items: stretch;
`;

interface ConditionalImageProps {
    type: ContainerType;
    last?: boolean;
    count?: number;
}

const ConditionalImageWrap = styled.div<ConditionalImageProps>`
    position: relative;
    flex-basis: 0;
    flex-grow: 1;

    ${({ type }) => (type === ContainerType.ROW ? 'width: 0;' : 'height: 0;')};

    ${({ last, count }) => {
        if (!last || count === 0) {
            return null;
        }

        // 초과 이미지 갯수 노출
        return css`
            &::after {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                display: flex;
                justify-content: center;
                align-items: center;

                content: '${'+' + count + '장'}';

                background: rgba(0, 0, 0, 0.4);
                color: white;
                font-weight: 400;
                font-size: 2.6rem;
                letter-spacing: 0.3rem;
            }
        `;
    }}
`;

const ConditionalImage = styled(ConditionalImageBase)`
    width: 100%;
    height: 100%;
`;

interface MultipleImagesProps extends HTMLAttributes<HTMLDivElement> {
    imagesInfo: ImageInfo[];
}

const MultipleImages: FC<MultipleImagesProps> = ({
    imagesInfo,
    ...props
}: MultipleImagesProps) => {
    const containerType = useMemo(() => {
        let containerType = ContainerType.ROW;

        const lastThreeImages = imagesInfo.slice(2, 5);

        // 이미지 갯수가 적을 경우 기본값 반환
        if (lastThreeImages.length !== 3) {
            return containerType;
        }

        let rowImageCount = 0;
        lastThreeImages.forEach((image) => {
            const { width, height } = image;
            if (width / height > 1) rowImageCount++;
        });

        // 3개의 이미지 중 가로비율 이미지가 많을 경우 세로 ui로 변경
        if (rowImageCount >= 2) {
            containerType = ContainerType.COLUMN;
        }

        return containerType;
    }, [imagesInfo]);

    // 이미지가 5개 이상인 경우만 렌더
    if (imagesInfo.length < 5) {
        return null;
    }

    return (
        <MultipleImagesStyle type={containerType} {...props}>
            <ImageContainer type={containerType}>
                <LargeImageContainer type={containerType}>
                    {[...Array(2)].map((value, index) => (
                        <ConditionalImageWrap key={index} type={containerType}>
                            <ConditionalImage info={imagesInfo[index]} />
                        </ConditionalImageWrap>
                    ))}
                </LargeImageContainer>
                <SmallImageContainer type={containerType}>
                    {[...Array(3)].map((value, index) => (
                        <ConditionalImageWrap
                            key={index}
                            type={containerType}
                            last={index === 2}
                            count={imagesInfo.length - 5}>
                            <ConditionalImage info={imagesInfo[2 + index]} />
                        </ConditionalImageWrap>
                    ))}
                </SmallImageContainer>
            </ImageContainer>
        </MultipleImagesStyle>
    );
};

export default MultipleImages;
