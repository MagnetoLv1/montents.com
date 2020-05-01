import deepmerge from 'deepmerge';

export const theme = {
    colors: {
        bodyBackground: '#f0f2f5',
        headerBackground: 'white'
    },
    size: {
        headerHeight: '6rem'
    }
};

export const darkTheme = deepmerge(theme, {
    colors: {
        bodyBackground: 'black'
    }
});

export type TTheme = typeof theme | typeof darkTheme;
