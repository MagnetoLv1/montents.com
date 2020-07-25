import React from 'react';

import render from 'libs/test-utils';

import Icon from 'components/atoms/Icon';

describe('<Icon />', () => {
    describe('UI test', () => {
        it('children exists', () => {
            const alt = 'logo',
                src = '/images/logo.png';

            const { getByAltText } = render(
                <Icon>
                    <img src={src} alt={alt} />
                </Icon>
            );

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });

        it('image props exists', () => {
            const alt = 'logo',
                src = '/images/logo.png';

            const { getByAltText } = render(<Icon src={src} alt={alt} />);

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });
    });
});
