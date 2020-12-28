import React from 'react';

import render from 'libs/testUtils';

import Header from 'components/organisms/Header';

describe('Components | Organisms | <Header/>', () => {
    it('아이콘 노출', () => {
        const { getByTitle } = render(<Header />);

        const icon = getByTitle('logo');
        expect(icon).toBeInTheDocument();
    });
});
