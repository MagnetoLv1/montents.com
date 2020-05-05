import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

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
        </ThemeProvider>
    </Provider>
);

export default AppProvider;
