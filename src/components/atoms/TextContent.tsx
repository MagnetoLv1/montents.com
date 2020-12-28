import React, { FC } from 'react';

import ClassName from 'types/ClassName';

import styled from 'libs/styled';

const newLineRegExp = /(\r\n|\r|\n)/g;

const Text = styled.div`
    text-align: start;
    white-space: pre-wrap;
    margin-top: 0.5rem;
    min-height: 1.3rem;

    &:first-of-type {
        margin-top: 0;
    }
`;

export interface TextContentProps extends ClassName {
    content: string;
}

const TextContent: FC<TextContentProps> = ({
    content,
    className
}: TextContentProps) => {
    const contents = content
        .split(newLineRegExp)
        .filter((content) => !content.match(newLineRegExp))
        .map((content, index) => <Text key={index}>{content}</Text>);

    return (
        <div className={className} data-testid={'text-content'}>
            {contents}
        </div>
    );
};

export default TextContent;
