import { useEffect } from 'react';

import ReactTooltip from '~/libs/react-tooltip';

const useRebuild = (): void => {
    useEffect(() => {
        ReactTooltip.rebuild();
    });
};

export default useRebuild;
