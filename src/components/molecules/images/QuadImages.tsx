import React, { FC, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import ImageInfo from 'types/ImageInfo';

import ConditionalImageBase from 'components/molecules/images/ConditionalImage';

const QuadImagesStyle = styled.div`
    position: relative;
    padding-top: 100%;
`;

const ImagesContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    display: flex;
    flex-direction: column;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 0;
    flex-grow: 1;

    height: 50%;

    align-items: stretch;
`;

const ConditionalImage = styled(ConditionalImageBase)`
    flex-basis: 0;
    flex-grow: 1;

    width: 50%;
`;

interface QuadImagesProps extends HTMLAttributes<HTMLDivElement> {
    imagesInfo: ImageInfo[];
}

const QuadImages: FC<QuadImagesProps> = ({
    imagesInfo,
    ...props
}: QuadImagesProps) => {
    // 이미지가 4개인 경우만 렌더
    if (imagesInfo.length !== 4) {
        return null;
    }

    return (
        <QuadImagesStyle {...props}>
            <ImagesContainer>
                {[...Array(2)].map((value, rowIndex) => (
                    <RowContainer key={rowIndex}>
                        {[...Array(2)].map((value, colIndex) => (
                            <ConditionalImage
                                key={rowIndex * 2 + colIndex}
                                info={imagesInfo[rowIndex * 2 + colIndex]}
                            />
                        ))}
                    </RowContainer>
                ))}
            </ImagesContainer>
        </QuadImagesStyle>
    );
};

export default QuadImages;
