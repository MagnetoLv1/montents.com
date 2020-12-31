import React, { FC, HTMLAttributes } from 'react';

import ClassName from 'types/ClassName';
import ImageInfo from 'types/ImageInfo';

import styled from 'libs/styled';

import ConditionalImageBase from 'components/molecules/images/ConditionalImage';

interface SingleImageStyleProps {
    ratio: number;
}

const SingleImageStyle = styled.div<SingleImageStyleProps>`
    position: relative;
    padding-top: ${({ ratio }) => `${ratio > 150 ? 150 : ratio}%`};
`;

const FulledImageWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
`;

const ConditionalImage = styled(ConditionalImageBase)`
    width: 100%;
    height: 100%;
`;

interface SingleImageProps extends HTMLAttributes<HTMLDivElement> {
    imagesInfo: ImageInfo[];
}

const SingleImage: FC<SingleImageProps> = ({
    imagesInfo,
    ...props
}: SingleImageProps) => {
    const imageInfo = imagesInfo[0];
    const { height, width } = imageInfo;

    // 이미지 비율 계산
    let ratio = height / width;
    isNaN(ratio) && (ratio = 1);

    return (
        <SingleImageStyle ratio={ratio * 100} {...props}>
            <FulledImageWrap>
                {/* 이미지 렌더링 */}
                <ConditionalImage info={imageInfo} />
            </FulledImageWrap>
        </SingleImageStyle>
    );
};

export default SingleImage;
