import React, { FC, HTMLAttributes } from 'react';

import styled from 'libs/styled';

import GroupList from 'components/organisms/GroupList';

const LeftPanelWrap = styled.nav`
    padding-top: 1.6rem;
`;

const LeftPanel: FC<HTMLAttributes<HTMLDivElement>> = ({
    className
}: HTMLAttributes<HTMLDivElement>) => (
    <LeftPanelWrap className={className} data-testid="left-panel">
        <GroupList />
    </LeftPanelWrap>
);

export default LeftPanel;
