import React from 'react';

import render from 'libs/test-utils';

import TextContent from 'components/atoms/TextContent';

const newLineRegExp = /(\r\n|\r|\n)/g;

describe('atoms > <TextContent />', () => {
    const content =
        '이것은 테스트 텍스트입니다.\nnext line 은 \\n 으로 나눠지는 텍스트입니다.\n\n\\n은 <br /> 태그로 변경됩니다.';

    it('html content exists', () => {
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
