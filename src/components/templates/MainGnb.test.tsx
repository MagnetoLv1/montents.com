import React from 'react';

import render from 'libs/test-utils';

import MainGnb from 'components/templates/MainGnb';

describe('templates | <MainGnb/>', () => {
    const testChildrenText = 'Test Children';
    const initTest = () => {
        return render(
            <MainGnb>
                <div>{testChildrenText}</div>
            </MainGnb>
        );
    };

    describe('UI test', () => {
        it('Header exists', () => {
            const { getByTestId } = initTest();
            const header = getByTestId('header');

            expect(header).toBeTruthy();
        });

        it('Left area exists', () => {
            const { getByTestId } = initTest();

            // 좌측 영역 존재 확인
            const leftArea = getByTestId('left-area');
            expect(leftArea).toBeTruthy();

            // left panel 존재 확인
            const leftPanel = getByTestId('left-panel');
            expect(leftPanel).toBeTruthy();
        });

        it('Children exists', () => {
            const { getByText } = initTest();

            const children = getByText(testChildrenText);
            expect(children).toHaveTextContent(testChildrenText);
        });

        it('Right area exists', () => {
            const { getByTestId } = initTest();

            // 우측 영역 존재 확인
            const rightArea = getByTestId('right-area');
            expect(rightArea).toBeTruthy();
        });
    });
});
