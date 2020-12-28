import deepmerge from 'deepmerge';

export const theme = {
    colors: {
        bodyBackground: '#f0f2f5',
        surfaceBackground: 'white',
        loadingBackground: '#e4e6eb',
        hoverBackground: 'rgba(0, 0, 0, 0.05)',

        grayIcon: '#5e6871',
        secondaryText: '#65676b',

        contentShadow: 'rgba(0, 0, 0, 0.2)',

        primaryText: '#050505'
    },
    size: {
        headerHeight: '6rem'
    },
    effect: {
        contentLoadingOpacity: 0.25,

        shadow: '0 0 0.7rem #dbdbdb'
    }
};

export const darkTheme = deepmerge(theme, {
    colors: {
        bodyBackground: 'black'
    }
});

export type Theme = typeof theme | typeof darkTheme;
