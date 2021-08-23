import Text from '~/components/atoms/Text';
import render from '~/libs/testUtils';

describe('Components | Atoms | <Text />', () => {
    it('텍스트 노출 확인 ', () => {
        const text = '텍스트입니다.';
        const { getByText } = render(<Text>{text}</Text>);
        expect(getByText(text)).toHaveTextContent(text);
    });
});
