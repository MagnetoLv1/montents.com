/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import Logo from 'svg/logo.svg';

import { TTheme } from 'styles/Themes';

const headerStyle = (theme: TTheme) => css`
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${theme.size.headerHeight};
    background: ${theme.colors.headerBackground};
    box-shadow: 0 0 0.7rem #ccc;
    box-sizing: border-box;
    padding: 0 1.5rem;
`;

const Header: FC = () => (
    <header css={headerStyle} data-testid="header">
        <Logo title="logo" alt="logo" width="4rem" height="4rem" />
    </header>
);

export default Header;
