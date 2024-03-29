import '~/config/moment/locale';
import '@choseohwan/utils';

import { Global, ThemeProvider } from '@emotion/react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { USE_API_MOCK } from '~/constants/env';
import Modal from '~/libs/Modal';
import ReactTooltip from '~/libs/react-tooltip';
import { initApiMock } from '~/mocks';
import { store } from '~/modules';
import { GlobalStyle } from '~/styles/GlobalStyle';
import { theme } from '~/styles/theme';

// api 모킹 추가 (USE_API_MOCK 에 따라 on/off)
if (USE_API_MOCK) {
    initApiMock({ delayResponse: 300 });
}

/**
 * 앱에 필수적인 각종 provider 세팅
 *
 * @param props
 * @param props.children
 * @class
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
