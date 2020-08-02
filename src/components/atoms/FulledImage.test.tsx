import React from 'react';

import render from 'libs/test-utils';

import FulledImage from 'components/atoms/FulledImage';

describe('atoms > <FulledImage />', () => {
    const src = 'http://www.montents.com/images/temp/board_image_1.jpg',
        alt = 'board_image_1';

    describe('UI Test', () => {
        it('image exists', () => {
            const { getByAltText } = render(
                <FulledImage src={src} alt={alt} />
            );

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });
    });
});
