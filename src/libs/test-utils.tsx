import React, { FC } from 'react';
import { render as reactRender } from '@testing-library/react';

import AppProvider from 'libs/AppProvider';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/App.style';
import { theme } from 'styles/Themes';

const AllTheProviders = (
    store: ReturnType<typeof initStore> = initStore()
): FC => ({ children }) => {
    return (
        <AppProvider store={store} theme={theme} style={GlobalStyle}>
            {children}
        </AppProvider>
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
