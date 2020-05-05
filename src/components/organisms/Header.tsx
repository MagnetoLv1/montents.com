/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import Logo from 'svg/logo.svg';

import { TTheme } from 'styles/Themes';

const headerStyle = (theme: TTheme) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${theme.size.headerHeight};
    background: ${theme.colors.headerBackground};
    box-shadow: ${theme.shadow};
    box-sizing: border-box;
    padding: 0 1.5rem;
`;

const Header: FC = () => (
    <header css={headerStyle} data-testid="header" id="header">
        <Logo title="logo" alt="logo" width="4rem" height="4rem" />
    </header>
);

export default Header;
