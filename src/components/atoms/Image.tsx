import React, {
    DetailedHTMLProps,
    forwardRef,
    ImgHTMLAttributes,
    SyntheticEvent
} from 'react';

import styled from 'libs/styled';

const Img = styled.img`
    position: relative;
    text-indent: -9999px;
`;

export interface IImage
    extends DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    load?: boolean;
    onError?: (event: SyntheticEvent<HTMLImageElement>) => void | boolean;
}

const Image = forwardRef<HTMLImageElement, IImage>(
    ({ src, alt = '설명이 없는 사진입니다.', ...imgProps }: IImage, ref) => (
        <Img data-testid="image" alt={alt} src={src} ref={ref} {...imgProps} />
    )
);

Image.displayName = 'Image';

export default Image;
