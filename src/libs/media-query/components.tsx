import React, { FC } from 'react';

import {
    useBrowserSize,
    useMobileSize,
    useTabletSize
} from 'libs/media-query/hooks';

export const BrowserView: FC = ({ children }) => {
    const isBrowser = useBrowserSize();

    return <>{isBrowser && children}</>;
};

export const TabletView: FC = ({ children }) => {
    const isTablet = useTabletSize();

    return <>{isTablet && children}</>;
};

export const MobileView: FC = ({ children }) => {
    const isMobile = useMobileSize();

    return <>{isMobile && children}</>;
};
