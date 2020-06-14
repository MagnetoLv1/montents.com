import React, { FC, HTMLAttributes } from 'react';

import styled from 'libs/styled';

import Logo from 'svg/logo.svg';

const HeaderWrap = styled('header')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${({ theme }) => theme.size.headerHeight};
    background: ${({ theme }) => theme.colors.headerBackground};
    box-shadow: ${({ theme }) => theme.shadow};
    box-sizing: border-box;
    padding: 0 1.5rem;
`;

const Header: FC<HTMLAttributes<HTMLDivElement>> = ({
    className
}: HTMLAttributes<HTMLDivElement>) => (
    <HeaderWrap data-testid="header" className={className}>
        <Logo title="logo" alt="logo" width="4rem" height="4rem" />
    </HeaderWrap>
);

export default Header;
