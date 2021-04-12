import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';

import LogoSvg from 'assets/images/logo.svg';

import Icon from 'components/atoms/Icon';

const IconLink = styled(Link)`
    width: 4rem;
    height: 4rem;
`;

interface LogoProps extends Omit<LinkProps, 'to'> {}

const Logo: FC<LogoProps> = (props: LogoProps) => (
    <IconLink to="/" {...props}>
        <Icon src={LogoSvg} alt="montents" title="logo" />
    </IconLink>
);

export default Logo;
