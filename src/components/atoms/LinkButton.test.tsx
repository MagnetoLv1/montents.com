import { Route } from 'react-router';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import { ButtonText } from 'components/atoms/Button';
import LinkButton from 'components/atoms/LinkButton';

describe('Components | Atoms | <LinkButton />', () => {
    const text = 'link button',
        path = '/name';

    let history, location;

    const renderLinkButton = () => {
        const handleClick = jest.fn();

        const result = render(
            <>
                <LinkButton path={path} onClick={handleClick}>
                    <ButtonText>{text}</ButtonText>
                </LinkButton>
                <Route
                    path="*"
                    render={({
                        history: currentHistory,
                        location: currentLocation
                    }) => {
                        location = currentLocation;
                        history = currentHistory;
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
