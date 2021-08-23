import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import Anchor from 'components/atoms/Anchor';

describe('Components | Atoms | <Anchor />', () => {
    const text = 'test anchor',
        href = 'http://www.naver.com';

    it('children 텍스트 노출 확인', () => {
        const { getByText } = render(<Anchor>{text}</Anchor>);

        const anchor = getByText(text);
        expect(anchor).toBeInTheDocument();
    });

    it('링크 없는 a 태그 클릭 시 클릭 이벤트 취소', () => {
        const { getByText } = render(<Anchor>{text}</Anchor>);

        const anchor = getByText(text);
        expect(anchor).toHaveAttribute('href', '#');

        const isClicked = fireEvent.click(anchor);
        expect(isClicked).toBe(false);
    });

    it('링크 있는 a 태그 클릭 시 클릭 시 클릭 이벤트 발생', () => {
        const { getByText } = render(<Anchor href={href}>{text}</Anchor>);

        const anchor = getByText(text);
        expect(anchor).toHaveAttribute('href', href);

        const isClicked = fireEvent.click(anchor);
        expect(isClicked).toBe(true);
    });

    it('커스텀 클릭 이벤트 있는 a 태그 클릭 시 커스텀 이벤트 실행', () => {
        const handleClick = jest.fn();

        const { getByText } = render(
            <Anchor onClick={handleClick}>{text}</Anchor>
        );

        const anchor = getByText(text);
        expect(anchor).toHaveAttribute('href', '#');

        fireEvent.click(anchor);
        expect(handleClick).toBeCalled();
    });
});
