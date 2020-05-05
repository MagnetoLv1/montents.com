import React, { Fragment, ReactElement } from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/test-utils';

import Button, { IButton } from 'components/atoms/Button';

describe('<Button />', () => {
    const initTest = (children: ReactElement | string, props?: IButton) => {
        return render(<Button {...props}>{children}</Button>);
    };

    describe('UI test', () => {
        it('Text children exists', () => {
            const testText = 'My Button';
            const { getByText } = initTest(testText);

            const button = getByText(testText);
            expect(button).toHaveTextContent(testText);
        });

        it('Icon children exists', () => {
            const testIcon = (
                <img
                    className="icon"
                    src="http://static.inven.co.kr/image_2011/common/channel/icon_14x14_webzine.gif?v=200424b"
                    alt="inven logo"
                />
            );
            const { getByAltText } = initTest(testIcon);

            const icon = getByAltText('inven logo');
            expect(icon).toHaveAttribute('alt', 'inven logo');
        });

        it('Icon and text children exists', () => {
            const testElement = (
                <Fragment>
                    <img
                        className="icon"
                        src="http://static.inven.co.kr/image_2011/common/channel/icon_14x14_webzine.gif?v=200424b"
                        alt="inven logo"
                    />
                    Inven
                </Fragment>
            );
            const { getByAltText, getByText } = initTest(testElement);

            const icon = getByAltText('inven logo');
            const text = getByText('Inven');

            expect(icon).toHaveAttribute('alt', 'inven logo');
            expect(text).toHaveTextContent('Inven');
        });
    });

    describe('Action test', () => {
        it('Button click', () => {
            const onClick = jest.fn();
            const { getByText } = initTest('My Button', { onClick });

            const button = getByText('My Button');

            fireEvent.click(button);
            expect(onClick).toBeCalled();
        });
    });
});
