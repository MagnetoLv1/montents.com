// in config.js
import React from 'react';
import { addDecorator } from '@storybook/react';

import AppProvider from 'libs/AppProvider';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/Themes';

addDecorator((context) => (
    <AppProvider store={initStore()} theme={theme} style={GlobalStyle}>
        {context()}
    </AppProvider>
));
