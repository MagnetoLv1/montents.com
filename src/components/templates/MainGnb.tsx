/** @jsx jsx */
import { FC, PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/core';

import Header from 'components/organisms/Header';
import LeftPanel from 'components/organisms/LeftPanel';

import { TTheme } from 'styles/Themes';

const bodyStyle = (theme: TTheme) => css`
    position: relative;
    z-index: 0;
    display: block;
    top: ${theme.size.headerHeight};
    min-height: calc(100vh - ${theme.size.headerHeight});
`;

const MainGnb: FC = ({ children }: PropsWithChildren<{}>) => (
    <div>
        <Header />
        <LeftPanel />
        <div css={bodyStyle}>{children}</div>
    </div>
);

export default MainGnb;
