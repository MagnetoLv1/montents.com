import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Anchor from 'components/atoms/Anchor';

describe('atoms | <Anchor />', () => {
    const text = 'test anchor',
        href = 'http://www.naver.com';

    describe('UI Test', () => {
        it('text exists', () => {
            const { getByText } = render(<Anchor>{text}</Anchor>);

            const anchor = getByText(text);
            expect(anchor).toBeTruthy();
        });
    });

    describe('Action Test', () => {
        it('empty anchor tag', () => {
            const { getByText } = render(<Anchor>{text}</Anchor>);

            const anchor = getByText(text);
            expect(anchor).toHaveAttribute('href', '#');

            const isClicked = fireEvent.click(anchor);
            expect(isClicked).toBe(false);
        });

        it('link anchor tag', () => {
            const { getByText } = render(<Anchor href={href}>{text}</Anchor>);

            const anchor = getByText(text);
            expect(anchor).toHaveAttribute('href', href);

            const isClicked = fireEvent.click(anchor);
            expect(isClicked).toBe(true);
        });

        it('click anchor tag', () => {
            const handleClick = jest.fn();

            const { getByText } = render(
                <Anchor onClick={handleClick}>{text}</Anchor>
            );

            const anchor = getByText(text);
            expect(anchor).toHaveAttribute('href', '#');

            fireEvent.click(anchor);
            expect(handleClick).toBeCalled();
        });
    });
});
