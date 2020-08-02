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

interface IFUlledImageWrapper {
    fit: FIT_DIRECTION;
}

const FulledImageWrapper = styled.div<IFUlledImageWrapper>`
    position: relative;
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

interface IFulledImage
    extends HTMLAttributes<HTMLDivElement>,
        Pick<ImgHTMLAttributes<{}>, 'src' | 'alt' | 'title'> {}

const FulledImage: FC<IFulledImage> = ({
    src,
    alt,
    title,
    ...divProps
}: IFulledImage) => {
    const divRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [fit, setFit] = useState(FIT_DIRECTION.HEIGHT);

    const handleResize = useCallback(() => {
        const image = imageRef.current;
        const container = divRef.current;

        let containerRatio = 1;
        if (container !== null) {
            containerRatio = container.offsetWidth / container.offsetHeight;
        }

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

    return (
        <ResizeDetector onResize={handleResize}>
            <FulledImageWrapper {...divProps} ref={divRef} fit={fit}>
                <img
                    src={src}
                    alt={alt}
                    title={title}
                    onLoad={handleResize}
                    ref={imageRef}
                />
            </FulledImageWrapper>
        </ResizeDetector>
    );
};

export default FulledImage;
