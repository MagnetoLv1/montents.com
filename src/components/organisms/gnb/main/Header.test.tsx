import React from 'react';

import render from 'libs/testUtils';

import Header from 'components/organisms/gnb/main/Header';

describe('Components | Organisms | Gnb | Main | <Header />', () => {
    it('로고 노출 확인', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('header-logo')).toBeInTheDocument();
    });
});
