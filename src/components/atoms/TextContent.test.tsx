import render from 'libs/testUtils';

import TextContent from 'components/atoms/TextContent';

const newLineRegExp = /(\r\n|\r|\n)/g;

describe('Components | Atoms | <TextContent />', () => {
    const content =
        '이것은 테스트 텍스트입니다.\nnext line 은 \\n 으로 나눠지는 텍스트입니다.\n\n\\n은 <br /> 태그로 변경됩니다.';

    it('텍스트 입력 시 html 코드로 노출 확인', () => {
        const { getAllByText } = render(<TextContent content={content} />);

        const contents = content
            .split(newLineRegExp)
            .filter((content) => !content.match(newLineRegExp));

        contents.forEach((content) => {
            const text = getAllByText(content);
            expect(text.length).toBeGreaterThanOrEqual(1);
        });
    });
});
