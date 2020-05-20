import React from 'react';

import render from 'libs/test-utils';

import LeftPanel from 'components/organisms/LeftPanel';

describe('<LeftPanel />', () => {
    describe('UI Test', () => {
        it('Group List exists', () => {
            const component = render(<LeftPanel />);
        });
    });
});
