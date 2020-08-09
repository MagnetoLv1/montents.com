import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';

import render from 'libs/test-utils';

import { theme } from 'styles/Themes';

import Image from 'components/atoms/Image';

describe('atoms | <Image />', () => {
    const src = 'http://www.montents.com/images/temp/board_image_1.jpg',
        alt = 'board_image_1';

    describe('UI Test', () => {
        it('image exists', () => {
            const { getByAltText } = render(<Image src={src} alt={alt} />);

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });

        it("image doesn't exists", () => {
            const { getByAltText } = render(<Image alt={alt} />);

            const image = getByAltText(alt);
            expect(image).toHaveStyleRule(
                'background',
                theme.colors.loadingBackground
            );
        });
    });

    describe('Action Test', () => {
        it('onLoad event', async () => {
            const handleLoad = jest.fn();

            const { getByAltText } = render(
                <Image src={src} alt={alt} onLoad={handleLoad} />
            );

            const image = getByAltText(alt);
            fireEvent.load(image);

            expect(handleLoad).toBeCalled();
        });

        it('onError event', async () => {
            const handleError = jest.fn();

            const { getByAltText } = render(
                <Image alt={alt} onError={handleError} />
            );

            const image = getByAltText(alt);
            fireEvent.error(image);

            expect(handleError).toBeCalled();
        });
    });
});
