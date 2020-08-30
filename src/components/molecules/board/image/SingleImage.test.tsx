import React from 'react';
import { clone } from 'underscore';

import render from 'libs/test-utils';

import ApiStatus from 'constants/ApiStatus';

import SingleImage from 'components/molecules/board/image/SingleImage';

describe('molecules | board > image > <SingleImage />', () => {
    const imagesInfo = [
        {
            src: 'http://www.montents.com/images/temp/board_image_10.jpg',
            width: 767,
            height: 1265,
            status: ApiStatus.SUCCESS
        }
    ];

    describe('UI Test', () => {
        it('image exists', async () => {
            const { findAllByTestId } = render(
                <SingleImage imagesInfo={imagesInfo} />
            );

            const images = await findAllByTestId('image');

            expect(images.length).toBe(1);

            images.forEach((image, index) => {
                expect(image).toHaveAttribute('src', imagesInfo[index].src);
            });
        });

        it('image loading', () => {
            const infoList = clone(imagesInfo);
            infoList[0].status = ApiStatus.LOADING;

            const { getByTestId } = render(
                <SingleImage imagesInfo={imagesInfo} />
            );

            const loading = getByTestId('loading');

            expect(loading).toBeTruthy();
        });

        it('image error', () => {
            const infoList = clone(imagesInfo);
            infoList[0].status = ApiStatus.ERROR;

            const { getByTestId } = render(
                <SingleImage imagesInfo={imagesInfo} />
            );

            const loading = getByTestId('loading');

            expect(loading).toBeTruthy();
        });
    });
});
