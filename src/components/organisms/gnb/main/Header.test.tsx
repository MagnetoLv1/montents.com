import Header from '~/components/organisms/gnb/main/Header';
import render from '~/libs/testUtils';

describe('Components | Organisms | Gnb | Main | <Header />', () => {
    it('로고 노출 확인', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('header-logo')).toBeInTheDocument();
    });
});
