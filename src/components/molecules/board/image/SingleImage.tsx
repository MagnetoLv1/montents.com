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
    overflow-y: hidden;
`;

const FulledImage = styled(FulledImageBase)`
    width: 100%;
    height: 100%;
    position: relative;
`;

const LoadingImage = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

interface ISingleImage {
    imagesInfo: IImageInfo[];
}

const SingleImage: FC<ISingleImage> = ({ imagesInfo }: ISingleImage) => {
    const { src, height, width, status } = imagesInfo[0];

    // 이미지 비율 계산
    let ratio = height / width;
    isNaN(ratio) && (ratio = 1);

    return (
        <SingleImageWrap ratio={ratio * 100}>
            <FulledImageWrap>
                {/* 이미지를 불러오지 못함 */}
                {status !== ApiStatus.SUCCESS && (
                    <LoadingImage data-testid="loading" />
                )}

                {/* 이미지 로딩 완료 */}
                {status === ApiStatus.SUCCESS && <FulledImage src={src} />}
            </FulledImageWrap>
        </SingleImageWrap>
    );
};

export default SingleImage;
