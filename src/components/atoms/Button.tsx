/** @jsx jsx */
import { FC, MouseEvent, PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/core';

const style = css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    min-height: 4.4rem;
    padding: 0.8rem;

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
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    & > .icon {
        margin-right: 0.8rem;
    }
`;

export interface IButton {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Button: FC<IButton> = ({
    children,
    onClick,
    ...props
}: PropsWithChildren<IButton>) => {
    console.log(css);
    return (
        <div css={style} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Button;
