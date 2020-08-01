import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Button, { Icon, Text } from 'components/atoms/Button';

describe('atoms | <Button />', () => {
    describe('UI test', () => {
        it('Text children exists', () => {
            const testText = 'My Button';

            const { getByText } = render(
                <Button>
                    <Text>{testText}</Text>
                </Button>
            );

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

            const { getByAltText } = render(
                <Button>
                    <Icon>{testIcon}</Icon>
                </Button>
            );

            const icon = getByAltText(testIconAlt);
            expect(icon).toHaveAttribute('alt', testIconAlt);
        });

        it('Icon and text children exists', () => {
            const testText = 'logo button';
            const testIconAlt = 'logo';
            const testIcon = (
                <img
                    className="icon"
                    src="/images/logo.png"
                    alt={testIconAlt}
                />
            );

            const { getByAltText, getByText } = render(
                <Button>
                    <Icon>{testIcon}</Icon>
                    <Text>{testText}</Text>
                </Button>
            );

            const icon = getByAltText(testIconAlt);
            const text = getByText(testText);

            expect(icon).toHaveAttribute('alt', testIconAlt);
            expect(text).toHaveTextContent(testText);
        });
    });

    describe('Action test', () => {
        it('Button click', () => {
            const onClick = jest.fn();
            const testText = 'My Button';

            const { getByText } = render(
                <Button onClick={onClick}>
                    <Text>{testText}</Text>
                </Button>
            );

            const button = getByText(testText);

            fireEvent.click(button);
            expect(onClick).toBeCalled();
        });
    });
});
