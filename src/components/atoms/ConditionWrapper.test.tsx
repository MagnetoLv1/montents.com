import ConditionWrapper from '~/components/atoms/ConditionWrapper';
import render from '~/libs/testUtils';

describe('Components | Atoms | <ConditionWrapper />', () => {
    const childrenText = 'childrenText';
    const renderComponent = (condition, wrapper, denyWrapper) =>
        render(
            <ConditionWrapper
                condition={condition}
                wrapper={wrapper}
                denyWrapper={denyWrapper}>
                <p>{childrenText}</p>
            </ConditionWrapper>
        );

    describe('조건이 참일 경우 wrapper 의 내용 노출 ', () => {
        it('wrapper 가 문자일 경우', () => {
            const { container } = renderComponent(true, 'div', null);
            const div = container.querySelector('div');

            expect(div).toHaveTextContent(childrenText);
        });

        it('wrapper 가 ReactNode 일 경우', () => {
            const { getByRole } = renderComponent(
                true,
                <header role="header" />,
                null
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper 가 함수일 경우', () => {
            const { getByRole } = renderComponent(
                true,
                (children) => <header role="header">{children}</header>,
                null
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper 가 null 인 경우', () => {
            const { getByText } = renderComponent(true, null, null);

            const children = getByText(childrenText);

            expect(children).toHaveTextContent(childrenText);
        });
    });

    describe('조건이 거짓일 경우 denyWrapper 의 내용 노출 ', () => {
        it('wrapper 가 문자인 경우', () => {
            const { container } = renderComponent(false, 'div', 'div');
            const div = container.querySelector('div');

            expect(div).toHaveTextContent(childrenText);
        });

        it('wrapper 가 ReactNode 인 경우', () => {
            const { getByRole } = renderComponent(
                false,
                'div',
                <header role="header" />
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper 가 함수인 경우', () => {
            const { getByRole } = renderComponent(false, 'div', (children) => (
                <header role="header">{children}</header>
            ));

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper 가 null 인 경우', () => {
            const { getByText } = renderComponent(false, null, null);

            const children = getByText(childrenText);

            expect(children).toHaveTextContent(childrenText);
        });
    });
});
