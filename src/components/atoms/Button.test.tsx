import React, { Fragment } from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Button from 'components/atoms/Button';

import { theme } from 'styles/Themes';

describe('<Button />', () => {
    describe('UI test', () => {
        it('Text children exists', () => {
            const testText = 'My Button';

            const { getByText } = render(<Button>{testText}</Button>);

            const button = getByText(testText);
            expect(button).toHaveTextContent(testText);
        });

        it('Icon children exists', () => {
            const testIconAlt = 'logo';
            const testIcon = (
                <img
                    className="icon"
                    src="/images/logo.png"
                    alt={testIconAlt}
                />
            );

            const { getByAltText } = render(<Button>{testIcon}</Button>);

            const icon = getByAltText(testIconAlt);
            expect(icon).toHaveAttribute('alt', testIconAlt);
        });

        it('Icon and text children exists', () => {
            const testText = 'logo button';
            const testIconAlt = 'logo';
            const testElement = (
                <Fragment>
                    <img
                        className="icon"
                        src="/images/logo.png"
                        alt={testIconAlt}
                    />
                    {testText}
                </Fragment>
            );

            const { getByAltText, getByText } = render(
                <Button>{testElement}</Button>
            );

            const icon = getByAltText(testIconAlt);
            const text = getByText(testText);

            expect(icon).toHaveAttribute('alt', testIconAlt);
            expect(text).toHaveTextContent(testText);
        });

        it('button loading', () => {
            const { getByTestId } = render(
                <Button loading data-testid="button">
                    <div className="icon" />
                    <div className="text" />
                </Button>
            );

            const button = getByTestId('button');

            expect(button).toHaveStyleRule(
                'background',
                theme.colors.loadingBackground,
                { target: '.icon' }
            );
            expect(button).toHaveStyleRule(
                'background',
                theme.colors.loadingBackground,
                { target: '.text' }
            );
        });
    });

    describe('Action test', () => {
        it('Button click', () => {
            const onClick = jest.fn();
            const testText = 'My Button';

            const { getByText } = render(
                <Button onClick={onClick}>{testText}</Button>
            );

            const button = getByText(testText);

            fireEvent.click(button);
            expect(onClick).toBeCalled();
        });
    });
});
