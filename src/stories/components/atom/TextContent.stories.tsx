import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import he from 'he';

import TextContent from 'components/atoms/TextContent';

export default {
    title: 'components|atoms/TextContent',
    subtitle: '내용 텍스트 컴포넌트',
    component: TextContent,
    decorators: [withKnobs]
};

export const textContent = () => {
    const content = he.decode(
        text(
            'content',
            '이것은 테스트 텍스트입니다.\nnext line 은 \\n 으로 나눠지는 텍스트입니다.\n\n\\n은 <br /> 태그로 변경됩니다.'
        )
    );

    return <TextContent content={content} />;
};

textContent.story = {
    name: 'Default'
};
