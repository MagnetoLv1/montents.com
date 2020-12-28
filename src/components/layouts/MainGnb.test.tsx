import React from 'react';

import render from 'libs/testUtils';

import MainGnb from 'components/layouts/MainGnb';

describe('templates | <MainGnb/>', () => {
    const testChildrenText = 'Test Children';
    const initTest = () => {
        return render(
            <MainGnb>
                <div>{testChildrenText}</div>
            </MainGnb>
        );
    };

    it('헤더 노출', () => {
        const { getByTestId } = initTest();
        const header = getByTestId('header');

        expect(header).toBeInTheDocument();
    });

    it('좌측 메뉴 영역 노출', () => {
        const { getByTestId } = initTest();

        // 좌측 영역 존재 확인
        const leftArea = getByTestId('left-area');
        expect(leftArea).toBeInTheDocument();

        // left panel 존재 확인
        const leftPanel = getByTestId('left-panel');
        expect(leftPanel).toBeInTheDocument();
    });

    it('children 노출', () => {
        const { getByText } = initTest();

        const children = getByText(testChildrenText);
        expect(children).toHaveTextContent(testChildrenText);
    });

    it('우측 메뉴 영역 노출', () => {
        const { getByTestId } = initTest();

        // 우측 영역 존재 확인
        const rightArea = getByTestId('right-area');
        expect(rightArea).toBeInTheDocument();
    });
});
