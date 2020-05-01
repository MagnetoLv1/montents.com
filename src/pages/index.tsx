import * as React from 'react';
import { NextPage } from 'next';

import GnbLayout from 'components/templates/GnbLayout';

const Home: NextPage = () => {
    return (
        <GnbLayout>
            <p>Hello, Next Ts</p>
        </GnbLayout>
    );
};

export default Home;
