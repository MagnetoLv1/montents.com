import React, { FC, PropsWithChildren } from 'react';

import styled from 'libs/styled';

import HeaderBase from 'components/organisms/gnb/main/Header';
import LeftPanelBase from 'components/organisms/gnb/main/LeftPanel';

const headerHeight = '6rem';

const Header = styled(HeaderBase)`
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;

    height: ${headerHeight};
    box-sizing: border-box;
    padding: 0 1.5rem;

    background: ${({ theme }) => theme.colors.surfaceBackground};
    box-shadow: ${({ theme }) => theme.effect.shadow};
`;

const Container = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${headerHeight};
    min-height: calc(100vh - 6rem);
`;

const SideContainer = styled.div`
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

const SideScrollContainer = styled.div`
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
    flex-direction: column;
    display: flex;
    flex-basis: 50%;
    padding: 0 3.2rem;
    flex-grow: 1;
    align-items: center;
`;

const MainGnb: FC = ({ children }: PropsWithChildren<null>) => (
    <div>
        <Header data-testid="main-gnb-header" />
        <Container>
            {/* 좌측 네비게이션 */}
            <SideContainer data-testid="left-area">
                <SideScrollContainer>
                    <LeftPanel />
                </SideScrollContainer>
            </SideContainer>

            {/* 내용 */}
            <Contents>{children}</Contents>

            {/* 우측 네비게이션 */}
            <SideContainer data-testid="right-area" />
        </Container>
    </div>
);

export default MainGnb;
