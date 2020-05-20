/** @jsx jsx */
import { FC, PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/core';

import Header from 'components/organisms/Header';
import LeftPanel from 'components/organisms/LeftPanel';

import { TTheme } from 'styles/Themes';

const style = (theme: TTheme) => css`
    & > #header {
        position: fixed;
        z-index: 1;
        right: 0;
        top: 0;
        left: 0;
    }

    & > #body {
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: row;
        top: ${theme.size.headerHeight};
        min-height: calc(100vh - ${theme.size.headerHeight});

        & > #left-panel {
            width: 25vw;
            flex-basis: 25%;
            max-width: 32rem;
            min-width: 28rem;
            flex-grow: 0;
        }

        & > #contents {
            display: flex;
            flex-grow: 1;
        }
    }
`;

const MainGnb: FC = ({ children }: PropsWithChildren<{}>) => (
    <div css={style}>
        <Header />
        <div id="body">
            <LeftPanel />
            <div id="contents">{children}</div>
        </div>
    </div>
);

export default MainGnb;
