export enum Device {
    BROWSER,
    TABLET,
    TABLET_LANDSCAPE,
    TABLET_PORTRAIT,
    MOBILE,
    MOBILE_LANDSCAPE,
    MOBILE_PORTRAIT
}

interface DeviceInfo {
    name: Device;
    min?: number;
    max?: number;
}

export const devicesInfo: DeviceInfo[] = [
    {
        name: Device.BROWSER,
        min: 960
    },
    {
        name: Device.TABLET,
        max: 959
    },
    {
        name: Device.TABLET_LANDSCAPE,
        max: 959,
        min: 768
    },
    {
        name: Device.TABLET_PORTRAIT,
        max: 767,
        min: 480
    },
    {
        name: Device.MOBILE,
        max: 767
    },
    {
        name: Device.MOBILE_LANDSCAPE,
        max: 767,
        min: 480
    },
    {
        name: Device.MOBILE_PORTRAIT,
        max: 479
    }
];
