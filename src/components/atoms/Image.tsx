import React, { forwardRef } from 'react';

import styled from 'libs/styled';

const Img = styled.img`
    position: relative;
    text-indent: -9999px;
`;

export type ImageProps = JSX.IntrinsicElements['img'];

const Image = forwardRef<HTMLImageElement, ImageProps>(
    (
        { src, alt = '설명이 없는 사진입니다.', ...imgProps }: ImageProps,
        ref
    ) => <Img data-testid="image" alt={alt} src={src} ref={ref} {...imgProps} />
);

Image.displayName = 'Image';

export default Image;
