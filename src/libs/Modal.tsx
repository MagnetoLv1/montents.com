import { FC, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = window.document.getElementById('modal');

const Modal: FC = ({ children }) => {
    const modalElement = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        if (modalRoot === null) return;

        modalRoot.appendChild(modalElement);

        return () => {
            modalRoot.removeChild(modalElement);
        };
    }, [modalElement]);

    return createPortal(children, modalElement);
};

export default Modal;
