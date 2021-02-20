interface DeviceInfo {
    name: string;
    min?: number;
    max?: number;
}

const devicesInfo: DeviceInfo[] = [
    {
        name: 'tablet',
        min: 768,
        max: 959
    },
    {
        name: 'mobile',
        max: 767
    },
    {
        name: 'mobile-landscape',
        max: 767,
        min: 480
    },
    {
        name: 'mobile-portrait',
        max: 479
    }
];

/**
 * media query list
 */
interface Media {
    [key: string]: string;
}

const media = devicesInfo.reduce<Media>((media, { name, max, min }) => {
    const sizeTextList: string[] = [];
    if (max) sizeTextList.push(`(max-width: ${max}px)`);
    if (min) sizeTextList.push(`(min-width: ${min}px)`);

    if (sizeTextList.length === 0) return media;

    media[name] = `@media only screen and ${sizeTextList.join(' and ')}`;
    return media;
}, {});

export default media;
