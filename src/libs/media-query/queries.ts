import { mapObject } from 'underscore';

import { Device, devicesInfo } from 'libs/media-query';

type Queries = {
    [key in Device]?: string[];
};

export const queries: Queries = devicesInfo.reduce<Queries>(
    (media, { name, max, min }) => {
        const sizeTextList: string[] = [];
        if (max) sizeTextList.push(`(max-width: ${max}px)`);
        if (min) sizeTextList.push(`(min-width: ${min}px)`);

        media[name] = sizeTextList;
        return media;
    },
    {}
);

export const mq = mapObject(
    queries,
    (query) => `@media screen ${query && `and ${query.join(' and ')}`}`
);
