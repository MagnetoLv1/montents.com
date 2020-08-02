import React, { FC } from 'react';

import styled from 'libs/styled';

import IClassName from 'types/IClassName';

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

interface ITextContent extends IClassName {
    content: string;
}

const TextContent: FC<ITextContent> = ({
    content,
    className
}: ITextContent) => {
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
