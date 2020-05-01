import React from 'react';

import render from 'libs/test-utils';

import Header from 'components/organisms/Header';

describe('<Header/>', () => {
    describe('UI Test', () => {
        it('Icon exists', () => {
            const component = render(<Header />);

            const icon = component.getByTitle('logo');
            expect(icon).toBeTruthy();
        });
    });
});
