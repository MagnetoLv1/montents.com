import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { DOMAttributes } from 'react';

import LinkButton, { LinkButtonProps } from '~/components/atoms/LinkButton';

export default {
    title: 'Components/Atoms/LinkButton',
    component: LinkButton,
    argTypes: {
        path: {
            description: '이동할 링크'
        },
        state: {
            description: 'state 데이터'
        }
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'react-router Link 이동용 Button'
            }
        }
    }
};

export const DefaultLinkButton: Story<LinkButtonProps> = ({
    path,
    state,
    onClick,
    ...props
}: LinkButtonProps) => {
    const handleClick: DOMAttributes<HTMLDivElement>['onClick'] = (event) => {
        event.preventDefault();

        action(`path`)(path, JSON.stringify(state));

        if (onClick) onClick(event);
    };

    return (
        <LinkButton path={path} state={state} onClick={handleClick} {...props}>
            링크 버튼
        </LinkButton>
    );
};

DefaultLinkButton.storyName = 'Default';

DefaultLinkButton.args = {
    path: '/test',
    state: {}
};
