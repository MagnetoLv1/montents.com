import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { PostsAction } from 'modules/PostsModule';

import GnbLayout from 'components/templates/GnbLayout';

import PostsList from 'components/organisms/PostsList';

import Error from 'components/atoms/Error';
import Loading from 'components/atoms/Loading';

const Posts: NextPage = () => {
    const dispatch = useDispatch();

    const { status, error } = useSelector(
        ({ PostsReducer }: TStoreState) => ({
            status: PostsReducer.status,
            error: PostsReducer.error
        }),
        shallowEqual
    );

    // clear post list data when unmount
    useEffect(
        () => () => {
            dispatch(PostsAction.clearPosts());
        },
        []
    );

    return (
        <GnbLayout title={'Post List'}>
            {status === ApiStatus.LOADING && <Loading />}
            {status === ApiStatus.ERROR && error && <Error message={error} />}
            {status === ApiStatus.SUCCESS && <PostsList />}
        </GnbLayout>
    );
};

Posts.getInitialProps = ({ store }) => {
    store.dispatch(PostsAction.fetchPosts());

    return {};
};

export default Posts;
