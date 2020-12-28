import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import Button, { Icon, Text } from 'components/atoms/Button';

describe('Components | Atoms | <Button />', () => {
    it('텍스트 children 노출 확인', () => {
        const testText = 'My Button';

        const { getByText } = render(
            <Button>
                <Text>{testText}</Text>
            </Button>
        );

        const button = getByText(testText);
        expect(button).toHaveTextContent(testText);
    });

    it('아이콘 children 노출 확인', () => {
        const testIconAlt = 'logo';
        const testIcon = (
            <img className="icon" src="/images/logo.png" alt={testIconAlt} />
        );

        const { getByAltText } = render(
            <Button>
                <Icon>{testIcon}</Icon>
            </Button>
        );

        const icon = getByAltText(testIconAlt);
        expect(icon).toHaveAttribute('alt', testIconAlt);
    });

    it('아이콘 + 텍스트 children 노출 확인', () => {
        const testText = 'logo button';
        const testIconAlt = 'logo';
        const testIcon = (
            <img className="icon" src="/images/logo.png" alt={testIconAlt} />
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

    it('버튼 클릭 이벤트 확인', () => {
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
