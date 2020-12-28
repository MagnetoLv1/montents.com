import React, { FC } from 'react';

import AppProvider from 'libs/AppProvider';

import MainGnb from 'components/layouts/MainGnb';

const App: FC = () => (
    <AppProvider>
        <MainGnb>
            <p>Hello, Next Ts</p>
        </MainGnb>
    </AppProvider>
);

export default App;
