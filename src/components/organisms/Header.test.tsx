import React from 'react';

import render from 'libs/test-utils';

import Header from 'components/organisms/Header';

describe('organisms | <Header/>', () => {
    describe('UI Test', () => {
        it('Icon exists', () => {
            const { getByTitle } = render(<Header />);

            const icon = getByTitle('logo');
            expect(icon).toBeTruthy();
        });
    });
});
