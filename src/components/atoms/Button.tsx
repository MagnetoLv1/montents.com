import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';

const ButtonStyle = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    min-height: 4.4rem;
    padding: 0 0.8rem;

    cursor: pointer;
    border-radius: 0.8rem;

    &:hover {
        &::after {
            border-radius: inherit;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            content: '';
            background-color: ${({ theme }) => theme.colors.hoverBackground};
        }
    }
`;

export const ButtonIcon = styled(Icon)`
    width: 3rem;
    height: 3rem;
    margin: 0.8rem 0 0.8rem 0;
    flex-shrink: 0;

    & + * {
        margin-left: 0.8rem;
    }
`;

export const ButtonText = styled(Text)`
    flex-shrink: 1;
    width: 100%;
`;

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {}

const Button: FC<ButtonProps> = ({
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => (
    <ButtonStyle {...props}>{children}</ButtonStyle>
);

export default Button;
