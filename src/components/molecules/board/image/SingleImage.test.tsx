import React from 'react';

import render from 'libs/test-utils';

import SingleImage from 'components/molecules/board/image/SingleImage';

describe('molecules | board > image > <SingleImage />', () => {
    const imagesInfo = [
        {
            src: 'http://www.montents.com/images/temp/board_image_10.jpg',
            width: 767,
            height: 1265,
            status: 3
        }
    ];

    describe('UI Test', () => {
        it('image exists', async () => {
            const { findAllByTestId } = render(
                <SingleImage images={imagesInfo} />
            );

            const images = await findAllByTestId('image');

            expect(images.length).toBe(1);

            images.forEach((image, index) => {
                expect(image).toHaveAttribute('src', imagesInfo[index].src);
            });
        });
    });
});
