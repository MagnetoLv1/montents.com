import { css } from '@emotion/core';

import { TTheme } from 'styles/Themes';

export const style = css`
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
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    & > .icon {
        width: 3rem;
        height: 3rem;
        display: inline-block;
        margin: 0.8rem 1.2rem 0.8rem 0;
    }
`;

export const loadingStyle = (theme: TTheme) => css`
    ${style}

    & > .icon {
        flex-shrink: 0;
        border-radius: 50%;
        background: ${theme.colors.loadingBackground};
    }

    & > .text {
        display: inline-block;
        flex-shrink: 1;
        width: 100%;
        min-height: 1.4rem;
        border-radius: 0.7rem;
        background: ${theme.colors.loadingBackground};
    }
`;
