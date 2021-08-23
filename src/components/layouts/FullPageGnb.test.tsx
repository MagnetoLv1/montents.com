import FullPageGnb from '~/components/layouts/FullPageGnb';
import render from '~/libs/testUtils';

describe('Components | Layouts | <FullPageGnb />', () => {
    it('header 노출 확인', () => {
        const { getByTestId } = render(<FullPageGnb />);
        expect(getByTestId('full-page-gnb-header')).toBeInTheDocument();
    });

    it('Content 노출 확인', () => {
        const testContent = '이것은 테스트';
        const { getByText } = render(<FullPageGnb>{testContent}</FullPageGnb>);

        expect(getByText(testContent)).toBeInTheDocument();
    });
});
