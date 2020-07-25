import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import Logo from 'svg/logo.svg';

import Icon from 'components/atoms/Icon';

export default {
    title: 'components|atoms/Icon',
    subtitle: '기본 아이콘',
    component: Icon,
    decorators: [withKnobs]
};

export const icon = () => {
    return (
        <Icon>
            <Logo />
        </Icon>
    );
};

export const imageIcon = () => {
    const src = text('src', 'http://www.montents.com/images/logo.png'),
        alt = text('alt', 'logo');

    return <Icon src={src} alt={alt} />;
};

icon.story = {
    name: 'Default'
};
