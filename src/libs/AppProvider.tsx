import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'config/moment/locale';

import { initStore } from 'modules/store';

import { TTheme } from 'styles/Themes';

interface IAppProvider {
    store: ReturnType<typeof initStore>;
    theme: TTheme;
    style: ReturnType<typeof css> | ((theme: TTheme) => ReturnType<typeof css>);
}

export const AppProvider: FC<IAppProvider> = ({
    store,
    theme,
    style,
    children
}: PropsWithChildren<IAppProvider>) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Global styles={style} />
            {children}
            <ReactTooltip
                type="dark"
                multiline={true}
                effect="solid"
                place="bottom"
            />
        </ThemeProvider>
    </Provider>
);

export default AppProvider;
