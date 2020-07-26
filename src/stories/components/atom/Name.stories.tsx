import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import Name from 'components/atoms/Name';

export default {
    title: 'components|atoms/Name',
    subtitle: '각종 이름을 넣을 컴포넌트',
    component: Name,
    decorators: [withKnobs]
};

export const name = () => {
    const name = text('name', 'SeoHwan Cho');

    return <Name text={name} />;
};

name.story = {
    name: 'Default'
};
