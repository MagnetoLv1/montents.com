import React, { FC, HTMLAttributes } from 'react';

import styled from 'libs/styled';

import GroupList from 'components/organisms/GroupList';

const LeftPanelStyle = styled.nav`
    padding-top: 1.6rem;
`;

interface LeftPanelProps extends HTMLAttributes<HTMLDivElement> {}

const LeftPanel: FC<LeftPanelProps> = ({ className }: LeftPanelProps) => (
    <LeftPanelStyle className={className} data-testid="left-panel">
        <GroupList data-testid="group-list" />
    </LeftPanelStyle>
);

export default LeftPanel;
