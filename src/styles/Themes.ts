import deepmerge from 'deepmerge';

export const theme = {
    colors: {
        bodyBackground: '#f0f2f5',
        headerBackground: 'white',
        loadingBackground: '#e4e6eb',
        hoverBackground: 'rgba(0, 0, 0, 0.05)'
    },
    size: {
        headerHeight: '6rem'
    },
    shadow: '0 0 0.7rem #dbdbdb'
};

export const darkTheme = deepmerge(theme, {
    colors: {
        bodyBackground: 'black'
    }
});

export type TTheme = typeof theme | typeof darkTheme;
