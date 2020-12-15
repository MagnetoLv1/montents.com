import * as React from 'react';
import { NextPage } from 'next';

import MainGnb from 'components/templates/MainGnb';

import ContentsList from 'components/organisms/ContentsList';

const Home: NextPage = () => {
    return (
        <MainGnb>
            <ContentsList />
        </MainGnb>
    );
};

export default Home;
