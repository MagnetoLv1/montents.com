// in config.js
import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/App.style';
import { theme } from 'styles/Themes';

addDecorator((context) => (
    <Provider store={initStore()}>
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            {context()}
        </ThemeProvider>
    </Provider>
));
