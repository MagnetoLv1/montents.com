import React, { AnchorHTMLAttributes, FC } from 'react';

import styled from 'libs/styled';

import { JAVASCRIPT_VOID } from 'constants/etc';

const NameWrap = styled.a`
    font-weight: bold;
    cursor: pointer;
`;

interface IName extends AnchorHTMLAttributes<{}> {
    text: string;
}

const Name: FC<IName> = ({
    text,
    href = JAVASCRIPT_VOID,
    ...anchorProps
}: IName) => {
    return (
        <NameWrap href={href} {...anchorProps}>
            {text}
        </NameWrap>
    );
};

export default Name;
