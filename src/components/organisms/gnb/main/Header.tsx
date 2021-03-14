import React, { FC, HTMLAttributes } from 'react';

import HeaderStyle from 'components/atoms/Header';
import Logo from 'components/atoms/Logo';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
    <HeaderStyle {...props}>
        <Logo data-testid="header-logo" />
    </HeaderStyle>
);

export default Header;
