import React from 'react';

import render from 'libs/testUtils';

import Text from 'components/atoms/Text';

describe('Components | Atoms | <Text />', () => {
    it('텍스트 노출 확인 ', () => {
        const text = '텍스트입니다.';
        const { getByText } = render(<Text>{text}</Text>);
        expect(getByText(text)).toHaveTextContent(text);
    });
});
