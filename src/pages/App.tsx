import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppProvider from 'libs/AppProvider';
import RestoreScroll from 'libs/RestoreScroll';

import Index from 'pages/index';
import NotFound from 'pages/NotFound';

import MainGnb from 'components/layouts/MainGnb';

const App: FC = () => (
    <AppProvider>
        <RestoreScroll />
        <MainGnb>
            <Switch>
                {/* 메인 */}
                <Route path="/:group(\d*)" exect>
                    <Index />
                </Route>

                {/* 존재하지 않는 페이지 접근 시 메인으로 이동 */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </MainGnb>
    </AppProvider>
);

export default App;
