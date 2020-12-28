import { HTMLAttributes } from 'react';

interface ClassName<
    T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>
> extends Pick<T, 'className'> {}

export default ClassName;
