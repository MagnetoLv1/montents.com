import React, { FC } from 'react';

import styled from 'libs/styled';

import IImageInfo from 'types/IImageInfo';

import ApiStatus from 'constants/ApiStatus';

import FulledImageBase from 'components/atoms/FulledImage';

interface ISingleImageWrap {
    ratio: number;
}

const SingleImageWrap = styled.div<ISingleImageWrap>`
    position: relative;
    padding-top: ${({ ratio }) => `${ratio > 150 ? 150 : ratio}%`};
`;

const FulledImageWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const FulledImage = styled(FulledImageBase)`
    width: 100%;
    height: 100%;
`;

interface ISingleImage {
    images: IImageInfo[];
}

const SingleImage: FC<ISingleImage> = ({ images }: ISingleImage) => {
    const imageInfo = images[0];

    if (imageInfo.status !== ApiStatus.SUCCESS) {
        return null;
    }

    return (
        <SingleImageWrap ratio={(imageInfo.height / imageInfo.width) * 100}>
            <FulledImageWrap>
                <FulledImage src={imageInfo.src} />
            </FulledImageWrap>
        </SingleImageWrap>
    );
};

export default SingleImage;
