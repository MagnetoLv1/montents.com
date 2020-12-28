import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import styled from 'libs/styled';

import Button, { ButtonProps, Icon, Text } from 'components/atoms/Button';
import ImageBase from 'components/atoms/Image';

export default {
    title: 'Components/Atoms/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: '기본 button 태그 컴포넌트'
            }
        }
    }
};

interface StoryButtonProps {
    color?: string;
}

const StoryButton = styled(Button)<StoryButtonProps>`
    background: ${({ color }) => color || '#fff'};
`;

/**
 * 기본 버튼 story
 * @param children
 * @constructor
 */
export const DefaultButton: Story<ButtonProps> = ({
    children
}: ButtonProps) => (
    <StoryButton
        onClick={action('onClick')}
        onMouseDown={action('onMouseDown')}
        onMouseUp={action('onMouseUp')}>
        {children}
    </StoryButton>
);

DefaultButton.storyName = 'Default';

DefaultButton.args = {
    children: 'button'
};

/**
 * 텍스트 버튼 story
 * @param color
 * @param text
 * @constructor
 */
interface TextButtonProps {
    text: string;
    color: string;
}

export const TextButton: Story<TextButtonProps> = ({
    color,
    text
}: TextButtonProps) => (
    <StoryButton
        onClick={action('onClick')}
        onMouseDown={action('onMouseDown')}
        onMouseUp={action('onMouseUp')}
        color={color}>
        <Text>{text}</Text>
    </StoryButton>
);

TextButton.argTypes = {
    color: {
        control: 'color'
    },
    text: {
        control: 'text'
    }
};

TextButton.args = {
    color: '#fff',
    text: '버튼 텍스트'
};

const Image = styled(ImageBase)`
    width: 100%;
    height: 100%;
`;

/**
 * 아이콘 버튼 story
 * @param text
 * @param color
 * @constructor
 */
interface IconButtonProps {
    text: string;
    color: string;
}

export const IconButton: Story<IconButtonProps> = ({
    text,
    color
}: IconButtonProps) => {
    return (
        <StoryButton
            onClick={action('onClick')}
            onMouseDown={action('onMouseDown')}
            onMouseUp={action('onMouseUp')}
            color={color}>
            <Icon>
                <Image src="/images/logo.svg" alt="logo" />
            </Icon>
            <Text>{text}</Text>
        </StoryButton>
    );
};

IconButton.argTypes = {
    color: {
        control: 'color'
    },
    text: {
        control: 'text'
    }
};

IconButton.args = {
    text: '버튼 텍스트',
    color: '#fff'
};
