import { useEffect, useState } from 'react';
import produce from 'immer';

import IImageInfo from 'types/IImageInfo';

import ApiStatus from 'constants/ApiStatus';

interface IUseImagesInfo {
    (images: string[]): IImageInfo[];
}

const useImagesInfo: IUseImagesInfo = (images) => {
    const [imagesInfo, setImagesInfo] = useState<IImageInfo[]>(
        images.map((image) => ({
            src: image,
            width: 0,
            height: 0,
            status: ApiStatus.CLEAR
        }))
    );

    useEffect(() => {
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
