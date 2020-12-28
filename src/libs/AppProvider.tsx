import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'config/moment/locale';

import { initApiMock } from 'mocks';

import { USE_API_MOCK } from 'constants/env';

import { store } from 'modules';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/Theme';

// api 모킹 추가 (USE_API_MOCK 에 따라 on/off)
if (USE_API_MOCK) {
    initApiMock({ delayResponse: 300 });
}

/**
 * 앱에 필수적인 각종 provider 세팅
 * @param children
 * @constructor
 */
const AppProvider: FC = ({ children }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            {children}
        </ThemeProvider>
    </Provider>
);

export default AppProvider;