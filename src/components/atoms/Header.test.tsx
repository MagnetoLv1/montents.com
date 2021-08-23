import Header from '~/components/atoms/Header';
import render from '~/libs/testUtils';

describe('Components | Atoms | <Header/>', () => {
    const content = 'content text';

    it('내용 노출', () => {
        const { getByText } = render(<Header>{content}</Header>);
        expect(getByText(content)).toBeInTheDocument();
    });
});
