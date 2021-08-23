import { FC, useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ClassName from 'types/ClassName';
import ImageInfo from 'types/ImageInfo';

import ConditionalImageBase from 'components/molecules/images/ConditionalImage';

// 컨테이너 배치 종류 (가로 배치. 큰 가로형 배치, 세로 배치, 큰 세로형 배치)
enum ContainerType {
    ROW,
    ROW_BIG,
    COLUMN,
    COLUMN_BIG
}

// 이미지 비율 (세로로 긴 직사각형, 정사각형, 가로로 긴 정사각형 등)
enum ImageRatio {
    VERTICAL = 0.5,
    VERTICAL_BIG = 0.66,
    VERTICAL_SMALL = 0.66,
    RECT = 1,
    HORIZONTAL_SMALL = 1.5,
    HORIZONTAL_BIG = 1.5,
    HORIZONTAL = 2
}

// 각 이미지 비율에 따른 컨테이너 종류
interface ShapeSize {
    type: ContainerType;
    imagesRatio: ImageRatio[];
}

const shapeSizes: ShapeSize[] = [
    // 가로 배치
    {
        type: ContainerType.ROW,
        imagesRatio: [ImageRatio.HORIZONTAL, ImageRatio.RECT, ImageRatio.RECT]
    },
    // 대형 가로 배치
    {
        type: ContainerType.ROW_BIG,
        imagesRatio: [
            ImageRatio.HORIZONTAL_BIG,
            ImageRatio.HORIZONTAL_SMALL,
            ImageRatio.HORIZONTAL_SMALL
        ]
    },
    // 세로 배치
    {
        type: ContainerType.COLUMN,
        imagesRatio: [ImageRatio.VERTICAL, ImageRatio.RECT, ImageRatio.RECT]
    },
    // 대형 세로 배치
    {
        type: ContainerType.COLUMN_BIG,
        imagesRatio: [
            ImageRatio.VERTICAL_BIG,
            ImageRatio.VERTICAL_SMALL,
            ImageRatio.VERTICAL_SMALL
        ]
    }
];

const TripleImagesStyle = styled.div`
    position: relative;
    padding-top: 100%;
`;

interface ContainerTypeProps {
    type: ContainerType;
}

const ImageContainer = styled.div<ContainerTypeProps>`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: stretch;

    flex-direction: ${({ type }) => {
        switch (type) {
            case ContainerType.ROW:
            case ContainerType.ROW_BIG:
                return 'column';
            case ContainerType.COLUMN:
            case ContainerType.COLUMN_BIG:
                return 'row';
        }
    }};
`;

const LargeImageContainer = styled.div<ContainerTypeProps>`
    position: relative;

    ${({ type }) => {
        switch (type) {
            case ContainerType.ROW:
                return css`
                    height: 50%;
                `;
            case ContainerType.ROW_BIG:
                return css`
                    height: 66%;
                `;
            case ContainerType.COLUMN:
                return css`
                    width: 50%;
                `;
            case ContainerType.COLUMN_BIG:
                return css`
                    width: 66%;
                `;
        }
    }}
`;

const SmallImageContainer = styled.div<ContainerTypeProps>`
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    ${({ type }) => {
        switch (type) {
            case ContainerType.ROW:
                return css`
                    flex-direction: row;
                    height: 50%;
                `;
            case ContainerType.ROW_BIG:
                return css`
                    flex-direction: row;
                    height: 34%;
                `;
            case ContainerType.COLUMN:
                return css`
                    flex-direction: column;
                    width: 50%;
                `;
            case ContainerType.COLUMN_BIG:
                return css`
                    flex-direction: column;
                    width: 34%;
                `;
        }
    }}
`;

const ConditionalImage = styled(ConditionalImageBase)`
    position: relative;
    width: 100%;
    height: 100%;
`;

const SmallConditionalImage = styled(ConditionalImageBase)<ContainerTypeProps>`
    position: relative;

    ${({ type }) => {
        switch (type) {
            case ContainerType.ROW:
            case ContainerType.ROW_BIG:
                return css`
                    width: 50%;
                    height: 100%;
                `;
            case ContainerType.COLUMN:
            case ContainerType.COLUMN_BIG:
                return css`
                    width: 100%;
                    height: 50%;
                `;
        }
    }};
`;

interface TripleImagesProps extends ClassName {
    imagesInfo: ImageInfo[];
}

const TripleImages: FC<TripleImagesProps> = ({
    imagesInfo,
    ...props
}: TripleImagesProps) => {
    // 각 이미지의 비율에 따른 배치 형태
    const containerType = useMemo(() => {
        let containerType: ContainerType = ContainerType.ROW,
            lastRatioDiff = -1;

        // 각 형태에 따른 비율 차이 계산
        shapeSizes.forEach(({ type, imagesRatio }) => {
            let ratioDiff = 0;

            imagesRatio.forEach((imageRatio, index) => {
                const { width, height } = imagesInfo[index];

                let ratio = width / height;
                isNaN(ratio) && (ratio = 1);

                ratioDiff += Math.abs(ratio - imageRatio);
            });

            // 가장 비율 차이가 적은 형태로 세팅
            if (lastRatioDiff === -1 || lastRatioDiff > ratioDiff) {
                containerType = type;
                lastRatioDiff = ratioDiff;
            }
        });

        return containerType;
    }, [imagesInfo]);

    // 이미지가 3개인 경우에만 렌더
    if (imagesInfo.length !== 3) {
        return null;
    }

    return (
        <TripleImagesStyle {...props}>
            <ImageContainer type={containerType}>
                <LargeImageContainer type={containerType}>
                    <ConditionalImage info={imagesInfo[0]} />
                </LargeImageContainer>

                <SmallImageContainer type={containerType}>
                    <SmallConditionalImage
                        info={imagesInfo[1]}
                        type={containerType}
                    />
                    <SmallConditionalImage
                        info={imagesInfo[2]}
                        type={containerType}
                    />
                </SmallImageContainer>
            </ImageContainer>
        </TripleImagesStyle>
    );
};

export default TripleImages;
