import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';

import LogoSvg from 'assets/images/logo.svg';

import IconBase from 'components/atoms/Icon';

const Icon = styled(IconBase)`
    width: 40px;
    height: 40px;
`;

interface LogoProps extends Omit<LinkProps, 'to'> {}

const Logo: FC<LogoProps> = (props: LogoProps) => (
    <Link to="/" {...props}>
        <Icon src={LogoSvg} alt="montents" title="logo" />
    </Link>
);

export default Logo;
