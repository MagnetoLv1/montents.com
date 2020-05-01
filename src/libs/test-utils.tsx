import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { render as reactRender } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/App.style';
import { theme } from 'styles/Themes';

const AllTheProviders = (
    store: ReturnType<typeof initStore> = initStore()
): FC => ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyle} />
                {children}
            </ThemeProvider>
        </Provider>
    );
};

const render = (
    ui: React.ReactElement,
    { store = initStore(), ...options } = {}
) => reactRender(ui, { wrapper: AllTheProviders(store), ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export default render;
