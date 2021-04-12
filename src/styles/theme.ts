import deepmerge from 'deepmerge';

export interface Theme {
    colors: {
        bodyBackground: string;
        surfaceBackground: string;
        loadingBackground: string;
        hoverBackground: string;
        primaryButtonBackground: string;
        secondaryButtonBackground: string;

        grayIcon: string;

        contentShadow: string;

        primaryText: string;
        secondaryText: string;
        whiteText: string;

        divider: string;
    };

    effect: {
        contentLoadingOpacity: number;
        shadow: string;
    };
}

export const theme: Theme = {
    colors: {
        // 각종 background color
        bodyBackground: '#f0f2f5',
        surfaceBackground: 'white',
        loadingBackground: '#e4e6eb',
        hoverBackground: 'rgba(0, 0, 0, 0.05)',

        // button color
        primaryButtonBackground: '#1877f2',
        secondaryButtonBackground: '#e3e3e3',

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

export const darkTheme: Theme = deepmerge(theme, {
    colors: {
        bodyBackground: 'black'
    }
});
