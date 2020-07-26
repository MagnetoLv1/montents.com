import React, { AnchorHTMLAttributes, FC } from 'react';

import { JAVASCRIPT_VOID } from 'constants/etc';

interface ITitle extends AnchorHTMLAttributes<{}> {
    text: string;
}

const Title: FC<ITitle> = ({
    text,
    href = JAVASCRIPT_VOID,
    ...anchorProps
}: ITitle) => (
    <a href={href} {...anchorProps}>
        {text}
    </a>
);

export default Title;
