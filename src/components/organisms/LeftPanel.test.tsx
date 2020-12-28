import React from 'react';

import render from 'libs/testUtils';

import LeftPanel from 'components/organisms/LeftPanel';

describe('Components | Organisms | <LeftPanel />', () => {
    it('그룹 리스트 확인', () => {
        const { getByTestId } = render(<LeftPanel />);

        expect(getByTestId('group-list')).toBeInTheDocument();
    });
});
