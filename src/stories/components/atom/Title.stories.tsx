import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

import Title from 'components/atoms/Title';

export default {
    title: 'components|atoms/Title',
    subtitle: '기본 제목 컴포넌트',
    component: Title,
    decorators: [withKnobs]
};

export const title = () => {
    const title = text('title', 'board title');

    return (
        <Title
            text={title}
            onClick={action('onClick')}
            onMouseEnter={action('onMouseEnter')}
            onMouseLeave={action('onMouseLeave')}
        />
    );
};

title.story = {
    name: 'Default'
};
