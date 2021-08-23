import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Anchor, { AnchorProps } from 'components/atoms/Anchor';

export default {
    title: 'Components/Atoms/Anchor',
    component: Anchor,
    argTypes: {
        href: {
            description: '이동 링크'
        },
        onClick: {
            description: '클릭 이벤트'
        }
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '기본 anchor 태그 컴포넌트'
            }
        }
    }
};

export const DefaultAnchor: Story<AnchorProps> = ({
    onClick,
    ...props
}: AnchorProps) => {
    const handleClick = (event) => {
        event.preventDefault();

        action(`href`)(event.target.href);

        if (onClick) onClick(event);
    };

    return (
        <Anchor {...props} onClick={handleClick}>
            anchor tag
        </Anchor>
    );
};

DefaultAnchor.storyName = 'Default';

DefaultAnchor.args = {
    href: '#'
};
