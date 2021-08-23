import Icon from '~/components/atoms/Icon';
import render from '~/libs/testUtils';

describe('Components | Atoms | <Icon />', () => {
    const alt = 'logo',
        src = '/assets/images/logo.png';

    it('children content 노출 확인', () => {
        const { getByAltText } = render(
            <Icon>
                <img src={src} alt={alt} />
            </Icon>
        );

        const image = getByAltText(alt);
        expect(image).toHaveAttribute('src', src);
    });

    it('image attributes 전달 시 해당하는 이미지 노출 확인', () => {
        const { getByAltText } = render(<Icon src={src} alt={alt} />);

        const image = getByAltText(alt);
        expect(image).toHaveAttribute('src', src);
    });
});
