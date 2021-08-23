import { fireEvent } from '@testing-library/dom';

import Header from '~/components/organisms/gnb/fullPage/Header';
import render from '~/libs/testUtils';

describe('Components | Organisms | Gnb | FullPage | <Header />', () => {
    describe('공통 사항', () => {
        it('로고 노출 확인', () => {
            const { getByTitle } = render(<Header />);

            expect(getByTitle('logo')).toBeInTheDocument();
        });
    });

    describe('닫기 버튼이 없는 경우', () => {
        it('close 버튼 미노출 확인', () => {
            const { queryAllByAltText } = render(<Header />);

            const closeButton = queryAllByAltText('close');
            expect(closeButton.length).toBe(0);
        });
    });

    describe('닫기 버튼이 있는 경우', () => {
        const renderHeader = () => {
            const handleClose = jest.fn();
            const component = render(<Header onClose={handleClose} />);

            return {
                ...component,
                handleClose
            };
        };

        it('close 버튼 노출 확인', () => {
            const { getByAltText } = renderHeader();
            expect(getByAltText('close')).toBeInTheDocument();
        });

        it('close 버튼 정상 동작 확인', () => {
            const { getByAltText, handleClose } = renderHeader();

            const closeButton = getByAltText('close');
            fireEvent.click(closeButton);

            expect(handleClose).toBeCalled();
        });
    });
});
