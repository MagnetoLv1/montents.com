import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import ConditionWrapper, {
    ConditionWrapperProps
} from 'components/atoms/ConditionWrapper';

export default {
    title: 'Components/Atoms/ConditionWrapper',
    component: ConditionWrapper,
    parameters: {
        docs: {
            description: {
                component: '조건에 따라 wrapper 반환'
            }
        }
    },
    argTypes: {
        condition: {
            description: 'wrapper 노출 조건',
            control: 'boolean'
        },
        wrapper: {
            description: 'condition 이 true 일 경우 반환시킬 wrapper',
            control: null
        },
        denyWrapper: {
            description: 'condition 이 false 일 경우 반환시킬 wrapper',
            control: null
        }
    }
};

/**
 * 기본 ConditionWrapper story
 * @param condition
 * @constructor
 */
export const DefaultConditionWrapper: Story<ConditionWrapperProps> = ({
    condition
}: ConditionWrapperProps) => {
    return (
        <ConditionWrapper
            condition={condition}
            wrapper={(children) => <div>correct wrapper: {children}</div>}
            denyWrapper={(children) => <div>wrong wrapper: {children}</div>}>
            test
        </ConditionWrapper>
    );
};

DefaultConditionWrapper.storyName = 'Default';

DefaultConditionWrapper.args = {
    condition: true
};

interface WrapperProps {
    color: string;
}

const Wrapper = styled.div<WrapperProps>`
    background: ${({ color }) => color};
    padding: 10px;
`;

/**
 * ConditionWrapper 컴포넌트 예시 story
 * @param children
 * @param condition
 * @param wrapperColor
 * @param denyWrapperColor
 * @constructor
 */
interface ExampleConditionWrapper {
    children: string;
    condition: boolean;
    wrapperColor: string;
    denyWrapperColor: string;
}

export const ExampleConditionWrapper: Story<ExampleConditionWrapper> = ({
    children,
    condition,
    wrapperColor,
    denyWrapperColor
}: ExampleConditionWrapper) => {
    return (
        <ConditionWrapper
            condition={condition}
            wrapper={<Wrapper color={wrapperColor} />}
            denyWrapper={<Wrapper color={denyWrapperColor} />}>
            {children}
        </ConditionWrapper>
    );
};

ExampleConditionWrapper.storyName = 'Example';

ExampleConditionWrapper.args = {
    children: 'children',
    condition: true,
    wrapperColor: '#ff0',
    denyWrapperColor: '#0ff'
};

ExampleConditionWrapper.argTypes = {
    wrapper: {
        table: {
            disable: true
        }
    },
    denyWrapper: {
        table: {
            disable: true
        }
    },

    children: {
        control: 'text'
    },
    condition: {
        control: 'boolean'
    },
    wrapperColor: {
        control: 'color'
    },
    denyWrapperColor: {
        control: 'color'
    }
};
