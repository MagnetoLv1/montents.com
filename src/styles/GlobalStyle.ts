import { css } from '@emotion/react';
import NanumGothicEot from 'assets/fonts/Nanum-Gothic.eot';
import NanumGothicSvg from 'assets/fonts/Nanum-Gothic.svg';
import NanumGothicTtf from 'assets/fonts/Nanum-Gothic.ttf';
import NanumGothicWoff from 'assets/fonts/Nanum-Gothic.woff';
import NanumGothicWoff2 from 'assets/fonts/Nanum-Gothic.woff2';
import NanumGothicBoldEot from 'assets/fonts/Nanum-Gothic-Bold.eot';
import NanumGothicBoldSvg from 'assets/fonts/Nanum-Gothic-Bold.svg';
import NanumGothicBoldTtf from 'assets/fonts/Nanum-Gothic-Bold.ttf';
import NanumGothicBoldWoff from 'assets/fonts/Nanum-Gothic-Bold.woff';
import NanumGothicBoldWoff2 from 'assets/fonts/Nanum-Gothic-Bold.woff2';
import NanumGothicExtraBoldEot from 'assets/fonts/Nanum-Gothic-Extra-Bold.eot';
import NanumGothicExtraBoldSvg from 'assets/fonts/Nanum-Gothic-Extra-Bold.svg';
import NanumGothicExtraBoldTtf from 'assets/fonts/Nanum-Gothic-Extra-Bold.ttf';
import NanumGothicExtraBoldWoff from 'assets/fonts/Nanum-Gothic-Extra-Bold.woff';
import NanumGothicExtraBoldWoff2 from 'assets/fonts/Nanum-Gothic-Extra-Bold.woff2';

import { Theme } from '~/styles/theme';

export const GlobalStyle = (theme: Theme): ReturnType<typeof css> => css`
    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 400;
        src: url(${NanumGothicEot});
        src: local('NanumGothic'),
            url(${NanumGothicEot}) format('embedded-opentype'),
            url(${NanumGothicWoff2}) format('woff2'),
            url(${NanumGothicWoff}) format('woff'),
            url(${NanumGothicTtf}) format('truetype'),
            url(${NanumGothicSvg}) format('svg');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 800;
        src: url(${NanumGothicExtraBoldEot});
        src: local('NanumGothic ExtraBold'), local('NanumGothic-ExtraBold'),
            url(${NanumGothicExtraBoldEot}) format('embedded-opentype'),
            url(${NanumGothicExtraBoldWoff2}) format('woff2'),
            url(${NanumGothicExtraBoldWoff}) format('woff'),
            url(${NanumGothicExtraBoldTtf}) format('truetype'),
            url(${NanumGothicExtraBoldSvg}) format('svg');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 700;
        src: url(${NanumGothicBoldEot});
        src: local('NanumGothic ExtraBold'), local('NanumGothic-ExtraBold'),
            url(${NanumGothicBoldEot}) format('embedded-opentype'),
            url(${NanumGothicBoldWoff2}) format('woff2'),
            url(${NanumGothicBoldWoff}) format('woff'),
            url(${NanumGothicBoldTtf}) format('truetype'),
            url(${NanumGothicBoldSvg}) format('svg');
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

    #root {
        position: relative;
        z-index: 1;
    }

    #modal {
        position: relative;
        z-index: 2;
    }
`;
