import React, { FC, isValidElement, PropsWithChildren, ReactNode } from 'react';

type WrapperFunction = (children: ReactNode) => ReactNode;

export interface ConditionWrapperProps {
    condition: boolean;
    wrapper: string | ReactNode | WrapperFunction;
    denyWrapper?: null | string | ReactNode | WrapperFunction;
}

const ConditionWrapper: FC<ConditionWrapperProps> = ({
    condition,
    wrapper,
    denyWrapper = null,
    children
}: PropsWithChildren<ConditionWrapperProps>) => {
    const wrap = condition ? wrapper : denyWrapper;

    let wrappedChildren;
    if (typeof wrap === 'string') {
        wrappedChildren = React.createElement(wrap, {}, children);
    } else if (isValidElement(wrap)) {
        wrappedChildren = React.cloneElement(wrap, {}, children);
    } else if (typeof wrap === 'function') {
        wrappedChildren = wrap(children);
    } else {
        wrappedChildren = children;
    }

    return wrappedChildren;
};

export default ConditionWrapper;
