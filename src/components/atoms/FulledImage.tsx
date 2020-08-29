import React, {
    FC,
    HTMLAttributes,
    ImgHTMLAttributes,
    useEffect,
    useRef,
    useState
} from 'react';
import ResizeDetector from 'react-resize-detector';
import { css } from '@emotion/core';

import styled from 'libs/styled';

import ImageBase from 'components/atoms/Image';

enum Type {
    LOADING,
    LOADED,
    ERROR,
    FIT_HEIGHT,
    FIT_WIDTH
}

interface IImageWrap {
    type: Type;
}

const ImageWrap = styled.div<IImageWrap>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;

    flex-direction: ${({ type }) =>
        type === Type.FIT_HEIGHT ? 'column' : 'row'};
`;

interface IImage {
    type: Type;
}

const Image = styled(ImageBase)<IImage>(({ type }) => {
    switch (type) {
        case Type.FIT_WIDTH:
            return css`
                width: 100%;
                height: auto;

                min-height: 100%;
            `;
        case Type.FIT_HEIGHT:
            return css`
                width: auto;
                height: 100%;

                min-width: 100%;
            `;
        default:
            return css`
                width: 100%;
            `;
    }
});

interface IFulledImage
    extends HTMLAttributes<HTMLDivElement>,
        Pick<ImgHTMLAttributes<{}>, 'src' | 'alt' | 'title'> {}

const FulledImage: FC<IFulledImage> = ({
    src = '',
    alt = '',
    title = '',
    ...divProps
}: IFulledImage) => {
    const imageRef = useRef<HTMLImageElement>(null),
        containerRef = useRef<HTMLDivElement>(null);

    const [type, setType] = useState(Type.LOADING);

    const handleChangeType = (type: Type) => () => {
        setType(type);
    };

    useEffect(() => {
        if (type !== Type.LOADED) {
            return;
        }

        if (imageRef.current === null || containerRef.current === null) {
            return;
        }

        const image = imageRef.current,
            container = containerRef.current;

        const imageRatio = image.width / image.height,
            containerRatio = container.offsetWidth / container.offsetHeight;

        setType(imageRatio > containerRatio ? Type.FIT_HEIGHT : Type.FIT_WIDTH);
    }, [type]);

    useEffect(() => {
        setType(Type.LOADING);
    }, [src]);

    return (
        <ResizeDetector onResize={handleChangeType(Type.LOADED)}>
            <ImageWrap type={type} {...divProps} ref={containerRef}>
                <Image
                    type={type}
                    src={src}
                    alt={alt}
                    title={title}
                    onLoad={handleChangeType(Type.LOADED)}
                    onError={handleChangeType(Type.ERROR)}
                    ref={imageRef}
                />
            </ImageWrap>
        </ResizeDetector>
    );
};

export default FulledImage;
