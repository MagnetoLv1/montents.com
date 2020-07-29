import React, { AnchorHTMLAttributes, FC } from 'react';

import Anchor from 'components/atoms/Anchor';

interface ITitle extends AnchorHTMLAttributes<{}> {
    text: string;
}

const Title: FC<ITitle> = ({ text, ...anchorProps }: ITitle) => (
    <Anchor {...anchorProps}>{text}</Anchor>
);

export default Title;
