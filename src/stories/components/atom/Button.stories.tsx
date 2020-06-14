import React from 'react';
import { action } from '@storybook/addon-actions';
import {
    boolean,
    color,
    number,
    text,
    withKnobs
} from '@storybook/addon-knobs';

import styled from 'libs/styled';

import Logo from 'svg/logo.svg';

import Button, {
    Icon,
    LoadingIcon,
    LoadingText,
    Text
} from 'components/atoms/Button';

export default {
    title: 'components|atoms/Button',
    subtitle: '기본 버튼',
    component: Button,
    decorators: [withKnobs]
};

interface IStoryButton {
    width: number;
    height: number;
    background: string;
}

const StoryButton = styled(Button)<IStoryButton>`
    margin: 1rem;
    width: ${({ width }) => (width > 0 ? `${width}rem` : 'auto')};
    height: ${({ height }) => (height > 0 ? `${height}rem` : 'auto')};
    background: ${({ background }) => background};
`;

const StoryButtonIcon = styled(Icon)`
    width: 2rem;
    height: 2rem;
`;

export const button = () => {
    const icon = boolean('icon', true);
    const buttonText = text('Text', 'My Button');
    const buttonWidth = number('width rem (0 is auto)', 0),
        buttonHeight = number('height rem (0 is auto)', 0),
        buttonBackground = color('background', '#fff');

    return (
        <StoryButton
            width={buttonWidth}
            height={buttonHeight}
            background={buttonBackground}
            onClick={action('onClick')}>
            {icon && (
                <StoryButtonIcon>
                    <Logo className="icon" />
                </StoryButtonIcon>
            )}
            <Text>{buttonText}</Text>
        </StoryButton>
    );
};

button.story = {
    name: 'Default'
};

export const textButton = () => {
    const buttonText = text('Text', 'My Button');
    const buttonWidth = number('width (0 is auto)', 0),
        buttonHeight = number('height (0 is auto)', 0),
        buttonBackground = color('background', '#fff');

    return (
        <StoryButton
            width={buttonWidth}
            height={buttonHeight}
            background={buttonBackground}
            onClick={action('onClick')}>
            <Text>{buttonText}</Text>
        </StoryButton>
    );
};

export const loadingButton = () => {
    const buttonWidth = number('width rem', 10, { min: 10 }),
        buttonHeight = number('height rem (0 is auto)', 0),
        buttonBackground = color('background', '#fff');

    return (
        <StoryButton
            width={buttonWidth}
            height={buttonHeight}
            background={buttonBackground}>
            <LoadingIcon />
            <LoadingText />
        </StoryButton>
    );
};
