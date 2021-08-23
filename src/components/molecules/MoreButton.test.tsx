import { fireEvent } from '@testing-library/dom';

import MoreButton from '~/components/molecules/MoreButton';
import render from '~/libs/testUtils';

describe('Components | Molecules | <MoreButton />', () => {
    it('더보기 버튼 클릭', () => {
        const onClick = jest.fn();

        const { getByText } = render(<MoreButton onClick={onClick} />);
        const button = getByText('더 보기');

        fireEvent.click(button);

        expect(onClick).toBeCalled();
    });
});
