import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styled from 'libs/styled';

import IconBase from 'components/atoms/Icon';

const ButtonWrap = styled.div`
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

export const Icon = styled(IconBase)`
    width: 3rem;
    height: 3rem;
    margin: 0.8rem 1.2rem 0.8rem 0;
`;

export const Text = styled.p``;

export const LoadingIcon = styled(Icon)`
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.loadingBackground};
`;

export const LoadingText = styled(Text)`
    display: inline-block;
    flex-shrink: 1;
    width: 100%;
    min-height: 1.4rem;
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.colors.loadingBackground};
`;

const Button: FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
    <ButtonWrap {...props}>{children}</ButtonWrap>
);

export default Button;
