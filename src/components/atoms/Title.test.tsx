import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Title from 'components/atoms/Title';

describe('<Title />', () => {
    const title = 'title text',
        link = 'http://google.com';

    describe('UI Test', () => {
        it('title exists', () => {
            const { getByText } = render(<Title text={title} href={link} />);

            const textArea = getByText(title);
            expect(textArea).toHaveTextContent(title);
            expect(textArea).toHaveAttribute('href', link);
        });
    });

    describe('Action Test', () => {
        it('active click', () => {
            const handleClick = jest.fn();

            const { getByText } = render(
                <Title text={title} href={link} onClick={handleClick} />
            );

            const textArea = getByText(title);

            fireEvent.click(textArea);
            expect(handleClick).toBeCalled();
        });
    });
});
