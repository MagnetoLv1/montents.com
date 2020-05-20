/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';

import GroupList from 'components/organisms/GroupList';

const style = css`
    padding-top: 1.6rem;
`;

const LeftPanel: FC = () => (
    <nav id="left-panel" data-testid="left-panel" css={style}>
        <GroupList />
    </nav>
);

export default LeftPanel;
