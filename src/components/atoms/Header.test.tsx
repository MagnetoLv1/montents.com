import render from 'libs/testUtils';

import Header from 'components/atoms/Header';

describe('Components | Atoms | <Header/>', () => {
    const content = 'content text';

    it('내용 노출', () => {
        const { getByText } = render(<Header>{content}</Header>);
        expect(getByText(content)).toBeInTheDocument();
    });
});
