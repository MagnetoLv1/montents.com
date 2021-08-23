import { FC } from 'react';

import render from 'libs/testUtils';
import withLoading from 'libs/hoc/withLoading';

describe('Libs | HOC | withLoading', () => {
    const loadingText = 'loading...';
    const loadedText = 'loaded';

    const renderLoadableComponent = (loading = false) => {
        const Loading: FC = () => <div>{loadingText}</div>;
        const Loaded: FC = () => <div>{loadedText}</div>;

        const LoadableComponent = withLoading(Loaded, Loading);
        return render(<LoadableComponent loading={loading} />);
    };

    it('로딩중인 컴포넌트 노출', () => {
        const { getByText } = renderLoadableComponent(true);
        expect(getByText(loadingText)).toBeInTheDocument();
    });

    it('로딩 완료된 컴포넌트 노출', () => {
        const { getByText } = renderLoadableComponent();
        expect(getByText(loadedText)).toBeInTheDocument();
    });
});
