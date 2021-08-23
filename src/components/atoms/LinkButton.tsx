import { History, Path } from 'history';
import { FC, MouseEventHandler } from 'react';
import { useHistory } from 'react-router';

import Button, { ButtonProps } from '~/components/atoms/Button';

export interface LinkButtonProps extends ButtonProps {
    path: Path;
    state?: History.LocationState;
}

const LinkButton: FC<LinkButtonProps> = ({
    path,
    state,
    children,
    onClick,
    ...props
}: LinkButtonProps) => {
    const history = useHistory();

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (onClick) onClick(event);

        history.push(path, state);
    };

    return (
        <Button {...props} onClick={handleClick}>
            {children}
        </Button>
    );
};

export default LinkButton;
