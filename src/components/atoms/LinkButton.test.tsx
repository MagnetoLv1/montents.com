import { fireEvent } from '@testing-library/dom';
import { Route } from 'react-router';

import { ButtonText } from '~/components/atoms/Button';
import LinkButton from '~/components/atoms/LinkButton';
import render from '~/libs/testUtils';

describe('Components | Atoms | <LinkButton />', () => {
    const text = 'link button',
        path = '/name';

    let location;

    const renderLinkButton = () => {
        const handleClick = jest.fn();

        const result = render(
            <>
                <LinkButton path={path} onClick={handleClick}>
                    <ButtonText>{text}</ButtonText>
                </LinkButton>
                <Route
                    path="*"
                    render={({ location: currentLocation }) => {
                        location = currentLocation;
                        return null;
                    }}
                />
            </>
        );

        return {
            ...result,
            handleClick
        };
    };

    it('children 노출 확인', () => {
        const { getByText } = renderLinkButton();
        expect(getByText(text)).toBeInTheDocument();
    });

    it('링크 이동 확인', () => {
        const { getByText } = renderLinkButton();

        const button = getByText(text);
        fireEvent.click(button);

        expect(location.pathname).toBe(path);
    });

    it('클릭 이벤트 작동 확인', () => {
        const { handleClick, getByText } = renderLinkButton();

        const button = getByText(text);
        fireEvent.click(button);

        expect(handleClick).toBeCalled();
    });
});
