import deepmerge from 'deepmerge';

export const theme = {
    colors: {
        // 각종 background color
        bodyBackground: '#f0f2f5',
        surfaceBackground: 'white',
        loadingBackground: '#e4e6eb',
        hoverBackground: 'rgba(0, 0, 0, 0.05)',
        primaryButtonBackground: '#1877f2',

        // icon color
        grayIcon: '#5e6871',

        // shadow color
        contentShadow: 'rgba(0, 0, 0, 0.2)',

        // text color
        primaryText: '#050505',
        secondaryText: '#65676b',
        whiteText: '#efefef',

        // divider color
        divider: '#ccc'
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
