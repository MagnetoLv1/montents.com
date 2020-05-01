import React from 'react';

import render from 'libs/test-utils';

import GnbLayout from 'components/templates/GnbLayout';

describe('<GnbLayout/>', () => {
    const testChildrenText = 'Test Children';
    const initTest = () => {
        const { getByTestId, getByText } = render(
            <GnbLayout>
                <div>{testChildrenText}</div>
            </GnbLayout>
        );

        return { getByTestId, getByText };
    };

    describe('UI test', () => {
        it('Header exists', () => {
            const { getByTestId } = initTest();
            const header = getByTestId('header');

            expect(header).toBeTruthy();
        });

        it('Children exists', () => {
            const { getByText } = initTest();

            const children = getByText(testChildrenText);
            expect(children).toHaveTextContent(testChildrenText);
        });
    });
});
