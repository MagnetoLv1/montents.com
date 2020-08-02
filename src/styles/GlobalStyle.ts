import { css } from '@emotion/core';

import { TTheme } from 'styles/Themes';

export const GlobalStyle = (theme: TTheme) => css`
    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Nanum-Gothic.eot');
        src: local('NanumGothic'),
            url('/fonts/Nanum-Gothic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Nanum-Gothic.woff2') format('woff2'),
            url('/fonts/Nanum-Gothic.woff') format('woff'),
            url('/fonts/Nanum-Gothic.ttf') format('truetype'),
            url('/fonts/Nanum-Gothic.svg#NanumGothic') format('svg');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/Nanum-Gothic-Extra-Bold.eot');
        src: local('NanumGothic ExtraBold'), local('NanumGothic-ExtraBold'),
            url('/fonts/Nanum-Gothic-Extra-Bold.eot?#iefix')
                format('embedded-opentype'),
            url('/fonts/Nanum-Gothic-Extra-Bold.woff2') format('woff2'),
            url('/fonts/Nanum-Gothic-Extra-Bold.woff') format('woff'),
            url('/fonts/Nanum-Gothic-Extra-Bold.ttf') format('truetype'),
            url('/fonts/Nanum-Gothic-Extra-Bold.svg#NanumGothic') format('svg');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Nanum-Gothic-Bold.eot');
        src: local('NanumGothic Bold'), local('NanumGothic-Bold'),
            url('/fonts/Nanum-Gothic-Bold.eot?#iefix')
                format('embedded-opentype'),
            url('/fonts/Nanum-Gothic-Bold.woff2') format('woff2'),
            url('/fonts/Nanum-Gothic-Bold.woff') format('woff'),
            url('/fonts/Nanum-Gothic-Bold.ttf') format('truetype'),
            url('/fonts/Nanum-Gothic-Bold.svg#NanumGothic') format('svg');
    }

    html {
        font-size: 10px;
        font-family: 'Nanum Gothic', serif;
    }

    body {
        font-size: 1.4rem;
        background: ${theme.colors.bodyBackground};
        color: ${theme.colors.primaryText};
        margin: 0;
        padding: 0;
        line-height: 1.34;
    }

    p,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    span,
    button,
    input,
    ul,
    li {
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
