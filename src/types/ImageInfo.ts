import ApiStatus from 'constants/ApiStatus';

interface ImageInfo {
    src: string;
    width: number;
    height: number;
    status: ApiStatus;
}

export default ImageInfo;
