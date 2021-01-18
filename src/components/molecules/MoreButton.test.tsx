import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import MoreButton from 'components/molecules/MoreButton';

describe('Components | Molecules | <MoreButton />', () => {
    it('더보기 버튼 클릭', () => {
        const onClick = jest.fn();

        const { getByText } = render(<MoreButton onClick={onClick} />);
        const button = getByText('더 보기');

        fireEvent.click(button);

        expect(onClick).toBeCalled();
    });
});
