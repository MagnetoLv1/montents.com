/** @jsx jsx */
import { FC, PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/core';

import Header from 'components/organisms/Header';

import { TTheme } from 'styles/Themes';

const bodyStyle = (theme: TTheme) => css`
    position: relative;
    z-index: 0;
    display: block;
    top: ${theme.size.headerHeight};
    min-height: calc(100vh - ${theme.size.headerHeight});
`;

const GnbLayout: FC = ({ children }: PropsWithChildren<{}>) => (
    <div>
        <Header />
        <div css={bodyStyle}>{children}</div>
    </div>
);

export default GnbLayout;
