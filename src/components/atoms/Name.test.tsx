import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Name from 'components/atoms/Name';

describe('<Name />', () => {
    const name = 'ChoSeoHwan',
        link = 'http://google.com';

    describe('UI Test', () => {
        it('name exists', () => {
            const { getByText } = render(<Name text={name} href={link} />);

            const textArea = getByText(name);
            expect(textArea).toHaveTextContent(name);
            expect(textArea).toHaveAttribute('href', link);
        });
    });

    describe('Action Test', () => {
        it('active click', () => {
            const handleClick = jest.fn();

            const { getByText } = render(
                <Name text={name} href={link} onClick={handleClick} />
            );

            const textArea = getByText(name);

            fireEvent.click(textArea);
            expect(handleClick).toBeCalled();
        });
    });
});
