import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'config/moment/locale';
import 'libs/prototypes';

import { initApiMock } from 'mocks';

import Modal from 'libs/Modal';
import ReactTooltip from 'libs/react-tooltip';

import { USE_API_MOCK } from 'constants/env';

import { store } from 'modules';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

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
            <Router>{children}</Router>
        </ThemeProvider>
        <Modal>
            <ReactTooltip />
        </Modal>
    </Provider>
);

export default AppProvider;
