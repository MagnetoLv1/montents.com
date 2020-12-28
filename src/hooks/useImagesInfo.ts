import { useEffect, useState } from 'react';
import produce from 'immer';

import ImageInfo from 'types/ImageInfo';

import ApiStatus from 'constants/ApiStatus';

const defaultImageInfo: ImageInfo = {
    src: '',
    width: 0,
    height: 0,
    status: ApiStatus.CLEAR
};

const useImagesInfo = (images: string[]): ImageInfo[] => {
    const [imagesInfo, setImagesInfo] = useState<ImageInfo[]>(
        images.map((image) => ({
            ...defaultImageInfo,
            src: image
        }))
    );

    useEffect(() => {
        setImagesInfo(
            images.map((image) => ({
                ...defaultImageInfo,
                src: image
            }))
        );

        images.forEach((image, index) => {
            const imageObject = new Image();
            imageObject.src = image;
            imageObject.onload = () => {
                const width = imageObject.width,
                    height = imageObject.height;

                setImagesInfo((imagesInfo) =>
                    produce(imagesInfo, (draftState) => {
                        draftState[index] = {
                            src: image,
                            width,
                            height,
                            status: ApiStatus.SUCCESS
                        };
                    })
                );
            };

            imageObject.onerror = () => {
                setImagesInfo((imagesInfo) =>
                    produce(imagesInfo, (draftState) => {
                        draftState[index] = {
                            src: image,
                            width: 0,
                            height: 0,
                            status: ApiStatus.ERROR
                        };
                    })
                );
            };
        });
    }, [images]);

    return imagesInfo;
};

export default useImagesInfo;
