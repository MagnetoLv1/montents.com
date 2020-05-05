import React from 'react';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import RootApp, { AppContext } from 'next/app';
import { END } from 'redux-saga';

import AppProvider from 'libs/AppProvider';
import axios from 'libs/axios';

import TStoreState from 'types/TStoreState';

import { initStore } from 'modules/store';

import { sagaTask } from 'sagas';

import { GlobalStyle } from 'styles/App.style';
import { theme } from 'styles/Themes';

class App extends RootApp<ReduxWrapperAppProps<TStoreState>> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        // redux-saga SSR Promise setting
        if (ctx.isServer) {
            ctx.store.dispatch(END);
            await sagaTask.toPromise();
        }

        // axios SSR cookie setting
        if (ctx.req && ctx.req.headers.cookie) {
            axios.defaults.headers = {
                ...axios.defaults.headers,
                cookie: ctx.req.headers.cookie
            };
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <AppProvider store={store} theme={theme} style={GlobalStyle}>
                <Component {...pageProps} />
            </AppProvider>
        );
    }
}

export default withRedux(initStore)(App);
