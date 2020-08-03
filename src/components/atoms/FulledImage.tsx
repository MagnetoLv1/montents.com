import React, {
    FC,
    HTMLAttributes,
    ImgHTMLAttributes,
    useCallback,
    useRef,
    useState
} from 'react';
import ResizeDetector from 'react-resize-detector';
import css from '@emotion/css';

import styled from 'libs/styled';

enum FIT_DIRECTION {
    HEIGHT,
    WIDTH
}

const FulledImageWrapper = styled.div`
    position: relative;
`;

interface IImageWrap {
    fit: FIT_DIRECTION;
    width: number;
    height: number;
}

const ImageWrap = styled.div<IImageWrap>`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    overflow: hidden;
    display: flex;
    align-items: center;

    ${({ fit }) =>
        fit === FIT_DIRECTION.HEIGHT
            ? css`
                  flex-direction: column;

                  & > img {
                      height: 100%;
                      width: auto;
                  }
              `
            : css`
                  flex-direction: row;

                  & > img {
                      width: 100%;
                      height: auto;
                  }
              `}
`;

interface IResizeDetectorRenderParameters {
    width: number;
    height: number;
}

interface IFulledImage
    extends HTMLAttributes<HTMLDivElement>,
        Pick<ImgHTMLAttributes<{}>, 'src' | 'alt' | 'title'> {}

const FulledImage: FC<IFulledImage> = ({
    src,
    alt,
    title,
    ...divProps
}: IFulledImage) => {
    const imageRef = useRef<HTMLImageElement>(null);

    const [fit, setFit] = useState(FIT_DIRECTION.HEIGHT);

    // 리사이즈 시 이미지가 wrap 사이즈에 맞도록 변경
    const handleResize = useCallback((width, height) => {
        const image = imageRef.current;

        const containerRatio = width / height;

        let imageRatio = 1;
        if (image !== null) {
            imageRatio = image.width / image.height;
        }

        setFit(
            imageRatio > containerRatio
                ? FIT_DIRECTION.HEIGHT
                : FIT_DIRECTION.WIDTH
        );
    }, []);

    // 이미지 변경 시 wrap 사이즈에 맞도록 변경
    const handleLoadImage = useCallback(
        (width, height) => () => {
            handleResize(width, height);
        },
        []
    );

    return (
        <ResizeDetector onResize={handleResize}>
            {({ width, height }: IResizeDetectorRenderParameters) => (
                <FulledImageWrapper {...divProps}>
                    <ImageWrap fit={fit} width={width} height={height}>
                        <img
                            src={src}
                            alt={alt}
                            title={title}
                            onLoad={handleLoadImage(width, height)}
                            ref={imageRef}
                        />
                    </ImageWrap>
                </FulledImageWrapper>
            )}
        </ResizeDetector>
    );
};

export default FulledImage;
