/** @jsx jsx */
import React, { FC, PropsWithChildren } from 'react';
import { jsx } from '@emotion/core';

import ILoadable from 'types/ILoadable';

import { loadingStyle, style } from 'components/atoms/Button.style';

interface IButton extends React.HTMLAttributes<HTMLDivElement>, ILoadable {}

const Button: FC<IButton> = ({
    children,
    loading = false,
    ...props
}: PropsWithChildren<IButton>) => (
    <div css={loading ? loadingStyle : style} {...props}>
        {children}
    </div>
);

export default Button;
