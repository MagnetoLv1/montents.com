import { useMediaQuery } from 'react-responsive';

import { Device, queries } from 'libs/media-query';

export const useBrowserSize = (): boolean =>
    useMediaQuery({
        query: queries[Device.BROWSER]?.join(' and ') || ''
    });

export const useTabletSize = (): boolean =>
    useMediaQuery({
        query: queries[Device.TABLET]?.join(' and ') || ''
    });

export const useTabletLandscapeSize = (): boolean =>
    useMediaQuery({
        query: queries[Device.TABLET_LANDSCAPE]?.join(' and ') || ''
    });

export const useMobileSize = (): boolean =>
    useMediaQuery({
        query: queries[Device.MOBILE]?.join(' and ') || ''
    });

export const useMobilePortraitSize = (): boolean =>
    useMediaQuery({
        query: queries[Device.MOBILE_PORTRAIT]?.join(' and ') || ''
    });
