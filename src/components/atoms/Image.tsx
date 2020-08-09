import React, {
    DetailedHTMLProps,
    forwardRef,
    ImgHTMLAttributes,
    SyntheticEvent,
    useState
} from 'react';

import styled from 'libs/styled';

interface IImg {
    empty: boolean;
}

const Img = styled.img<IImg>`
    background: ${({ empty, theme }) =>
        empty ? theme.colors.loadingBackground : 'transparent'};
`;

export interface IImage
    extends DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    empty?: boolean;
}

const Image = forwardRef<HTMLImageElement, IImage>(
    (
        {
            empty = false,
            onError,
            src,
            alt = '설명이 없는 사진입니다.',
            ...imgProps
        }: IImage,
        ref
    ) => {
        // 이미지가 없을 경우
        const [emptyImage, setEmptyImage] = useState(
            empty || !src || src === ''
        );

        // 이미지 로딩 에러
        const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
            if (onError) {
                return onError(event);
            }

            setEmptyImage(true);
        };

        return (
            <Img
                empty={emptyImage}
                alt={alt}
                src={src}
                ref={ref}
                onError={handleError}
                {...imgProps}
            />
        );
    }
);

Image.displayName = 'Image';

export default Image;
