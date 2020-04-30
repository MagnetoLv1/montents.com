import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

interface ILayout {
    title?: string;
}

const GnbLayout: FC<ILayout> = ({
    children,
    title
}: PropsWithChildren<ILayout>) => (
    <div>
        <Head>
            <title>{title || 'ChoSeoHwan'}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);

export default GnbLayout;
