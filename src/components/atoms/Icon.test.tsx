import React from 'react';

import render from 'libs/test-utils';

import Icon from 'components/atoms/Icon';

describe('atoms | <Icon />', () => {
    const alt = 'logo',
        src = '/images/logo.png',
        href = 'http://google.com';
    describe('UI test', () => {
        it('children exists', () => {
            const { getByAltText } = render(
                <Icon>
                    <img src={src} alt={alt} />
                </Icon>
            );

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });

        it('image props exists', () => {
            const { getByAltText } = render(<Icon src={src} alt={alt} />);

            const image = getByAltText(alt);
            expect(image).toHaveAttribute('src', src);
        });

        it('link exists', () => {
            const { container } = render(
                <Icon src={src} alt={alt} href={href} />
            );

            const icon = container.firstChild;
            expect(icon).toHaveAttribute('href', href);
        });
    });
});
