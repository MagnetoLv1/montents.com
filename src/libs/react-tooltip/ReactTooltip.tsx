import { FC } from 'react';
import ReactTooltipBase, { TooltipProps } from 'react-tooltip';

import JSON from '~/types/JSON';

interface ReactTooltipProps extends TooltipProps {}

interface ReactTooltip extends FC<ReactTooltipProps> {
    show: (target: Element) => JSON;
    hide: (target?: Element) => JSON;
    rebuild: () => JSON;
}

const ReactTooltip: ReactTooltip = ({
    children,
    place = 'bottom',
    effect = 'solid',
    arrowColor = 'transparent',
    offset,
    ...props
}: ReactTooltipProps) => {
    if (!offset) {
        offset = {
            [place]: 5
        };
    }

    return (
        <ReactTooltipBase
            place={place}
            effect={effect}
            arrowColor={arrowColor}
            offset={offset}
            {...props}>
            {children}
        </ReactTooltipBase>
    );
};

ReactTooltip.rebuild = ReactTooltipBase.rebuild;
ReactTooltip.hide = ReactTooltipBase.hide;
ReactTooltip.show = ReactTooltipBase.show;

export default ReactTooltip;
