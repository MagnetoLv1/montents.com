import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

import Anchor from 'components/atoms/Anchor';

export default {
    title: 'components|atoms/Anchor',
    subtitle: '기본 아이콘',
    component: Anchor,
    decorators: [withKnobs]
};

export const anchor = () => {
    const anchorText = text('text', 'anchor text'),
        href = text('href', 'http://google.com');

    return (
        <Anchor href={href} onClick={action('onClick')}>
            {anchorText}
        </Anchor>
    );
};

anchor.story = {
    name: 'Default'
};

export const nonActionAnchor = () => (
    <Anchor>{text('text', 'anchor text')}</Anchor>
);
