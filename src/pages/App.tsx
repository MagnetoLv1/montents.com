import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from '@reach/router';

import AppProvider from 'libs/AppProvider';

import Index from 'pages/index';

import MainGnb from 'components/layouts/MainGnb';

const App: FC = () => (
    <AppProvider>
        <MainGnb>
            <Switch>
                {/* 메인 */}
                <Route path="/" exact>
                    <Index />
                </Route>

                {/* 존재하지 않는 페이지 접근 시 메인으로 이동 */}
                <Redirect to={'/'} />
            </Switch>
        </MainGnb>
    </AppProvider>
);

export default App;
