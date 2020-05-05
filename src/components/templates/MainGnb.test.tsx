import React from 'react';

import render from 'libs/test-utils';

import MainGnb from 'components/templates/MainGnb';

describe('<GnbLayout/>', () => {
    const testChildrenText = 'Test Children';
    const initTest = () => {
        const { getByTestId, getByText } = render(
            <MainGnb>
                <div>{testChildrenText}</div>
            </MainGnb>
        );

        return { getByTestId, getByText };
    };

    describe('UI test', () => {
        it('Header exists', () => {
            const { getByTestId } = initTest();
            const header = getByTestId('header');

            expect(header).toBeTruthy();
        });

        it('LeftPanel exists', () => {
            const { getByTestId } = initTest();
            const leftPanel = getByTestId('left-panel');

            expect(leftPanel).toBeTruthy();
        });

        it('Children exists', () => {
            const { getByText } = initTest();

            const children = getByText(testChildrenText);
            expect(children).toHaveTextContent(testChildrenText);
        });
    });
});
