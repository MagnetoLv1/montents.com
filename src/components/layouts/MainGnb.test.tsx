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
        expect(getByTestId('main-gnb-header')).toBeInTheDocument();
    });

    it('좌측 메뉴 영역 노출', () => {
        const { getByTestId } = initTest();

        expect(getByTestId('left-area')).toBeInTheDocument(); // 좌측 영역 존재 확인
        expect(getByTestId('left-panel')).toBeInTheDocument(); // left panel 존재 확인
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
