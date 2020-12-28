import React from 'react';
import { Story } from '@storybook/react';

import TextContent, { TextContentProps } from 'components/atoms/TextContent';

export default {
    title: 'Components/Atoms/TextContent',
    component: TextContent,
    parameters: {
        docs: {
            description: {
                component: '텍스트 내용 노출 컴포넌트'
            }
        }
    },
    args: {
        content:
            '이것은 테스트 텍스트입니다.\nnext line 은 \\n 으로 나눠지는 텍스트입니다.\n\n\\n은 <br /> 태그로 변경됩니다.'
    },
    argTypes: {
        content: {
            control: 'text',
            description: '글 내용'
        }
    }
};

export const DefaultTextContent: Story<TextContentProps> = ({
    content
}: TextContentProps) => <TextContent content={content} />;

DefaultTextContent.storyName = 'Default';
