import ApiStatus from 'constants/ApiStatus';

interface IImageInfo {
    src: string;
    width: number;
    height: number;
    status: ApiStatus;
}

export default IImageInfo;
