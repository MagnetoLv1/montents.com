import LogoSvg from 'assets/images/logo.svg';

import Logo from '~/components/atoms/Logo';
import render from '~/libs/testUtils';

describe('Components | Atoms | <Logo />', () => {
    it('아이콘 노출 확인', () => {
        const { getByTitle } = render(<Logo />);
        expect(getByTitle('logo')).toHaveAttribute('src', LogoSvg);
    });
});
