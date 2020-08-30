import React from 'react';

import render from 'libs/test-utils';

import IImageInfo from 'types/IImageInfo';

import ApiStatus from 'constants/ApiStatus';

import DualImage from 'components/molecules/board/image/DualImage';

describe('molecules | board > image > <DualImage />', () => {
    describe('UI Test', () => {
        it('images exists', () => {
            const imagesInfo: IImageInfo[] = [
                {
                    src:
                        'http://www.montents.com/images/temp/board_image_10.jpg',
                    width: 767,
                    height: 1265,
                    status: ApiStatus.SUCCESS
                },
                {
                    src:
                        'http://www.montents.com/images/temp/board_image_9.jpg',
                    width: 435,
                    height: 650,
                    status: ApiStatus.SUCCESS
                }
            ];

            const { getAllByTestId } = render(
                <DualImage imagesInfo={imagesInfo} />
            );

            const images = getAllByTestId('image');

            expect(images.length).toBe(2);

            images.forEach((image, index) => {
                expect(image).toHaveAttribute('src', imagesInfo[index].src);
            });
        });

        it('error images exists', () => {
            const imagesInfo: IImageInfo[] = [
                {
                    src:
                        'http://www.montents.com/images/temp/board_image_10.jpg',
                    width: 767,
                    height: 1265,
                    status: ApiStatus.SUCCESS
                },
                {
                    src:
                        'http://www.montents.com/images/temp/board_image_9.jpg',
                    width: 0,
                    height: 0,
                    status: ApiStatus.ERROR
                }
            ];

            const { getAllByTestId } = render(
                <DualImage imagesInfo={imagesInfo} />
            );

            const images = getAllByTestId('image');
            const loadings = getAllByTestId('loading');

            expect(images.length).toBe(1);
            expect(loadings.length).toBe(1);
        });
    });
});
