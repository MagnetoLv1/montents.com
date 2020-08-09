import React, { FC } from 'react';

import IClassName from 'types/IClassName';
import IBoard from 'types/response/IBoard';

import useImagesInfo from 'hooks/useImagesInfo';

import SingleImage from 'components/molecules/board/image/SingleImage';

interface IImages extends IClassName {
    board: IBoard;
}

const Images: FC<IImages> = ({ board }: IImages) => {
    const imagesInfo = useImagesInfo(board.images);

    console.log(JSON.stringify(imagesInfo));

    return <SingleImage images={imagesInfo} />;
};

export default Images;
