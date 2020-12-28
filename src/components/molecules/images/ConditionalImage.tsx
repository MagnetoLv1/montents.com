import React, { FC } from 'react';

import ClassName from 'types/ClassName';
import ImageInfo from 'types/ImageInfo';

import styled from 'libs/styled';

import ApiStatus from 'constants/ApiStatus';

import ImageBase from 'components/atoms/Image';

const LoadingImage = styled.div`
    background: ${({ theme }) => theme.colors.loadingBackground};
    opacity: ${({ theme }) => theme.effect.contentLoadingOpacity};
`;

const Image = styled(ImageBase)`
    object-fit: cover;
`;

interface ConditionImageProps extends ClassName {
    info: ImageInfo;
}

const ConditionalImage: FC<ConditionImageProps> = ({
    info: { status, src },
    className
}: ConditionImageProps) => (
    <>
        {/* 이미지를 불러오지 못함 */}
        {status !== ApiStatus.SUCCESS && (
            <LoadingImage data-testid="loading" className={className} />
        )}

        {/* 이미지 로딩 완료 */}
        {status === ApiStatus.SUCCESS && (
            <Image src={src} className={className} />
        )}
    </>
);

export default ConditionalImage;
