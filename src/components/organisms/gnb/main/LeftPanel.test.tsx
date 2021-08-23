import LeftPanel from '~/components/organisms/gnb/main/LeftPanel';
import render from '~/libs/testUtils';

describe('Components | Organisms | Gnb | Main | <LeftPanel />', () => {
    it('그룹 리스트 확인', () => {
        const { getByTestId } = render(<LeftPanel />);
        expect(getByTestId('group-list')).toBeInTheDocument();
    });
});
