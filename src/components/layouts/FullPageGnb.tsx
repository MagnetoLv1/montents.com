import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import HeaderBase, {
    HeaderProps
} from 'components/organisms/gnb/fullPage/Header';

const FullPageGnbStyle = styled.div`
    width: 100vw;
    height: 100vh;

    background: black;
`;

const Header = styled(HeaderBase)`
    position: fixed;
    left: 0;
    top: 0;

    height: 5.5rem;
    padding: 0 1.6rem;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

interface FullPageGnbProps {
    onClose?: HeaderProps['onClose'];
}

const FullPageGnb: FC<FullPageGnbProps> = ({
    children,
    onClose
}: PropsWithChildren<FullPageGnbProps>) => (
    <FullPageGnbStyle>
        <Header onClose={onClose} data-testid="full-page-gnb-header" />
        <Content>{children}</Content>
    </FullPageGnbStyle>
);

export default FullPageGnb;
