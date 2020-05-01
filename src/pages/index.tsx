import * as React from 'react';
import { NextPage } from 'next';

import MainGnb from 'components/templates/MainGnb';

const Home: NextPage = () => {
    return (
        <MainGnb>
            <p>Hello, Next Ts</p>
        </MainGnb>
    );
};

export default Home;
