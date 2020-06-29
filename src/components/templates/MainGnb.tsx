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

const LeftPanelContainer = styled.div`
    position: relative;

    width: 25vw;
    max-width: 32rem;
    min-width: 28rem;

    min-height: inherit;

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    flex-basis: 25%;
    flex-grow: 0;
`;

const LeftPanelSubContainer = styled.div`
    position: fixed;

    display: flex;
    width: inherit;
    min-width: inherit;
    max-width: inherit;
    height: 0;
    min-height: inherit;
    max-height: 0;
`;

const LeftPanel = styled(LeftPanelBase)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    overflow-y: scroll;
    flex-grow: 1;
`;

const Contents = styled.div`
    display: flex;
    flex-grow: 1;
`;

const MainGnb: FC = ({ children }: PropsWithChildren<{}>) => (
    <div>
        <Header />
        <Container>
            {/* 좌측 네비게이션 */}
            <LeftPanelContainer>
                <LeftPanelSubContainer>
                    <LeftPanel />
                </LeftPanelSubContainer>
            </LeftPanelContainer>

            {/* 내용 */}
            <Contents>{children}</Contents>
        </Container>
    </div>
);

export default MainGnb;
