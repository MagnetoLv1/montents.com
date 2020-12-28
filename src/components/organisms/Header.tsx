import React, { FC, HTMLAttributes } from 'react';

import LogoSvg from 'assets/images/logo.svg';

import styled from 'libs/styled';

import Image from 'components/atoms/Image';

const HeaderStyle = styled('header')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: ${({ theme }) => theme.size.headerHeight};
    box-sizing: border-box;
    padding: 0 1.5rem;

    background: ${({ theme }) => theme.colors.surfaceBackground};
    box-shadow: ${({ theme }) => theme.effect.shadow};
`;

const Logo = styled(Image)`
    width: 40px;
    height: 40px;
`;

const Header: FC<HTMLAttributes<HTMLDivElement>> = ({
    className
}: HTMLAttributes<HTMLDivElement>) => (
    <HeaderStyle data-testid="header" className={className}>
        <Logo src={LogoSvg} alt="montents" title="logo" />
    </HeaderStyle>
);

export default Header;
