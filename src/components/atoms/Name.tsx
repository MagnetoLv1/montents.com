import React, { AnchorHTMLAttributes, FC } from 'react';

import styled from 'libs/styled';

import Anchor from 'components/atoms/Anchor';

const NameWrap = styled(Anchor)`
    font-weight: bold;
    cursor: pointer;
`;

interface IName extends AnchorHTMLAttributes<{}> {
    text: string;
}

const Name: FC<IName> = ({ text, ...anchorProps }: IName) => {
    return <NameWrap {...anchorProps}>{text}</NameWrap>;
};

export default Name;
