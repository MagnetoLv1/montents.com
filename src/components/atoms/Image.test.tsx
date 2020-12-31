import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import Image from 'components/atoms/Image';

describe('Components | Atoms | <Image />', () => {
    const src = '/assets/images/temp/board_image_1.jpg',
        alt = 'board_image_1';

    it('image 태그 노출 확인', () => {
        const { getByAltText } = render(<Image src={src} alt={alt} />);

        const image = getByAltText(alt);
        expect(image).toHaveAttribute('src', src);
    });

    it('onLoad 이벤트 실행 확인', async () => {
        const handleLoad = jest.fn();

        const { getByAltText } = render(
            <Image src={src} alt={alt} onLoad={handleLoad} />
        );

        const image = getByAltText(alt);
        fireEvent.load(image);

        expect(handleLoad).toBeCalled();
    });

    it('onError 이벤트 실행 확인', async () => {
        const handleError = jest.fn();

        const { getByAltText } = render(
            <Image src="unknown" alt={alt} onError={handleError} />
        );

        const image = getByAltText(alt);
        fireEvent.error(image);

        expect(handleError).toBeCalled();
    });
});
