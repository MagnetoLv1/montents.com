/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { action } from '@storybook/addon-actions';
import {
    boolean,
    color,
    number,
    text,
    withKnobs
} from '@storybook/addon-knobs';

import Button from 'components/atoms/Button';

import Logo from 'svg/logo.svg';

export default {
    title: 'components|atoms/Button',
    subtitle: '기본 버튼',
    component: Button,
    decorators: [withKnobs]
};

const iconStyle = css`
    width: 2rem;
    height: 2rem;
`;

const buttonStyle = (width: number, height: number, background: string) => css`
    margin: 1rem;
    width: ${width > 0 ? `${width}rem` : 'auto'};
    height: ${height > 0 ? `${height}rem` : 'auto'};
    background: ${background};
`;

export const button = () => {
    const icon = boolean('icon', true);
    const buttonText = text('Text', 'My Button');
    const buttonWidth = number('width rem (0 is auto)', 0),
        buttonHeight = number('height rem (0 is auto)', 0),
        buttonBackground = color('background', '#fff');

    return (
        <Button
            css={buttonStyle(buttonWidth, buttonHeight, buttonBackground)}
            onClick={action('onClick')}>
            {icon && <Logo className="icon" css={iconStyle} />}
            {buttonText}
        </Button>
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
        <Button
            css={buttonStyle(buttonWidth, buttonHeight, buttonBackground)}
            onClick={action('onClick')}>
            {buttonText}
        </Button>
    );
};

export const loadingButton = () => {
    const buttonWidth = number('width rem', 10, { min: 10 }),
        buttonHeight = number('height rem (0 is auto)', 0),
        buttonBackground = color('background', '#fff');

    return (
        <Button
            css={buttonStyle(buttonWidth, buttonHeight, buttonBackground)}
            loading>
            <div className="icon" />
            <div className="text" />
        </Button>
    );
};
