import React, { FC, HTMLAttributes, MouseEventHandler } from 'react';
import styled from '@emotion/styled';

import CloseSvg from 'assets/images/close.svg';

import HeaderStyle from 'components/atoms/Header';
import Icon from 'components/atoms/Icon';
import Logo from 'components/atoms/Logo';

const CloseIcon = styled(Icon)`
    cursor: pointer;

    width: 4rem;
    height: 4rem;
    padding: 1.25rem;

    border-radius: 50%;
    box-sizing: border-box;

    margin-right: 0.8rem;

    background: ${({ theme }) => theme.colors.secondaryButtonBackground};
`;

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: MouseEventHandler;
}

const Header: FC<HeaderProps> = ({ onClose, ...props }: HeaderProps) => (
    <HeaderStyle {...props}>
        {/* 전체 화면 닫기 버튼 */}
        {onClose && <CloseIcon src={CloseSvg} alt="close" onClick={onClose} />}

        {/* 로고 */}
        <Logo />
    </HeaderStyle>
);

export default Header;
