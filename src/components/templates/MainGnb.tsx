import React, { FC, PropsWithChildren } from 'react';

import styled from 'libs/styled';

import HeaderBase from 'components/organisms/Header';
import LeftPanelBase from 'components/organisms/LeftPanel';

const Header = styled(HeaderBase)`
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: row;
    top: ${({ theme }) => theme.size.headerHeight};
    min-height: calc(100vh - ${({ theme }) => theme.size.headerHeight});
`;

const LeftPanel = styled(LeftPanelBase)`
    width: 25vw;
    flex-basis: 25%;
    max-width: 32rem;
    min-width: 28rem;
    flex-grow: 0;
`;

const Contents = styled.div`
    display: flex;
    flex-grow: 1;
`;

const MainGnb: FC = ({ children }: PropsWithChildren<{}>) => (
    <div>
        <Header />
        <Container>
            <LeftPanel />
            <Contents>{children}</Contents>
        </Container>
    </div>
);

export default MainGnb;
