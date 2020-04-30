export const theme = {
    colors: {
        background: '#f0f2f5'
    }
};

export const darkTheme = {
    colors: {
        background: 'black'
    }
};

export type TTheme = typeof theme | typeof darkTheme;
