import React, { FC } from 'react';
import { useParams } from 'react-router';

import MainGnb from 'components/layouts/MainGnb';
import PostList from 'components/organisms/PostList';

const Index: FC = () => {
    const { group: groupParam = null } = useParams<{ group?: string }>();
    const group =
        groupParam === null || isNaN(parseInt(groupParam))
            ? null
            : parseInt(groupParam);

    return (
        <MainGnb>
            <PostList group={group} />
        </MainGnb>
    );
};

export default Index;
